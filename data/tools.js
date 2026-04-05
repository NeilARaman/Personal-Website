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
        name: 'Nozomio Labs',
        description: "Applied research lab building context infrastructure for AI systems.",
        url: 'https://www.nozomio.com/',
      },
      {
        name: 'Subconscious',
        description: "Infrastructure platform enabling LLMs to run as autonomous background agents with tool calling.",
        url: 'https://www.subconscious.dev/',
      },
    ],
  },
  {
    title: 'AI Research Labs',
    stack: [
      {
        name: 'Arena',
        description: "Company developing electromagnetic intelligence and sensing technology.",
        url: 'https://www.arenaphysica.com/',
      },
      {
        name: 'Brain Interfaces',
        description: "Research team building personal brain-computer interfaces for direct neural communication.",
        url: 'https://www.neuralace.co/',
      },
      {
        name: 'Brainbase',
        description: "Applied AI research lab building Kafka, the first AI employee with its own computer, email, and phone number.",
        url: 'https://usebrainbase.com/',
      },
      {
        name: 'Context',
        description: "Enterprise AI platform deploying autonomous agents that execute real workflows inside company systems.",
        url: 'https://www.context.ai/',
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
        name: 'Generalist AI',
        description: "Robotics company developing embodied foundation models for physical world manipulation.",
        url: 'https://generalistai.com/',
      },
      {
        name: 'Google X',
        description: "Advanced technology research division focused on moonshot projects.",
        url: 'https://x.company/',
      },
      {
        name: 'LABS.GOOGLE',
        description: "Google's experimental AI research projects and cutting-edge technology demos.",
        url: 'https://labs.google/',
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
        name: 'Softmax',
        description: "Research lab behind Cogames, a multiplayer benchmark for measuring AI social intelligence.",
        url: 'https://softmax.com/',
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
        name: 'Machine Learning Q and AI',
        description: "30 essential questions and answers on ML and AI concepts by Sebastian Raschka.",
        url: 'https://sebastianraschka.com/books/#machine-learning-q-and-ai',
      },
      {
        name: 'Situational Awareness',
        description: "Essay series on AI progress and AGI timelines by Leopold Aschenbrenner.",
        url: 'https://situational-awareness.ai/',
      },
      {
        name: 'The Age of Em',
        description: "Economics book by Robin Hanson analyzing a future dominated by brain emulation technology.",
        url: 'https://ageofem.com/',
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
        name: 'Windsurf',
        description: "Powerful AI code editor (formerly Codeium) for enhanced development workflows.",
        url: 'https://windsurf.com',
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
        description: "AI-powered support and documentation for your users and support team.",
        url: 'https://inkeep.com/',
      },
      {
        name: 'Siena',
        description: "AI-powered customer support and documentation for your users and support team.",
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
        name: 'Nominal',
        description: "Industrial data platform helping hardware engineering teams manage data from instrumentation to analysis.",
        url: 'https://nominal.io/',
      },
      {
        name: 'Sixtyfour',
        description: "Enterprise data platform using AI agents to enrich profiles from social, contact, and proprietary data.",
        url: 'https://sixtyfour.ai/',
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
        name: 'Candor',
        description: "AI-powered defense contracting and government solutions.",
        url: 'https://usecandor.ai',
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
        name: 'Softlight',
        description: "AI product discovery and design platform that learns your business and explores product ideas.",
        url: 'https://softlight.com/',
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
        name: 'Feather',
        description: "Simple open source SVG icon library.",
        url: 'https://feathericons.com/',
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
        name: 'Rube',
        description: "AI integration platform connecting 500+ apps to your chat and development environment.",
        url: 'https://rube.composio.dev/',
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
      {
        name: 'Tulip',
        description: "Composable operations platform for manufacturers to build apps and manage production workflows.",
        url: 'https://tulip.co/',
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
        name: 'BigCommerce',
        description: "Open SaaS e-commerce platform for growing businesses.",
        url: 'https://www.bigcommerce.com/',
      },
      {
        name: 'Ecwid',
        description: "Free e-commerce platform for small businesses.",
        url: 'https://www.ecwid.com/',
      },
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
        name: 'Lightspeed eCom',
        description: "E-commerce platform for retail businesses.",
        url: 'https://www.lightspeedhq.com/ecommerce/',
      },
      {
        name: 'Shopify',
        description: "Complete commerce platform for online stores.",
        url: 'https://www.shopify.com/',
      },
      {
        name: 'Square Online',
        description: "E-commerce solution integrated with Square payments.",
        url: 'https://squareup.com/us/en/online-store',
      },
      {
        name: 'WooCommerce',
        description: "Open-source e-commerce plugin for WordPress.",
        url: 'https://woocommerce.com/',
      },
    ],
  },
  {
    title: 'Email',
    stack: [
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
    title: 'GPUs on the Cloud',
    stack: [
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
        name: 'Boil the Ocean',
        description: "Essay arguing superintelligence should inspire ambitious entrepreneurship, not fear.",
        url: 'https://garryslist.org/posts/boil-the-ocean',
      },
      {
        name: 'Clay\'s EA Take-Home',
        description: "Take-home assessment for Clay executive assistant hiring process.",
        url: 'https://docs.google.com/document/d/1Jct3sKsza5QAn-IQrdnG2Givs7WlQgn2nY5IIcwt_Vw/edit?dub_id=2Dg5uaQVeT3nT8RR&tab=t.0',
      },
      {
        name: 'Starter to SF',
        description: "Comprehensive SF guide by Michelle Fang.",
        url: 'https://www.startertosf.guide/',
      },
      {
        name: 'The Way of Code',
        description: "Rick Rubin's collaboration with Anthropic on vibe coding.",
        url: 'https://www.thewayofcode.com/',
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
        name: 'Datavant',
        description: "Healthcare data collaboration platform enabling secure exchange of health records across organizations.",
        url: 'https://www.datavant.com/',
      },
      {
        name: 'Gaia',
        description: "Computational biology and bioinformatics platform.",
        url: 'https://gaia.tatta.bio/',
      },
      {
        name: 'Genbio AI',
        description: "AI-powered genomics and computational biology tools.",
        url: 'https://genbio.ai/',
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
        name: 'Beej\'s Guide to Computer Science',
        description: "Free guide teaching problem-solving skills and learning strategies for computer science.",
        url: 'https://beej.us/guide/bglcs/html/#understanding-the-problem',
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
        name: 'Opennote',
        description: "AI-powered note-taking platform for personalized learning.",
        url: 'https://www.opennote.com/',
      },
      {
        name: 'Sana',
        description: "Enterprise AI learning platform combining LMS, authoring, and AI tutor. Now part of Workday.",
        url: 'https://sanalabs.com/',
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
    title: 'Models',
    stack: [
      {
        name: 'ChatGPT',
        description: "OpenAI's advanced AI model.",
        url: 'https://chatgpt.com/',
      },
      {
        name: 'Claude',
        description: "Anthropic's advanced AI model.",
        url: 'https://www.anthropic.com/',
      },
      {
        name: 'Gemini',
        description: "Google's advanced AI model.",
        url: 'https://gemini.google.com/',
      },
      {
        name: 'Grok',
        description: "X.ai's advanced AI model.",
        url: 'https://grok.com/',
      },
      {
        name: 'Groq',
        description: "Purpose-built AI inference platform.",
        url: 'https://groq.com/',
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
        name: 'Respan',
        description: "AI observability and evaluation platform for tracing, debugging, and improving AI agent behavior.",
        url: 'https://respan.ai/',
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
        name: 'Anthropic Fellows Program',
        description: "Research fellowship program in AI safety and alignment.",
        url: 'https://alignment.anthropic.com/2024/anthropic-fellows-program/',
      },
      {
        name: 'Avra',
        description: "Program turning founders into great CEOs.",
        url: 'https://www.avracap.com/',
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
        name: 'MATS Program',
        description: "Machine learning alignment research program.",
        url: 'https://www.matsprogram.org/',
      },
    ],
  },
  {
    title: 'PropTech',
    stack: [
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
    ],
  },
  {
    title: 'Robotics',
    stack: [
      {
        name: 'Genesis AI',
        description: "Physical AI lab building generalist robots with universal foundation models and open-source simulation.",
        url: 'https://genesis-ai.company/',
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
        name: 'Orange Slice',
        description: "AI platform automating lead discovery, enrichment, and CRM syncing for go-to-market teams.",
        url: 'https://www.orangeslice.ai/',
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
        name: 'Cylake',
        description: "AI-native cybersecurity platform delivering on-premise security with total data sovereignty.",
        url: 'https://cylake.com/',
      },
      {
        name: 'The Antifraud Company',
        description: "AI-powered investigative platform detecting corporate fraud in government spending programs.",
        url: 'https://antifraudcompany.com/',
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
    title: 'Social Media/Video/UGC',
    stack: [
      {
        name: 'Argil',
        description: "Generate videos with your AI clone for content creation.",
        url: 'https://www.argil.ai/',
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
