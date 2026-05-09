const tools = [
  {
    title: 'Accelerators',
    stack: [
      {
        name: 'a16z speedrun',
        description: "Andreessen Horowitz's 12-week accelerator investing up to $1M in early-stage startups.",
        url: 'https://speedrun.a16z.com/',
      },
      {
        name: 'Accel Atoms',
        description: "Pre-seed scaling program for Indian and Indian-origin founders building globally.",
        url: 'https://atoms.accel.com/',
      },
      {
        name: 'AI Grant',
        description: "Accelerator run by Nat Friedman and Daniel Gross.",
        url: 'https://aigrant.com/',
      },
      {
        name: 'Alpha by a16z speedrun',
        description: "Fellowship placing early-career engineers at a16z portfolio companies or funding their startups.",
        url: 'https://alpha.a16zspeedrun.com/',
      },
      {
        name: 'Databricks AI Accelerator',
        description: "Invitation-only accelerator providing up to $250K funding for startups building on Databricks.",
        url: 'https://www.databricks.com/databricks-ai-accelerator-program',
      },
      {
        name: 'Elbow Grease',
        description: "AI accelerator by Gutter Capital.",
        url: 'https://www.elbowgrease.gutter.cc/',
      },
      {
        name: 'F.inc',
        description: "Large build space/incubator in Fort Mason.",
        url: 'https://f.inc/',
      },
      {
        name: 'fr8',
        description: "Amalgamation of hacker hotel/startup incubator/research lab in Sweden.",
        url: 'https://fr8.so/',
      },
      {
        name: 'Google AI Futures Fund',
        description: "Google's fund supporting AI research startup incubation.",
        url: 'https://labs.google/aifuturesfund',
      },
      {
        name: 'Greylock Edge',
        description: "Early-stage accelerator by Greylock Partners.",
        url: 'https://greylock.com/edge/',
      },
      {
        name: 'Neo Accelerator',
        description: "Elite accelerator for ambitious builders and world-class founders.",
        url: 'https://neo.com/accelerator',
      },
      {
        name: 'ODF (On Deck Fellowship)',
        description: "One-week fellowship program connecting founders and builders.",
        url: 'https://www.joinodf.com/',
      },
      {
        name: 'Palantir Fellowship',
        description: "Palantir's startup fellowship program.",
        url: 'https://palantir.events/startup-fellowship',
      },
      {
        name: 'PearX',
        description: "Pear VC's accelerator for early-stage founders.",
        url: 'https://pear.vc/pearx/',
      },
      {
        name: 'Telora',
        description: "Helping hackers start startups. Run by Eliam Medina.",
        url: 'https://telora.com/',
      },
      {
        name: 'The Cannon Project',
        description: "Builds founding teams from scratch and recruits GTM and engineering talent for startups.",
        url: 'https://thecannonproject.com/',
      },
      {
        name: 'Vercel AI Accelerator',
        description: "Vercel's accelerator for AI startups.",
        url: 'https://vercel.com/ai-accelerator',
      },
      {
        name: 'Y Combinator',
        description: "Enough said.",
        url: 'https://www.ycombinator.com/',
      },
      {
        name: 'Z Fellows',
        description: "Fellowship program for ambitious builders and entrepreneurs.",
        url: 'https://zfellows.com/',
      },
    ],
  },
  {
    title: 'Accounting',
    stack: [
      {
        name: 'Campfire',
        description: "The modern approach to accounting.",
        url: 'https://meetcampfire.com/',
      },
      {
        name: 'Fondo',
        description: "Tax and accounting platform built specifically for startups, handling R&D credits and compliance.",
        url: 'https://www.tryfondo.com/',
      },
      {
        name: 'Open Ledger',
        description: "Embedded Accounting API for SaaS Platforms.",
        url: 'https://www.openledger.com/',
      },
      {
        name: 'QuickBooks',
        description: "Accounting software for small businesses to manage expenses, invoicing, and payroll.",
        url: 'https://quickbooks.intuit.com/',
      },
    ],
  },
  {
    title: 'AI Art',
    stack: [
      {
        name: 'Black Forest Labs',
        description: "AI research lab building FLUX image generation models with API and open-weight options.",
        url: 'https://bfl.ai/',
      },
      {
        name: 'Fourmula.ai',
        description: "AI platform that generates product photography, lifestyle images, and videos from uploaded photos.",
        url: 'https://fourmula.ai/',
      },
      {
        name: 'Lica',
        description: "AI platform turning visuals into editable layers, routing each to the best model or human for brand content.",
        url: 'https://lica.world/',
      },
      {
        name: 'Midjourney',
        description: "AI-powered image generation tool for creating stunning visual artwork.",
        url: 'https://midjourney.com',
      },
      {
        name: 'Reve',
        description: "Bring your creative ideas to life with advanced AI art generation.",
        url: 'https://preview.reve.art/',
      },
    ],
  },
  {
    title: 'AI Infrastructure',
    stack: [
      {
        name: 'Anyscale',
        description: "Unified compute platform built on Ray for scaling AI workloads from data processing to training, fine-tuning, and serving.",
        url: 'https://www.anyscale.com/',
      },
      {
        name: 'Deeptune',
        description: "Simulation environments where AI agents practice tasks like coding and spreadsheets to improve.",
        url: 'https://deeptune.com/',
      },
      {
        name: 'Hornet',
        description: "Retrieval engine built for AI agents, handling iterative queries across multiple data sources.",
        url: 'https://hornet.dev/',
      },
      {
        name: 'Inferact',
        description: "Inference engine company commercializing vLLM to make LLM serving cheaper and faster at scale.",
        url: 'https://inferact.ai/',
      },
      {
        name: 'Layerbrain',
        description: "AI platform building intelligent machine architectures that observe work, infer state, and operate software — progressively automating laboratory operations.",
        url: 'https://layerbrain.com/',
      },
      {
        name: 'Linkup',
        description: "AI search engine and web search API delivering fast, fresh results for LLMs and AI agents.",
        url: 'https://www.linkup.so/',
      },
      {
        name: 'Nexthop AI',
        description: "AI infrastructure networking — switches and systems optimized for hyperscalers and cloud operators.",
        url: 'https://nexthop.ai/',
      },
      {
        name: 'Nozomio Labs',
        description: "Applied research lab building context infrastructure for AI systems.",
        url: 'https://www.nozomio.com/',
      },
      {
        name: 'Subconscious',
        description: "Infrastructure platform enabling LLMs to run as autonomous background agents with tool calling.",
        url: 'https://www.subconscious.dev/',
      },
      {
        name: 'Supergood',
        description: "Converts enterprise portal interfaces into production-ready APIs that AI agents can call directly, replacing slow browser automation with millisecond responses.",
        url: 'https://supergood.ai/',
      },
    ],
  },
  {
    title: 'AI Research Labs',
    stack: [
      {
        name: 'Ai2',
        description: "Allen Institute for AI — nonprofit research lab building open AI breakthroughs for science, environment, and society.",
        url: 'https://allenai.org/',
      },
      {
        name: 'Andon Labs',
        description: "AI safety research lab developing benchmarks and deploying frontier systems to test autonomous agents operating without human oversight.",
        url: 'https://andonlabs.com/',
      },
      {
        name: 'Arena',
        description: "Company developing electromagnetic intelligence and sensing technology.",
        url: 'https://www.arenaphysica.com/',
      },
      {
        name: 'Brainbase',
        description: "Applied AI research lab building Kafka, the first AI employee with its own computer, email, and phone number.",
        url: 'https://usebrainbase.com/',
      },
      {
        name: 'Eragon',
        description: "Applied AI lab building proprietary models for operational intelligence across enterprise data.",
        url: 'https://www.eragon.ai/',
      },
      {
        name: 'Essential AI',
        description: "Open platform for frontier AI research led by Transformer co-inventor Dr. Ashish Vaswani.",
        url: 'https://www.essential.ai/',
      },
      {
        name: 'Flapping Airplanes',
        description: "Frontier data efficiency lab in stealth pursuing paradigm-shifting research toward AI models that match human sample efficiency.",
        url: 'https://flappingairplanes.com/',
      },
      {
        name: 'Gimlet Labs',
        description: "Applied research lab designing next-generation computing infrastructure for running AI workloads efficiently at scale.",
        url: 'https://gimletlabs.ai/',
      },
      {
        name: 'Google X',
        description: "Advanced technology research division focused on moonshot projects.",
        url: 'https://x.company/',
      },
      {
        name: 'humans&',
        description: "Human-centric frontier AI lab building models that strengthen relationships and communities, focused on long-horizon multi-agent RL, memory, and user understanding.",
        url: 'https://humansand.ai/',
      },
      {
        name: 'Inception Labs',
        description: "AI research lab building diffusion-based language models that generate tokens in parallel for faster, cheaper inference than autoregressive LLMs.",
        url: 'https://www.inceptionlabs.ai/',
      },
      {
        name: 'LABS.GOOGLE',
        description: "Google's experimental AI research projects and cutting-edge technology demos.",
        url: 'https://labs.google/',
      },
      {
        name: 'Lila Sciences',
        description: "AI research lab building autonomous laboratories and AI scientists for discovery across therapeutics, materials, energy, and more.",
        url: 'https://www.lila.ai/',
      },
      {
        name: 'Meridian Labs',
        description: "Nonprofit building an open-source platform for understanding, evaluating, and testing AI models and agents.",
        url: 'https://meridianlabs.ai/',
      },
      {
        name: 'Ndea',
        description: "AI research lab pursuing artificial general intelligence through deep learning and program synthesis.",
        url: 'https://ndea.com/',
      },
      {
        name: 'Periodic Labs',
        description: "AI research company building autonomous laboratories and AI scientists for materials discovery.",
        url: 'https://periodic.com/',
      },
      {
        name: 'Prime Intellect',
        description: "Distributed compute platform for training, evaluating, and deploying agentic AI models on GPUs.",
        url: 'https://www.primeintellect.ai/',
      },
      {
        name: 'Ricursive Intelligence',
        description: "Frontier AI lab developing self-improving systems to revolutionize chip design and accelerate hardware development.",
        url: 'https://www.ricursive.com/',
      },
      {
        name: 'Sentient',
        description: "Open-source AI lab focused on reasoning models and decentralized infrastructure for community-owned AI.",
        url: 'https://www.sentient.xyz/',
      },
      {
        name: 'Softmax',
        description: "Research lab behind Cogames, a multiplayer benchmark for measuring AI social intelligence.",
        url: 'https://softmax.com/',
      },
      {
        name: 'Standard Intelligence',
        description: "AI research lab building general-purpose models that perform complex computer actions and learn interactively.",
        url: 'https://si.inc/',
      },
    ],
  },
  {
    title: 'Assistants',
    stack: [
      {
        name: 'Cora',
        description: "AI email assistant that screens, categorizes, and drafts responses while providing daily briefings.",
        url: 'https://cora.computer/',
      },
      {
        name: 'Fyxer AI',
        description: "AI Executive Assistant for email and productivity.",
        url: 'https://www.fyxer.com/',
      },
      {
        name: 'Lindy.ai',
        description: "Meet your AI assistant for automating workflows and tasks.",
        url: 'https://www.lindy.ai/',
      },
      {
        name: 'Town Assistant',
        description: "AI assistant that integrates with work tools to automate email, scheduling, and task management.",
        url: 'https://town.com/',
      },
      {
        name: 'Tsenta',
        description: "Desktop app that automatically fills out and submits job applications across hiring platforms.",
        url: 'https://www.tsenta.com/',
      },
      {
        name: 'Wordware',
        description: "AI context lab building Sauna, an assistant for compounding context and augmenting deep work.",
        url: 'https://www.wordware.ai/',
      },
    ],
  },
  {
    title: 'Authentication',
    stack: [
      {
        name: 'Clerk',
        description: "Modern authentication and user management platform for developers.",
        url: 'https://clerk.com',
      },
      {
        name: 'Keycloak',
        description: "Open-source identity and access management solution.",
        url: 'https://www.keycloak.org/',
      },
      {
        name: 'WorkOS',
        description: "Make your application enterprise-ready with SSO, directory sync, and more.",
        url: 'https://workos.com/',
      },
    ],
  },
  {
    title: 'Aviation',
    stack: [
      {
        name: 'Rove Miles',
        description: "Travel the World for Free through innovative aviation rewards.",
        url: 'https://www.rovemiles.com/',
      },
    ],
  },
  {
    title: 'Banking',
    stack: [
      {
        name: 'Brex',
        description: "Modern finance software platform for startups and growing businesses.",
        url: 'https://brex.com',
      },
      {
        name: 'Mercury',
        description: "Online business banking designed for startups and small businesses.",
        url: 'https://mercury.com',
      },
      {
        name: 'Rho',
        description: "Better banking platform for startups and small businesses.",
        url: 'https://www.rho.co/',
      },
    ],
  },
  {
    title: 'Biotech',
    stack: [
      {
        name: 'Chai Discovery',
        description: "AI-native biotech lab building foundation models for molecular structure prediction and drug discovery.",
        url: 'https://www.chaidiscovery.com/',
      },
      {
        name: 'Genbio AI',
        description: "AI-powered genomics and computational biology tools.",
        url: 'https://genbio.ai/',
      },
    ],
  },
  {
    title: 'Blogging',
    stack: [
      {
        name: 'Medium',
        description: "Online publishing platform for sharing ideas and stories.",
        url: 'https://medium.com/',
      },
      {
        name: 'Posthaven',
        description: "The safe place for all your posts forever.",
        url: 'https://posthaven.com/',
      },
    ],
  },
  {
    title: 'Books',
    stack: [
      {
        name: 'GDL Book',
        description: "Geometric Deep Learning comprehensive book resource.",
        url: 'https://geometricdeeplearning.com/book/',
      },
      {
        name: 'Hallucinopedia',
        description: "AI-generated encyclopedia of a fictional universe whose entries appear as you visit them.",
        url: 'https://halupedia.com/',
      },
      {
        name: 'Machine Learning Q and AI',
        description: "30 essential questions and answers on ML and AI concepts by Sebastian Raschka.",
        url: 'https://sebastianraschka.com/books/#machine-learning-q-and-ai',
      },
      {
        name: 'Reinforcement Learning: An Overview',
        description: "Kevin Murphy's manuscript surveying deep RL — value-based, policy-based, model-based, multi-agent, and LLM+RL methods with code examples.",
        url: 'https://arxiv.org/abs/2412.05265',
      },
      {
        name: 'Situational Awareness',
        description: "Essay series on AI progress and AGI timelines by Leopold Aschenbrenner.",
        url: 'https://situational-awareness.ai/',
      },
      {
        name: 'SW101',
        description: "Marko's curated cheatsheet of software engineering patterns and concepts across seniority levels, with diagrams and multi-language code samples.",
        url: 'https://learn.withmarko.com/sw101',
      },
      {
        name: 'The Age of Em',
        description: "Economics book by Robin Hanson analyzing a future dominated by brain emulation technology.",
        url: 'https://ageofem.com/',
      },
      {
        name: 'The Way of Code',
        description: "Rick Rubin's collaboration with Anthropic on vibe coding.",
        url: 'https://www.thewayofcode.com/',
      },
    ],
  },
  {
    title: 'Building Resources',
    stack: [
      {
        name: 'Build in College',
        description: "List of free tools, software credits, and fellowships for college builders.",
        url: 'https://www.buildincollege.com/',
      },
      {
        name: 'Hardware Building Resources',
        description: "Put together by the team at V1. Sometimes specific to UMich, but very useful nonetheless.",
        url: 'https://v1team.notion.site/Hardware-Building-Resources-20f82307c07d81fcadcadfd882479f4c',
      },
      {
        name: 'Software Building Resources',
        description: "Also put together by the team at V1.",
        url: 'https://v1team.notion.site/Software-Building-Resources-dcdf772230ad4f3195d2399f74964969',
      },
    ],
  },
  {
    title: 'Cap Table Management',
    stack: [
      {
        name: 'AngelList',
        description: "Build, Lead, Invest - Platform for startup fundraising and investing.",
        url: 'https://angellist.com',
      },
      {
        name: 'Carta',
        description: "The End-to-End Suite Connecting Private Capital.",
        url: 'https://carta.com',
      },
      {
        name: 'Pulley',
        description: "Equity management platform for startups and companies.",
        url: 'https://pulley.com/',
      },
    ],
  },
  {
    title: 'Coaching',
    stack: [
      {
        name: 'Avra',
        description: "Invite-only 7-week program for post-Series A founders, pairing peer learning with mentorship from seasoned operators. Founded by ex-YC Growth MD Anu Hariharan.",
        url: 'https://www.avracap.com/',
      },
      {
        name: 'Titan',
        description: "Curated coaching network matching Series A to C founders with vetted coaches who've scaled startups, exited, or coached unicorn founders.",
        url: 'https://www.withtitan.com/',
      },
    ],
  },
  {
    title: 'Coding',
    stack: [
      {
        name: 'a0.dev',
        description: "Create Mobile Apps with AI-powered development tools.",
        url: 'https://a0.dev/',
      },
      {
        name: 'All Hands AI',
        description: "AI-powered coding assistant for software development.",
        url: 'https://www.all-hands.dev/',
      },
      {
        name: 'Augment Code',
        description: "AI coding platform designed for real-world software development.",
        url: 'https://augmentcode.com',
      },
      {
        name: 'BLACKBOX AI',
        description: "Enterprise platform dispatching parallel AI coding agents with a chairman LLM selecting the best output.",
        url: 'https://www.blackbox.ai/',
      },
      {
        name: 'Capy',
        description: "IDE for orchestrating parallel coding agents from one dashboard with sandboxed environments.",
        url: 'https://capy.ai/',
      },
      {
        name: 'Cognition',
        description: "AI software engineering company building advanced developer tools.",
        url: 'https://cognition-labs.com/',
      },
      {
        name: 'Cubic',
        description: "Cursor for code review - streamlined code review process.",
        url: 'https://www.cubic.dev/home',
      },
      {
        name: 'Cursor',
        description: "AI-powered code editor that enhances development productivity.",
        url: 'https://cursor.com',
      },
      {
        name: 'Factory',
        description: "AI software development agents in a native IDE.",
        url: 'https://factory.ai/',
      },
      {
        name: 'Graphite',
        description: "End-to-end developer platform for modern software teams.",
        url: 'https://graphite.dev/homepage',
      },
      {
        name: 'Morph',
        description: "The fastest way to apply edits to files with AI assistance.",
        url: 'https://morphllm.com/',
      },
      {
        name: 'OB-1',
        description: "Terminal-based AI coding agent that's context-aware and model-agnostic.",
        url: 'https://www.openblocklabs.com/',
      },
      {
        name: 'Omnara',
        description: "Remote control app for monitoring and managing AI coding agents from desktop, mobile, or web.",
        url: 'https://www.omnara.com/',
      },
      {
        name: 'Superset',
        description: "Code editor for orchestrating multiple CLI-based AI coding agents in parallel Git worktrees.",
        url: 'https://superset.sh/',
      },
      {
        name: 'Warp',
        description: "Agentic development environment with a modern terminal and cloud agent orchestration.",
        url: 'https://www.warp.dev/',
      },
      {
        name: 'Windsurf',
        description: "Powerful AI code editor (formerly Codeium) for enhanced development workflows.",
        url: 'https://windsurf.com',
      },
      {
        name: 'Zed',
        description: "High-performance code editor written in Rust with built-in AI agents.",
        url: 'https://zed.dev',
      },
    ],
  },
  {
    title: 'CRMs',
    stack: [
      {
        name: 'Attio',
        description: "Next-generation CRM built for modern sales and customer success teams.",
        url: 'https://attio.com',
      },
      {
        name: 'Day.ai',
        description: "AI-native CRM that auto-captures meetings, emails, and Slack into enriched contact records.",
        url: 'https://day.ai/',
      },
      {
        name: 'Goodword',
        description: "Networking copilot helping professionals maintain relationships by surfacing the right connections and remembering context across them.",
        url: 'https://www.goodword.com/',
      },
      {
        name: 'HubSpot',
        description: "Comprehensive software and tools for your business operations.",
        url: 'https://hubspot.com',
      },
      {
        name: 'Monaco',
        description: "AI-native revenue platform combining CRM, sales automation, and pipeline management for startups.",
        url: 'https://www.monaco.com/',
      },
      {
        name: 'Zero',
        description: "The zero-click CRM that automates customer relationship management.",
        url: 'https://zero.inc/',
      },
    ],
  },
  {
    title: 'Customer Experience',
    stack: [
      {
        name: 'Decagon',
        description: "Conversational AI platform for enhanced customer experience.",
        url: 'https://decagon.ai',
      },
      {
        name: 'Forethought',
        description: "Customer Service & Support AI and CX Automation Platform.",
        url: 'https://forethought.ai/',
      },
      {
        name: 'Inkeep',
        description: "AI support agent grounded in your docs, help center, and community content — answers user questions via embedded chat in your product or docs.",
        url: 'https://inkeep.com/',
      },
      {
        name: 'Siena',
        description: "Autonomous customer service agent for e-commerce handling orders, returns, and shipping questions across email, chat, SMS, and social channels.",
        url: 'https://www.siena.cx/',
      },
    ],
  },
  {
    title: 'Data Analytics',
    stack: [
      {
        name: 'Ario',
        description: "Turn Competitor Data into First Party Data.",
        url: 'https://heyario.com/',
      },
      {
        name: 'Conway',
        description: "Autonomous pattern discovery platform for data exploration using transformers.",
        url: 'https://conway.ai/',
      },
      {
        name: 'Cosmograph',
        description: "Privacy-first graph visualization and analytics for large network graphs and ML embeddings. Built on DuckDB.",
        url: 'https://cosmograph.app/',
      },
      {
        name: 'Deepnote',
        description: "Collaborative data notebook combining Python, SQL, and visualizations for analytics and ML workflows.",
        url: 'https://deepnote.com/',
      },
      {
        name: 'Hilbert',
        description: "AI-native growth analytics for B2C teams — detects anomalies, identifies root causes, and automates actions across products, marketing, and finance.",
        url: 'https://hilberts.ai/',
      },
      {
        name: 'Riveter',
        description: "YC-backed AI agent that automates web data extraction, dataset building, and monitoring into structured outputs via API.",
        url: 'https://riveterhq.com/',
      },
    ],
  },
  {
    title: 'Databases',
    stack: [
      {
        name: 'Firebase',
        description: "Google's backend-as-a-service platform.",
        url: 'https://firebase.google.com/',
      },
      {
        name: 'HelixDB',
        description: "Open-source graph-vector database built in Rust for RAG and AI applications.",
        url: 'https://www.helix-db.com/',
      },
      {
        name: 'Prisma',
        description: "Fast Postgres-based ORM for Node.js and TypeScript.",
        url: 'https://www.prisma.io/',
      },
      {
        name: 'Redis',
        description: "In-memory data structure store, used as a database, cache, and message broker.",
        url: 'https://redis.io/',
      },
      {
        name: 'Supabase',
        description: "Open-source Firebase alternative.",
        url: 'https://supabase.com/',
      },
    ],
  },
  {
    title: 'Defense Contracting',
    stack: [
      {
        name: 'Northwood',
        description: "End-to-end ground infrastructure provider for space missions, with rapid deployment and resilient networking.",
        url: 'https://www.northwoodspace.io/',
      },
      {
        name: 'Smack Technologies',
        description: "Frontier AI lab for national security, building domain-specific models for U.S. DoD and allied military decision-making.",
        url: 'https://smacktechnologies.com/',
      },
      {
        name: 'Sweetspot',
        description: "AI platform for finding, managing, and bidding on government contracts.",
        url: 'https://www.sweetspot.so/',
      },
      {
        name: 'Usul',
        description: "Defense technology and contracting platform.",
        url: 'https://usul.com/',
      },
    ],
  },
  {
    title: 'Design',
    stack: [
      {
        name: 'Arcade Labs',
        description: "Visual storytelling studio providing branding, UI/UX, and web design services for startups.",
        url: 'https://arcade.la/',
      },
      {
        name: 'Cavalry',
        description: "2D animation software for creating motion graphics with real-time rendering and procedural workflows.",
        url: 'https://cavalry.scenegroup.co/',
      },
      {
        name: 'DesEngs',
        description: "Curated resource hub of tools, articles, and jobs for design engineers.",
        url: 'https://desengs.com/',
      },
      {
        name: 'Fiddle',
        description: "Visual web editor that imports from GitHub for spot edits, animations, and submitting PRs.",
        url: 'https://www.fiddle.is/',
      },
      {
        name: 'Flint',
        description: "Autonomous website platform that generates on-brand landing pages from existing brand systems.",
        url: 'https://www.tryflint.com/',
      },
      {
        name: 'Framer',
        description: "AI-powered website design tool with built-in CMS, SEO, and analytics.",
        url: 'https://www.framer.com/',
      },
      {
        name: 'fromanother',
        description: "Artist-led creative studio working across art direction, brand, film, CGI, and immersive experiences for clients like Louis Vuitton, Chanel, and Dior.",
        url: 'https://www.fromanother.love/',
      },
      {
        name: 'lowercase',
        description: "Design and development done different - creative studio approach.",
        url: 'https://www.lowercase.club/',
      },
      {
        name: 'Paper',
        description: "Design canvas for creating art and digital experiences with fast, reliable tooling.",
        url: 'https://paper.design/',
      },
      {
        name: 'Pencil',
        description: "Design tool that integrates into your IDE so developers can design and code simultaneously.",
        url: 'https://www.pencil.dev/',
      },
      {
        name: 'QuiverAI',
        description: "AI vector design tools for generating, editing, and animating editable SVG assets.",
        url: 'https://quiver.ai/',
      },
      {
        name: 'Refero',
        description: "Curated library of UI/UX design references for finding visual patterns and inspiration across products.",
        url: 'https://refero.design/',
      },
      {
        name: 'Softlight',
        description: "AI product discovery and design platform that learns your business and explores product ideas.",
        url: 'https://softlight.com/',
      },
      {
        name: 'Tailwind Plus',
        description: "Professionally designed UI components, templates, and starter kits built by the makers of Tailwind CSS.",
        url: 'https://tailwindcss.com/plus',
      },
      {
        name: 'Variant',
        description: "AI design tool generating endless UI variations from a text idea, exportable as HTML or React.",
        url: 'https://variant.com/',
      },
    ],
  },
  {
    title: 'Developer Tools',
    stack: [
      {
        name: 'Anima',
        description: "AI Design to Code - Figma to React, App, Website, and HTML conversion.",
        url: 'https://www.animaapp.com/',
      },
      {
        name: 'Blacksmith',
        description: "Faster, cheaper GitHub Actions runners on bare metal with co-located caching and Docker layer persistence.",
        url: 'https://www.blacksmith.sh/',
      },
      {
        name: 'BlockNote',
        description: "Javascript Block-Based React rich text editor for modern applications.",
        url: 'https://www.blocknotejs.org/',
      },
      {
        name: 'Bundui',
        description: "Library of 100+ handcrafted UI components built with Tailwind CSS, React, and shadcn/ui.",
        url: 'https://bundui.io/',
      },
      {
        name: 'Composio',
        description: "Access 250+ apps and services in just one line of code.",
        url: 'https://composio.dev/',
      },
      {
        name: 'Convex',
        description: "Fullstack TypeScript development platform for building modern applications.",
        url: 'https://www.convex.dev/',
      },
      {
        name: 'CrewAI',
        description: "The leading multi-agent platform for AI development.",
        url: 'https://www.crewai.com/',
      },
      {
        name: 'Effect',
        description: "TypeScript framework for building composable applications with error management, concurrency, and dependency injection.",
        url: 'https://effectful.co/',
      },
      {
        name: 'Entire',
        description: "Open-source CLI capturing AI agent sessions during development and linking them to git commits to preserve reasoning behind code changes.",
        url: 'https://entire.io/',
      },
      {
        name: 'Feather',
        description: "Simple open source SVG icon library.",
        url: 'https://feathericons.com/',
      },
      {
        name: 'GitReverse',
        description: "Converts GitHub repos into plain-language vibe coding prompts.",
        url: 'https://www.gitreverse.com/',
      },
      {
        name: 'InsForge',
        description: "Backend-as-a-service built for AI coding agents with database, auth, storage, and deployment.",
        url: 'https://insforge.dev/',
      },
      {
        name: 'Knock',
        description: "Customer engagement platform for sending product and marketing messages across multiple channels.",
        url: 'https://knock.app/',
      },
      {
        name: 'Linear',
        description: "Project management tool for software development teams.",
        url: 'https://linear.app/',
      },
      {
        name: 'Liveblocks',
        description: "Collaboration engine with AI copilots, comments, and multiplayer editing APIs.",
        url: 'https://liveblocks.io/',
      },
      {
        name: 'Magic Patterns',
        description: "AI-powered design pattern generation and development tools.",
        url: 'https://www.magicpatterns.com/',
      },
      {
        name: 'Mem0',
        description: "The Memory layer for your AI apps and applications.",
        url: 'https://mem0.ai/',
      },
      {
        name: 'Morphik',
        description: "RAG platform for building AI agents with visual-first retrieval and knowledge graphs.",
        url: 'https://morphik.ai/',
      },
      {
        name: 'Orama',
        description: "AI-powered data search and chat engine",
        url: 'https://orama.com/',
      },
      {
        name: 'React Bits',
        description: "Collection of React patterns, techniques, and best practices.",
        url: 'https://reactbits.dev/',
      },
      {
        name: 'Render',
        description: "Cloud application platform for hosting and deploying web applications.",
        url: 'https://render.com/',
      },
      {
        name: 'Superflex',
        description: "Turn Figma to Code in Seconds with AI-powered conversion.",
        url: 'https://www.superflex.ai/',
      },
      {
        name: 'The Component Gallery',
        description: "Reference repository of UI components cataloged from real-world design systems.",
        url: 'https://component.gallery/',
      },
    ],
  },
  {
    title: 'Documentation',
    stack: [
      {
        name: 'GitBook',
        description: "Build product documentation your users will love.",
        url: 'https://www.gitbook.com/',
      },
      {
        name: 'Mintlify',
        description: "Beautiful, easy-to-maintain documentation for developers and teams.",
        url: 'https://www.mintlify.com/',
      },
    ],
  },
  {
    title: 'Documents',
    stack: [
      {
        name: 'Agree.com',
        description: "Free E-Signature & Integrated Payments Platform.",
        url: 'https://agree.com/',
      },
      {
        name: 'Extend',
        description: "AI document processing platform that extracts and parses complex layouts with vision models.",
        url: 'https://www.extend.ai/',
      },
      {
        name: 'Landing AI',
        description: "AI-powered document processing and automation.",
        url: 'https://landing.ai/',
      },
      {
        name: 'Reducto',
        description: "API for extracting structured data from complex documents like PDFs, images, and spreadsheets.",
        url: 'https://reducto.ai/',
      },
    ],
  },
  {
    title: 'Domain Names',
    stack: [
      {
        name: 'Porkbun',
        description: "An oddly satisfying domain registration experience.",
        url: 'https://porkbun.com/',
      },
    ],
  },
  {
    title: 'E-commerce',
    stack: [
      {
        name: 'Fourthwall',
        description: "Platform for creators to sell custom products, memberships, and digital goods.",
        url: 'https://fourthwall.com/',
      },
      {
        name: 'Gumroad',
        description: "Simple platform for creators to sell digital products.",
        url: 'https://gumroad.com/',
      },
      {
        name: 'Shopify',
        description: "Complete commerce platform for online stores.",
        url: 'https://www.shopify.com/',
      },
    ],
  },
  {
    title: 'Email',
    stack: [
      {
        name: 'BuildForever',
        description: "Software studio building consumer products that feel personal and human, starting with extra.email.",
        url: 'https://www.buildforever.com/',
      },
      {
        name: 'Lightfern',
        description: "Chrome extension using AI to autocomplete emails in Gmail as you type.",
        url: 'https://lightfern.com/',
      },
      {
        name: 'Loops',
        description: "Email platform for product, marketing, and transactional emails.",
        url: 'https://loops.so/',
      },
      {
        name: 'Resend',
        description: "Email API designed specifically for developers.",
        url: 'https://resend.com',
      },
      {
        name: 'Superhuman',
        description: "The most productive email app ever made for power users.",
        url: 'https://superhuman.com',
      },
      {
        name: 'Zero Email',
        description: "Email client focused on zero inbox methodology.",
        url: 'https://0.email/',
      },
    ],
  },
  {
    title: 'Enterprise AI',
    stack: [
      {
        name: 'Context',
        description: "Enterprise AI platform deploying autonomous agents that execute real workflows inside company systems.",
        url: 'https://www.context.ai/',
      },
      {
        name: 'Distyl AI',
        description: "Production AI platform helping Fortune 500 enterprises rearchitect operations and decision-making infrastructure across telecom, healthcare, manufacturing, insurance, and retail.",
        url: 'https://distyl.ai/',
      },
      {
        name: 'HappyRobot',
        description: "Agentic AI workforce platform deploying autonomous workers across customer support, sales, collections, recruiting, and operations.",
        url: 'https://www.happyrobot.ai/',
      },
      {
        name: 'Onyx',
        description: "Open-source AI chat platform connecting to enterprise docs, apps, and people for knowledge search and conversational AI.",
        url: 'https://onyx.app/',
      },
      {
        name: 'Sana',
        description: "Enterprise AI platform for finding knowledge across company apps, automating tasks, generating docs and dashboards, and running workflows. Now part of Workday.",
        url: 'https://sanalabs.com/',
      },
      {
        name: 'Speakeasy',
        description: "Centralized AI control platform for connecting, governing, and monitoring AI agents and integrations across an enterprise.",
        url: 'https://www.speakeasy.com/',
      },
      {
        name: 'Tessera',
        description: "Enterprise AI platform compressing ERP modernization from years to weeks via governed multi-agent workflows.",
        url: 'https://www.tesseralabs.ai/',
      },
    ],
  },
  {
    title: 'Event Planning',
    stack: [
      {
        name: 'Luma',
        description: "Delightful events platform for creating and managing gatherings.",
        url: 'https://lu.ma',
      },
      {
        name: 'Partiful',
        description: "Free online invitations with RSVP tracking for events.",
        url: 'https://partiful.com/',
      },
    ],
  },
  {
    title: 'Finance/Fintech',
    stack: [
      {
        name: 'Astor',
        description: "AI investment advisor app providing personalized portfolio advice and market analysis via chat.",
        url: 'https://www.astor.app/',
      },
      {
        name: 'Autonomous',
        description: "AI-powered financial advisor with 0% advisory fees, offering institutional-grade strategies.",
        url: 'https://becomeautonomous.com/',
      },
      {
        name: 'Better Money',
        description: "Stablecoin clearinghouse enabling companies to swap between stablecoins at par with fixed fees and guaranteed settlement times.",
        url: 'https://bettermoney.com/',
      },
      {
        name: 'Liquid',
        description: "Decentralized perpetuals trading platform offering 500+ markets across crypto, stocks, commodities, and forex with up to 200x leverage and 24/7 settlement.",
        url: 'https://www.tryliquid.xyz/',
      },
      {
        name: 'Model ML',
        description: "Enterprise AI workspace for financial modeling, due diligence, and deal execution.",
        url: 'https://www.modelml.com/',
      },
      {
        name: 'Monarch Money',
        description: "Personal finance management tool.",
        url: 'https://monarchmoney.com/',
      },
      {
        name: 'Natural',
        description: "Agentic payments platform enabling AI agents to send and receive money through APIs and tool calls.",
        url: 'https://www.natural.co/',
      },
      {
        name: 'Oscilar',
        description: "AI-powered risk platform handling fraud, credit, onboarding, and compliance.",
        url: 'https://oscilar.com/',
      },
      {
        name: 'Q4',
        description: "Unified IR Ops platform for public companies covering earnings, investor events, IR websites, and engagement analytics.",
        url: 'https://www.q4inc.com/',
      },
      {
        name: 'Rogo',
        description: "Purpose-built AI platform for financial institutions, automating modeling, due diligence, investment memos, and complex workflows.",
        url: 'https://rogo.ai/',
      },
      {
        name: 'USVC',
        description: "Closed-end fund from AngelList Asset Management broadening retail access to venture capital with a $500 minimum and no performance fee.",
        url: 'https://usvc.com/',
      },
    ],
  },
  {
    title: 'Fundraising',
    stack: [
      {
        name: 'Signal',
        description: "NFX's investor relationship platform for founders to find, track, and get intros to VCs.",
        url: 'https://signal.nfx.com/investors',
      },
      {
        name: 'VCSheet',
        description: "Searchable database of VC funds and investors filtered by stage, sector, and geography.",
        url: 'https://www.vcsheet.com/',
      },
    ],
  },
  {
    title: 'Generative Engine Optimization',
    stack: [
      {
        name: 'Daydream',
        description: "AI-driven SEO and GEO agency.",
        url: 'https://www.withdaydream.com/',
      },
      {
        name: 'Profound',
        description: "AI Answer Engine Optimization for improved search visibility.",
        url: 'https://www.tryprofound.com/',
      },
      {
        name: 'Relixir',
        description: "The AI Generative Engine Optimization GEO Platform.",
        url: 'https://relixir.ai/',
      },
    ],
  },
  {
    title: 'Govtech',
    stack: [
      {
        name: 'The Antifraud Company',
        description: "AI-powered investigative platform detecting corporate fraud in government spending programs.",
        url: 'https://antifraudcompany.com/',
      },
    ],
  },
  {
    title: 'GPUs on the Cloud',
    stack: [
      {
        name: 'Crusoe',
        description: "AI factory company offering managed inference, GPU cloud, and energy-aligned data center infrastructure. Fast Company's 2026 Most Innovative Companies.",
        url: 'https://www.crusoe.ai/',
      },
      {
        name: 'Lambda',
        description: "GPU Compute for AI workloads and machine learning.",
        url: 'https://lambda.ai/',
      },
      {
        name: 'Modal',
        description: "High-performance AI infrastructure for running compute-intensive workloads.",
        url: 'https://modal.com',
      },
    ],
  },
  {
    title: 'Guides',
    stack: [
      {
        name: 'Clay\'s EA Take-Home',
        description: "Take-home assessment for Clay executive assistant hiring process.",
        url: 'https://docs.google.com/document/d/1Jct3sKsza5QAn-IQrdnG2Givs7WlQgn2nY5IIcwt_Vw/edit?dub_id=2Dg5uaQVeT3nT8RR&tab=t.0',
      },
      {
        name: 'GTM Atlas',
        description: "Comprehensive guide by Attio mapping modern go-to-market strategies from lead capture through retention.",
        url: 'https://atlas.attio.com/',
      },
      {
        name: 'PostHog Handbook',
        description: "Dan Trapp's searchable, installable reader of PostHog's public handbook with dated eBook editions of the company's operational practices.",
        url: 'https://dantrapp.github.io/posthog-handbook/',
      },
      {
        name: 'Sequoia PMF Framework',
        description: "Sequoia Arc's four terrifying questions framework for finding and achieving product-market fit.",
        url: 'https://sequoiacap.com/article/pmf-framework-2/',
      },
      {
        name: 'Starter to SF',
        description: "Comprehensive SF guide by Michelle Fang.",
        url: 'https://www.startertosf.guide/',
      },
    ],
  },
  {
    title: 'Hardware Engineering',
    stack: [
      {
        name: 'Andrenam',
        description: "Maritime sensing company building AI-powered distributed networks of mass-manufactured sonar systems for persistent autonomous awareness from surface to seabed.",
        url: 'https://andrenam.com/',
      },
      {
        name: 'Heron Power',
        description: "Industrial power electronics company developing solid-state transformers to modernize the grid for renewables and AI data centers.",
        url: 'https://heronpower.com/',
      },
      {
        name: 'Nominal',
        description: "All-in-one data platform for hardware engineering teams — telemetry, logs, video, and simulation results unified for test and operations across aviation, space, ground, maritime, and energy.",
        url: 'https://nominal.io/',
      },
      {
        name: 'Tulip',
        description: "Composable operations platform for manufacturers to build apps and manage production workflows.",
        url: 'https://tulip.co/',
      },
    ],
  },
  {
    title: 'Healthcare AI',
    stack: [
      {
        name: 'Ambience Healthcare',
        description: "AI platform automating clinical documentation and medical coding within Epic EHR systems.",
        url: 'https://www.ambiencehealthcare.com/',
      },
      {
        name: 'Anterior',
        description: "AI clinical reasoning platform automating utilization management and prior authorization decisions for health insurers.",
        url: 'https://anterior.com/',
      },
      {
        name: 'Commure',
        description: "Healthcare operating system unifying ambient AI scribes, scheduling, billing, and care coordination across provider organizations.",
        url: 'https://www.commure.com/',
      },
      {
        name: 'Datavant',
        description: "Healthcare data collaboration platform enabling secure exchange of health records across organizations.",
        url: 'https://www.datavant.com/',
      },
      {
        name: 'Foresight Health',
        description: "Managed service handling chronic care management for neurology clinics — patient outreach, monitoring, and Medicare billing documentation.",
        url: 'https://www.foresighthealth.ai/',
      },
      {
        name: 'Hippocratic AI',
        description: "Healthcare-specific LLM company building safety-focused generative AI agents for patient-facing care navigation and chronic care management.",
        url: 'https://hippocraticai.com/',
      },
      {
        name: 'Komodo Health',
        description: "Healthcare analytics platform providing de-identified patient data and AI-powered insights.",
        url: 'https://www.komodohealth.com/',
      },
      {
        name: 'Latent Health',
        description: "AI clinical platform that accelerates medication access by automating prior authorizations in EHRs.",
        url: 'https://latenthealth.com/',
      },
      {
        name: 'Qualified Health',
        description: "Enterprise AI platform for deploying and governing generative AI across health system workflows.",
        url: 'https://www.qualifiedhealthai.com/',
      },
      {
        name: 'Tennr',
        description: "Agentic platform automating pre-visit patient operations, payer requirements, and care routing.",
        url: 'https://www.tennr.com/',
      },
    ],
  },
  {
    title: 'HR/Payroll',
    stack: [
      {
        name: 'Corridor Advisors',
        description: "Health insurance brokerage using AI to help small businesses find coverage for their employees.",
        url: 'https://corridoradvisors.com/',
      },
      {
        name: 'Deel',
        description: "Global HR platform handling payroll, contractor payments, compliance, and benefits across 150+ countries.",
        url: 'https://www.deel.com/',
      },
      {
        name: 'Rippling',
        description: "Unified workforce platform handling HR, IT, and finance — payroll, benefits, devices, and app provisioning from one system.",
        url: 'https://www.rippling.com/',
      },
      {
        name: 'Warp',
        description: "AI-powered employee management platform handling payroll, compliance, benefits, and IT.",
        url: 'https://www.warp.co/',
      },
    ],
  },
  {
    title: 'Law',
    stack: [
      {
        name: 'Crosby',
        description: "Execute Contracts Faster with AI-powered legal automation.",
        url: 'https://crosby.ai/',
      },
      {
        name: 'Harvey',
        description: "AI platform purpose-built for legal professionals to automate research, drafting, and analysis.",
        url: 'https://www.harvey.ai/',
      },
      {
        name: 'Legora',
        description: "AI platform helping lawyers automate legal research, drafting, and document review.",
        url: 'https://legora.com/',
      },
    ],
  },
  {
    title: 'Learning',
    stack: [
      {
        name: 'animations.dev',
        description: "Interactive course on the theory and practice of crafting web animations with CSS and Framer Motion, by Emil Kowalski.",
        url: 'https://animations.dev/',
      },
      {
        name: 'Beej\'s Guide to Computer Science',
        description: "Free guide teaching problem-solving skills and learning strategies for computer science.",
        url: 'https://beej.us/guide/bglcs/html/#understanding-the-problem',
      },
      {
        name: 'Cartesian',
        description: "Interactive offline handbook teaching data structures and algorithms through visualizations, executable code playback, and practice problems.",
        url: 'https://cartesian.app/',
      },
      {
        name: 'CodeCrafters',
        description: "Programming challenges where experienced developers rebuild real systems like Redis, Git, and SQLite from scratch in their own IDE.",
        url: 'https://codecrafters.io/',
      },
      {
        name: 'CS50',
        description: "Harvard's introduction to computer science and the art of programming.",
        url: 'https://cs50.harvard.edu/x/',
      },
      {
        name: 'Fast.ai',
        description: "Making neural nets uncool again - practical deep learning education.",
        url: 'https://www.fast.ai/',
      },
      {
        name: 'Learn Notion in 12 Hours',
        description: "Free 12-hour video course teaching Notion from basics through advanced automation.",
        url: 'https://www.freecodecamp.org/news/lean-notion-in-12-hours/',
      },
      {
        name: 'RL Environments Guide',
        description: "AdithyaSK's practical guide on Hugging Face for building and scaling reinforcement learning environments for the LLM era.",
        url: 'https://huggingface.co/spaces/AdithyaSK/rl-environments-guide',
      },
      {
        name: 'The Transformers',
        description: "Visual guide explaining transformer architecture from tokenization through self-attention.",
        url: 'https://www.vizuaranewsletter.com/p/the-transformers?r=5b5pyd',
      },
      {
        name: 'YouLearn AI',
        description: "AI-powered personalized learning experiences.",
        url: 'https://youlearn.ai',
      },
    ],
  },
  {
    title: 'Longevity',
    stack: [
      {
        name: 'Function Health',
        description: "Annual membership delivering 160+ lab tests twice yearly through Quest Diagnostics — early detection signals for 1000+ diseases at $365/year.",
        url: 'https://www.functionhealth.com/',
      },
      {
        name: 'Superpower',
        description: "Health testing platform analyzing 100+ biomarkers via blood draw, paired with AI guidance and 24/7 clinical care for personalized health protocols.",
        url: 'https://www.superpower.com/',
      },
      {
        name: 'The Protocole',
        description: "Membership platform offering access to medical-grade peptides prescribed by licensed clinicians through trusted U.S. pharmacies.",
        url: 'https://theprotocole.com/',
      },
    ],
  },
  {
    title: 'Marketing',
    stack: [
      {
        name: 'Conversion',
        description: "Enterprise AI marketing agents for SEO & Google Ads.",
        url: 'https://conversion.ai/',
      },
      {
        name: 'Hightouch',
        description: "Composable Customer Data Platform (CDP) & AI Decisioning.",
        url: 'https://hightouch.com/',
      },
      {
        name: 'Mutiny',
        description: "AI agent platform for GTM teams to spin up branded landing pages, proposals, and case studies without designer or marketing dependencies.",
        url: 'https://www.mutinyhq.com/',
      },
      {
        name: 'Superscale AI',
        description: "AI-powered marketing automation and scaling.",
        url: 'https://www.superscale.ai/',
      },
    ],
  },
  {
    title: 'Media',
    stack: [
      {
        name: 'Arena Magazine',
        description: "Quarterly publication covering technology, capitalism, and civilization through long-form journalism.",
        url: 'https://arenamag.com/',
      },
      {
        name: 'Yesterday Media',
        description: "Recorded interviews and written biographies profiling founders and investors.",
        url: 'https://yesterdayy.com/',
      },
    ],
  },
  {
    title: 'Modeling',
    stack: [
      {
        name: 'Adam',
        description: "AI agent that performs tasks inside CAD platforms — part editing, feature tree optimization, and parametrization via prompts.",
        url: 'https://adam.new/',
      },
      {
        name: 'Iterating Inc.',
        description: "Software studio building open hydraulic and water-distribution modeling tools, including Mastering Water Models and epanet-js. Founded 2025 by Luke and Sam.",
        url: 'https://iterating.ca/',
      },
    ],
  },
  {
    title: 'Monitoring/Analytics',
    stack: [
      {
        name: 'Better Stack',
        description: "Radically better observability stack for modern applications.",
        url: 'https://betterstack.com/',
      },
      {
        name: 'foam',
        description: "AI debugging platform that detects production errors, correlates issues, and notifies via Slack.",
        url: 'https://sdk.foam.ai/',
      },
      {
        name: 'incident.io',
        description: "All-in-one incident management platform for engineering teams.",
        url: 'https://incident.io/',
      },
      {
        name: 'PostHog',
        description: "All-in-one platform for building successful products with analytics.",
        url: 'https://posthog.com',
      },
      {
        name: 'Raindrop',
        description: "AI agent observability platform that detects, alerts on, and helps debug production failures in deployed agents.",
        url: 'https://www.raindrop.ai/',
      },
      {
        name: 'Respan',
        description: "AI observability and evaluation platform for tracing, debugging, and improving AI agent behavior.",
        url: 'https://respan.ai/',
      },
    ],
  },
  {
    title: 'Neurotech',
    stack: [
      {
        name: 'Blackrock Neurotech',
        description: "Neural interface company developing brain-computer interfaces for medical, research, and human augmentation applications.",
        url: 'https://blackrockneurotech.com/',
      },
      {
        name: 'Merge Labs',
        description: "Research lab bridging biological and artificial intelligence through next-generation brain-computer interfaces.",
        url: 'https://www.merge.io/blog',
      },
      {
        name: 'Neurable',
        description: "Consumer neurotech company building everyday brain-computer interface products including EEG headphones for focus tracking.",
        url: 'https://neurable.com/',
      },
      {
        name: 'Neuralace',
        description: "Research team building personal brain-computer interfaces for direct neural communication.",
        url: 'https://www.neuralace.co/',
      },
      {
        name: 'Neuralink',
        description: "Elon Musk's company developing implantable brain-computer interfaces for direct neural communication with computers.",
        url: 'https://neuralink.com/',
      },
      {
        name: 'Paradromics',
        description: "Brain-computer interface company building high-data-rate implantable devices for medical applications.",
        url: 'https://www.paradromics.com/',
      },
      {
        name: 'Synchron',
        description: "Brain-computer interface company behind the Stentrode, a minimally invasive endovascular BCI implanted without open-brain surgery.",
        url: 'https://synchron.com/',
      },
    ],
  },
  {
    title: 'Personal Websites',
    stack: [
      {
        name: 'Angus Emmerson',
        description: "Video editor creating commercials for brands like Formula 1, Netflix, and Disney.",
        url: 'https://angusemmerson.com/',
      },
      {
        name: 'Astro Teller',
        description: "Captain of Moonshots at X, Alphabet's Moonshot Factory.",
        url: 'https://www.astroteller.net/',
      },
      {
        name: 'Daksh Gupta',
        description: "Co-founder of Greptile, building AI agents that autonomously review code.",
        url: 'https://dakshgupta.com/',
      },
      {
        name: 'Deedy Das',
        description: "Principal at Menlo Ventures.",
        url: 'https://debarghyadas.com/',
      },
      {
        name: 'Dwarkesh Patel',
        description: "Host of the Dwarkesh Podcast.",
        url: 'https://www.dwarkesh.com/',
      },
      {
        name: 'Emil Kowalski',
        description: "Design engineer at Linear, creator of Sonner and Vaul React components.",
        url: 'https://emilkowal.ski/',
      },
      {
        name: 'Gokul Rajaram',
        description: "Early-stage investor and product leader who helped build Alphabet, Block, Coinbase, DoorDash, Meta, Pinterest, and The Trade Desk.",
        url: 'https://www.gokulrajaram.com/',
      },
      {
        name: 'Jack Einhorn',
        description: "Investor running a fellowship program.",
        url: 'https://jackeinhorn.com/',
      },
      {
        name: 'Michael Seibel',
        description: "Partner Emeritus of Y Combinator.",
        url: 'https://www.michaelseibel.com/',
      },
      {
        name: 'Patrick Collison',
        description: "Co-founder of Stripe.",
        url: 'https://patrickcollison.com/',
      },
      {
        name: 'Qasar Younis',
        description: "Co-founder of Applied Intuition.",
        url: 'https://qy.co/about/',
      },
      {
        name: 'Sireesh Ramesh',
        description: "Supporting founders at Thrive Capital.",
        url: 'https://www.sireeshramesh.com/',
      },
      {
        name: 'Sonith Sunku',
        description: "Runs Z Fellows, founder of Yesterday Media.",
        url: 'https://sonith.org/',
      },
      {
        name: 'TAO TAJIMA',
        description: "Filmmaker at TANGRAM creating concept videos and commercial content for brands and artists.",
        url: 'https://taotajima.jp/',
      },
      {
        name: 'Todd Goldberg',
        description: "Early-stage VC, co-founder of Curated.",
        url: 'https://toddgoldberg.com/index.html',
      },
      {
        name: 'Will Robbins',
        description: "GP at Contrary",
        url: 'https://willrobbins.com',
      },
      {
        name: 'Zhou Xian',
        description: "Co-founder of Genesis.",
        url: 'https://www.zhou-xian.com/',
      },
    ],
  },
  {
    title: 'Philanthropic Organizations',
    stack: [
      {
        name: 'Renaissance Philanthropy',
        description: "Modern approach to philanthropic giving and impact.",
        url: 'https://renaissancephilanthropy.org/',
      },
    ],
  },
  {
    title: 'Podcasts',
    stack: [
      {
        name: 'Incumbents and Insurgents',
        description: "Eric Larsen on the collision and collaboration between healthcare and technology — how incumbents adopt AI and startups challenge traditional models.",
        url: 'https://www.incumbentsandinsurgents.com/',
      },
    ],
  },
  {
    title: 'Presentations',
    stack: [
      {
        name: 'Chronicle',
        description: "AI presentation tool that generates professional slides from notes with full customization.",
        url: 'https://chroniclehq.com/',
      },
      {
        name: 'Gamma',
        description: "AI-powered presentation builder.",
        url: 'https://gamma.app/',
      },
    ],
  },
  {
    title: 'Principles',
    stack: [
      {
        name: 'iNaval',
        description: "Online twin of Naval Ravikant.",
        url: 'https://inav.al/',
      },
      {
        name: 'Startup Principles by Abhay Venkatesh',
        description: "Collection of startup principles.",
        url: 'https://docs.google.com/document/d/1QFR3scxuGSY848qA7JDYEHI2uVB7f5nzIj_jIH7ihZQ/edit?tab=t.0',
      },
    ],
  },
  {
    title: 'Programs/Scholarships',
    stack: [
      {
        name: 'Angel Track',
        description: "First Round's program teaching angel investing through frameworks, case studies, and community.",
        url: 'https://www.firstround.com/angel-track',
      },
      {
        name: 'Anthropic Fellows Program',
        description: "Research fellowship program in AI safety and alignment.",
        url: 'https://alignment.anthropic.com/2024/anthropic-fellows-program/',
      },
      {
        name: 'External Researcher Access Program',
        description: "Anthropic's program for external AI research collaboration.",
        url: 'https://support.anthropic.com/en/articles/9125743-what-is-the-external-researcher-access-program',
      },
      {
        name: 'Felicis Fellows',
        description: "Fellowship program for emerging entrepreneurs.",
        url: 'https://www.felicis.com/fellows',
      },
      {
        name: 'Kauffman Fellows',
        description: "Two-year fellowship program for venture capital professionals.",
        url: 'https://www.kauffmanfellows.org/',
      },
      {
        name: 'Leaders in Tech',
        description: "Leadership fellowship combining intensive retreats and peer learning for tech founders, CEOs, and executives across three programs.",
        url: 'https://www.leadersintech.org/',
      },
      {
        name: 'MATS Program',
        description: "Machine learning alignment research program.",
        url: 'https://www.matsprogram.org/',
      },
    ],
  },
  {
    title: 'Proptech',
    stack: [
      {
        name: 'Drafted',
        description: "AI tool for designing residential house plans, with a gallery of 88,000+ user-made floorplans and exterior renders across styles.",
        url: 'https://www.drafted.ai/',
      },
      {
        name: 'WithJoy.AI',
        description: "AI Real Estate Agent for property search and management.",
        url: 'https://withjoy.ai/',
      },
    ],
  },
  {
    title: 'Quantum Computing',
    stack: [
      {
        name: 'PsiQuantum',
        description: "Building the World's First Useful Quantum Computer.",
        url: 'https://www.psiquantum.com/',
      },
    ],
  },
  {
    title: 'Reading',
    stack: [
      {
        name: 'Boil the Ocean',
        description: "Essay arguing superintelligence should inspire ambitious entrepreneurship, not fear.",
        url: 'https://garryslist.org/posts/boil-the-ocean',
      },
      {
        name: 'Get in the Token Path',
        description: "Paul Klein on how AI infra companies can earn agent spend by optimizing the token bill — tokens are the wedge, agent spend is the prize.",
        url: 'https://memos.hawkhill.ventures/p/get-in-the-token-path',
      },
      {
        name: 'Good Platforms, Good Platform Engineers',
        description: "Ryan Delgado on what makes developer platforms work — clear use cases, guardrails over options, and engineers with strong opinions and user empathy.",
        url: 'https://www.ryantime.dev/p/good-platforms-good-platform-engineers',
      },
      {
        name: 'How an a16z healthcare investor decides which companies to bet on',
        description: "Healthcare Brew interview with a16z's Julie Yoo on vetting healthcare startups and AI in clinical care.",
        url: 'https://www.healthcare-brew.com/stories/2025/03/05/a16z-healthcare-investor-decides-which-companies',
      },
      {
        name: 'How to Lose a Startup in 730 Days',
        description: "Brooke Martin's candid post-mortem on shutting down her startup, with lessons on hiring, fundraising, and founder wellness.",
        url: 'https://friendsknowbest.substack.com/p/how-to-lose-a-startup-in-730-days',
      },
      {
        name: 'Inngest',
        description: "Inngest's Series A announcement on why iteration speed is the new product moat.",
        url: 'https://www.inngest.com/blog/announcing-inngest-series-a',
      },
      {
        name: 'Inside the Palantir Mafia',
        description: "Aliza Narin on how Palantir's forward-deployed culture, spike-over-balance ethos, and build-don't-pitch bias turn employees into reluctant founders.",
        url: 'https://alizanarin.substack.com/p/inside-the-palantir-mafia',
      },
      {
        name: 'RF Engineering is Black Magic',
        description: "Hardware FYI and Benji Chia on how AI-assisted tools could democratize RF circuit design — historically a field of tribal knowledge.",
        url: 'https://hardwarefyi.substack.com/p/rf-engineering-is-black-magic',
      },
      {
        name: 'Sequoia AI Ascent',
        description: "Breakdown of Sequoia's AI Ascent on the agent economy, application layer value, and building AI companies.",
        url: 'https://www.theaiopportunities.com/p/sequoia-ai-ascent-ai-might-be-the',
      },
      {
        name: 'Specs, Not Sprints',
        description: "Rishi Kavikondala on how Abnormal AI swapped two-week sprints for a Monday-spec/Friday-demo rhythm built around Claude Code and parallel coding agents.",
        url: 'https://abnormalbuilders.substack.com/p/specs-not-sprints',
      },
      {
        name: 'The Anduril Thesis',
        description: "Contrary Research deep-dive on how Anduril is rebuilding the American defense industry through autonomous systems and modern warfare innovation.",
        url: 'https://research.contrary.com/report/the-anduril-thesis',
      },
      {
        name: 'The Whole Year is a Performance Review',
        description: "Patrick Thompson's Founder Therapy essay on replacing annual reviews with continuous feedback and biannual calibration.",
        url: 'https://patrickthompson.substack.com/p/the-whole-year-is-a-performance-review',
      },
      {
        name: 'Time Horizons',
        description: "AI Digest essay on how AI agents' time horizons for completing complex coding tasks are doubling roughly every 7 months.",
        url: 'https://theaidigest.org/time-horizons',
      },
    ],
  },
  {
    title: 'Recruiting',
    stack: [
      {
        name: 'Ashby',
        description: "All-in-one recruiting software for ambitious teams.",
        url: 'https://ashbyhq.com',
      },
      {
        name: 'Eightfold.ai',
        description: "AI talent acquisition & recruiting platform.",
        url: 'https://eightfold.ai/',
      },
      {
        name: 'Greenhouse',
        description: "Hiring platform with structured interviewing, ATS, and onboarding tools.",
        url: 'https://www.greenhouse.com/',
      },
      {
        name: 'Paraform',
        description: "Hiring marketplace pairing expert recruiters with AI agents to fill roles.",
        url: 'https://www.paraform.com/',
      },
      {
        name: 'People Culture Talent',
        description: "Boutique consulting firm helping venture-backed startups build teams through retained search, embedded recruiting, and people operations.",
        url: 'https://www.peopleculturetalent.com/',
      },
    ],
  },
  {
    title: 'Robotics',
    stack: [
      {
        name: 'Atoms',
        description: "Holding company building physical automation across food, mining, and transport through seven specialized robotics and autonomy subsidiaries.",
        url: 'https://atoms.co/',
      },
      {
        name: 'Generalist AI',
        description: "Robotics company developing embodied foundation models for physical world manipulation.",
        url: 'https://generalistai.com/',
      },
      {
        name: 'Genesis AI',
        description: "Physical AI lab building generalist robots with universal foundation models and open-source simulation.",
        url: 'https://genesis-ai.company/',
      },
      {
        name: 'Mind Robotics',
        description: "Industrial robotics company building collaborative robot platforms for automotive manufacturing, partnered with Rivian.",
        url: 'https://www.mindrobotics.com/',
      },
      {
        name: 'Pittsburgh Robotics Network',
        description: "Pittsburgh's ecosystem supporting 125+ robotics companies.",
        url: 'https://robopgh.org/',
      },
      {
        name: 'Skild AI',
        description: "Scalable robotics foundation models.",
        url: 'https://www.skild.ai/',
      },
      {
        name: 'Sunday Robotics',
        description: "Robotics company building Memo, an autonomous home robot for household tasks like dishwashing.",
        url: 'https://www.sunday.ai/journal/series-b',
      },
    ],
  },
  {
    title: 'Sales/GTM/User Research',
    stack: [
      {
        name: 'Aaru',
        description: "Multi-agent simulation platform that recreates populations to predict behavior without surveys.",
        url: 'https://aaru.com/',
      },
      {
        name: 'Apollo',
        description: "Sales Intelligence and Engagement Platform.",
        url: 'https://www.apollo.io/',
      },
      {
        name: 'Artificial Societies',
        description: "Simulate your product or idea in realistic AI-powered artificial societies.",
        url: 'https://societies.io/',
      },
      {
        name: 'Cardinal',
        description: "AI platform consolidating outbound sales operations into a single tool for growing teams.",
        url: 'https://trycardinal.ai/',
      },
      {
        name: 'Caretta',
        description: "Real-time AI assistant helping sales reps handle objections and questions during live calls.",
        url: 'https://www.caretta.so/',
      },
      {
        name: 'Clay',
        description: "AI-powered sales engagement and prospecting platform.",
        url: 'https://clay.com/',
      },
      {
        name: 'Clodo',
        description: "AI people search platform finding individuals via natural language and automating outreach.",
        url: 'https://clodo.ai/',
      },
      {
        name: 'Ethos',
        description: "AI agent researching people and companies to surface context for finding customers, hires, and deals.",
        url: 'https://agent.askethos.com/',
      },
      {
        name: 'GTM Goose Skills Library',
        description: "Collection of AI skills automating go-to-market tasks like prospecting and competitive intel.",
        url: 'https://skills.gooseworks.ai/',
      },
      {
        name: 'Harmonic',
        description: "Startup discovery engine for VCs and business development teams.",
        url: 'https://harmonic.ai/',
      },
      {
        name: 'Listen Labs',
        description: "AI customer research platform automating recruiting, AI-moderated interviews, and analysis to deliver consumer insights in hours instead of weeks.",
        url: 'https://listenlabs.ai/',
      },
      {
        name: 'Orange Slice',
        description: "AI platform automating lead discovery, enrichment, and CRM syncing for go-to-market teams.",
        url: 'https://www.orangeslice.ai/',
      },
      {
        name: 'Sixtyfour',
        description: "Intelligence infrastructure deploying AI agents to investigate, resolve identities, map relationships, and enrich people and company data.",
        url: 'https://sixtyfour.ai/',
      },
    ],
  },
  {
    title: 'Security',
    stack: [
      {
        name: 'AIUC',
        description: "Company that certifies and insures AI agents against the AIUC-1 standard for enterprise adoption.",
        url: 'https://aiuc.com/',
      },
      {
        name: 'Alice',
        description: "Security and safety platform for testing, protecting, and monitoring generative AI apps, agents, and models throughout their lifecycle.",
        url: 'https://alice.io/',
      },
      {
        name: 'Artemis Security',
        description: "AI-native security operations platform that learns your environment and correlates identity, cloud, endpoint, and network signals to detect and respond to threats.",
        url: 'https://artemissecurity.com/',
      },
      {
        name: 'Cogent Security',
        description: "Agentic AI that automatically investigates, prioritizes, and remediates vulnerabilities for enterprise security teams.",
        url: 'https://www.cogent.com/',
      },
      {
        name: 'Corridor',
        description: "AI code security platform that prevents vulnerabilities before they're written with proactive guardrails.",
        url: 'https://www.corridor.dev/',
      },
      {
        name: 'Cylake',
        description: "AI-native cybersecurity platform delivering on-premise security with total data sovereignty.",
        url: 'https://cylake.com/',
      },
      {
        name: 'depthfirst',
        description: "AI-powered security platform finding vulnerabilities and giving developers actionable fixes across code, infrastructure, and business logic.",
        url: 'https://depthfirst.com/',
      },
      {
        name: 'Tracebit',
        description: "Expect the unexpected with security canaries and monitoring.",
        url: 'https://tracebit.com/',
      },
      {
        name: 'Vanta',
        description: "Compliance platform automating evidence collection and monitoring across 35+ security frameworks.",
        url: 'https://www.vanta.com/',
      },
    ],
  },
  {
    title: 'Skills',
    stack: [
      {
        name: 'Event Prospecting',
        description: "Browserbase skill that automates lead generation by extracting conference attendees and ranking them by ICP fit with rationales.",
        url: 'https://skills.sh/browserbase/skills/event-prospecting',
      },
    ],
  },
  {
    title: 'Social Media/Video/UGC',
    stack: [
      {
        name: 'Argil',
        description: "Generate videos with your AI clone for content creation.",
        url: 'https://www.argil.ai/',
      },
      {
        name: 'Buffer',
        description: "Social media workspace for publishing, scheduling, community replies, and analytics across Instagram, LinkedIn, TikTok, X, and more.",
        url: 'https://buffer.com/',
      },
      {
        name: 'Descript',
        description: "Edit Videos & Podcasts Like a Doc with AI-powered tools.",
        url: 'https://www.descript.com/',
      },
      {
        name: 'Memories.ai',
        description: "Large Visual Memory Model for AI-powered video search and editing.",
        url: 'https://memories.ai/',
      },
      {
        name: 'Mosaic',
        description: "AI Agents for Video Editing and content production.",
        url: 'https://usemosaic.ai/',
      },
      {
        name: 'Overlap',
        description: "Video Marketing AI Agents for social media.",
        url: 'https://overlap.ai/',
      },
    ],
  },
  {
    title: 'Testing/QA',
    stack: [
      {
        name: 'Playwright',
        description: "Fast and reliable end-to-end testing for modern web apps.",
        url: 'https://playwright.dev/',
      },
      {
        name: 'QualGent',
        description: "AI-Powered Mobile App Testing Platform beyond traditional automation.",
        url: 'https://qualgent.ai/',
      },
    ],
  },
  {
    title: 'Voice',
    stack: [
      {
        name: 'AssemblyAI',
        description: "Speech-to-text API with industry-leading accuracy.",
        url: 'https://www.assemblyai.com/',
      },
      {
        name: 'Superwhisper',
        description: "Advanced voice recognition and transcription.",
        url: 'https://superwhisper.com/',
      },
      {
        name: 'Vapi',
        description: "Build Advanced Voice AI Agents for applications.",
        url: 'https://vapi.ai/',
      },
      {
        name: 'Wispr Flow',
        description: "Effortless Voice Dictation with AI.",
        url: 'https://wisprflow.ai/',
      },
    ],
  },
  {
    title: 'Web Browsers/Use',
    stack: [
      {
        name: 'Anchor',
        description: "Cloud browser platform giving AI agents secure, authenticated environments for web automation.",
        url: 'https://anchorbrowser.io/',
      },
      {
        name: 'Brave',
        description: "Privacy-focused Chromium browser that blocks ads and trackers by default, with built-in private search, VPN, and AI assistant.",
        url: 'https://brave.com/',
      },
      {
        name: 'Browser Use',
        description: "Platform providing scalable undetectable browsers for AI agents to interact with websites.",
        url: 'https://browser-use.com/',
      },
      {
        name: 'Browserbase',
        description: "A web browser designed for AI agents & applications.",
        url: 'https://www.browserbase.com/',
      },
      {
        name: 'Exa',
        description: "Advanced web search and intelligence platform for LLMs.",
        url: 'https://exa.ai/',
      },
      {
        name: 'Hyperbrowser',
        description: "AI-powered web browsing and automation.",
        url: 'https://www.hyperbrowser.ai/',
      },
      {
        name: 'Ladybird',
        description: "Truly independent web browser built from scratch by a non-profit.",
        url: 'https://ladybird.org/',
      },
      {
        name: 'Parallel',
        description: "Query the web with advanced parallel processing.",
        url: 'https://parallel.ai/',
      },
      {
        name: 'Strawberry Browser',
        description: "AI web browser that automates repetitive tasks like research, data extraction, and prospecting across tools like LinkedIn and CRMs.",
        url: 'https://strawberrybrowser.com/',
      },
      {
        name: 'Tavily',
        description: "Advanced web search and information retrieval.",
        url: 'https://www.tavily.com/',
      },
      {
        name: 'TinyFish',
        description: "Enterprise API enabling AI web agents to navigate, authenticate, and transact across websites at scale.",
        url: 'https://www.tinyfish.ai/',
      },
    ],
  },
  {
    title: 'Writing',
    stack: [
      {
        name: 'Grammarly',
        description: "AI-powered grammar and writing assistant.",
        url: 'https://www.grammarly.com/',
      },
      {
        name: 'Harper',
        description: "Free, Open Source Grammar Checker for better writing.",
        url: 'https://writewithharper.com/',
      },
    ],
  },
]

export default tools
