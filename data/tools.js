const tools = [
  {
    title: 'Accelerators',
    stack: [
      {
        name: 'AI Grant',
        description: 'Accelerator run by Nat Friedman and Daniel Gross.',
        url: 'https://aigrant.com/',
      },
      {
        name: 'fr8',
        description: 'Amalgamation of hacker hotel/startup incubator/research lab in Sweden.',
        url: 'https://fr8.so/',
      },
      {
        name: 'F.inc',
        description: 'Large build space/incubator in Fort Mason.',
        url: 'https://f.inc/',
      },
      {
        name: 'Google AI Futures Fund',
        description: 'Google\'s fund supporting AI research startup incubation.',
        url: 'https://labs.google/aifuturesfund',
      },
      {
        name: 'Greylock Edge',
        description: 'Early-stage accelerator by Greylock Partners.',
        url: 'https://greylock.com/edge/',
      },
      {
        name: 'Neo Accelerator',
        description: 'Elite accelerator for ambitious builders and world-class founders.',
        url: 'https://neo.com/accelerator',
      },
      {
        name: 'Palantir Fellowship',
        description: 'Palantir\'s startup fellowship program.',
        url: 'https://palantir.events/startup-fellowship',
      },
      {
        name: 'PearX',
        description: 'Pear VC\'s accelerator for early-stage founders.',
        url: 'https://pear.vc/pearx/',
      },
      {
        name: 'Telora*',
        description: 'Helping hackers start startups. Run by Eliam Medina.',
        url: 'https://telora.com/',
      },
      {
        name: 'Vercel AI Accelerator',
        description: 'Vercel\'s accelerator for AI startups.',
        url: 'https://vercel.com/ai-accelerator',
      },
      {
        name: 'Y Combinator',
        description: 'Enough said.',
        url: 'https://www.ycombinator.com/',
      },
    ],
  },
  {
    title: 'Accounting',
    stack: [
      {
        name: 'Campfire',
        description: 'The modern approach to accounting.',
        url: 'https://meetcampfire.com/',
      },
      {
        name: 'Open Ledger',
        description: 'Embedded Accounting API for SaaS Platforms.',
        url: 'https://www.openledger.com/',
      },
    ],
  },
  {
    title: 'AI Art',
    stack: [
      {
        name: 'Midjourney',
        description: 'AI-powered image generation tool for creating stunning visual artwork.',
        url: 'http://midjourney.com',
      },
      {
        name: 'Reve',
        description: 'Bring your creative ideas to life with advanced AI art generation.',
        url: 'https://preview.reve.art/',
      },
    ],
  },
  {
    title: 'Artificial Intelligence - Miscellaneous',
    stack: [
      {
        name: 'Google X',
        description: 'Advanced technology research division focused on moonshot projects.',
        url: 'https://x.company/',
      },
      {
        name: 'LABS.GOOGLE',
        description: 'Google\'s experimental AI research projects and cutting-edge technology demos.',
        url: 'https://labs.google/',
      },
      {
        name: 'The Way of Code',
        description: 'Rick Rubin\'s collaboration with Anthropic on vibe coding.',
        url: 'https://www.thewayofcode.com/',
      },
    ],
  },
  {
    title: 'Assistants',
    stack: [
      {
        name: 'Fyxer AI',
        description: 'AI Executive Assistant for email and productivity.',
        url: 'https://www.fyxer.com/',
      },
      {
        name: 'Lindy.ai',
        description: 'Meet your AI assistant for automating workflows and tasks.',
        url: 'https://www.lindy.ai/',
      },
    ],
  },
  {
    title: 'Authentication',
    stack: [
      {
        name: 'Clerk*',
        description: 'Modern authentication and user management platform for developers.',
        url: 'http://clerk.com',
      },
      {
        name: 'Keycloak',
        description: 'Open-source identity and access management solution.',
        url: 'https://www.keycloak.org/',
      },
      {
        name: 'WorkOS',
        description: 'Make your application enterprise-ready with SSO, directory sync, and more.',
        url: 'https://workos.com/',
      },
    ],
  },
  {
    title: 'Aviation',
    stack: [
      {
        name: 'Rove Miles*',
        description: 'Travel the World for Free through innovative aviation rewards.',
        url: 'https://www.rovemiles.com/',
      },
    ],
  },
  {
    title: 'Banking',
    stack: [
      {
        name: 'Brex',
        description: 'Modern finance software platform for startups and growing businesses.',
        url: 'http://brex.com',
      },
      {
        name: 'Mercury',
        description: 'Online business banking designed for startups and small businesses.',
        url: 'http://mercury.com',
      },
      {
        name: 'Rho',
        description: 'Better banking platform for startups and small businesses.',
        url: 'https://www.rho.co/',
      },
    ],
  },
  {
    title: 'Blogging',
    stack: [
      {
        name: 'Posthaven',
        description: 'The safe place for all your posts forever.',
        url: 'https://posthaven.com/',
      },
      {
        name: 'Medium*',
        description: 'Online publishing platform for sharing ideas and stories.',
        url: 'https://medium.com/',
      },
    ],
  },
  {
    title: 'Books',
    stack: [
      {
        name: 'GDL Book',
        description: 'Geometric Deep Learning comprehensive book resource.',
        url: 'https://geometricdeeplearning.com/book/',
      },
      {
        name: 'Machine Learning Q and AI',
        description: '30 essential questions and answers on ML and AI concepts by Sebastian Raschka.',
        url: 'https://sebastianraschka.com/books/#machine-learning-q-and-ai',
      },
    ],
  },
  {
    title: 'Building Resources',
    stack: [
      {
        name: 'Build in College*',
        description: 'List of free tools, software credits, and fellowships for college builders.',
        url: 'https://www.buildincollege.com/',
      },
      {
        name: 'Hardware Building Resources',
        description: 'Put together by the team at V1. Sometimes specific to UMich, but very useful nontheless.',
        url: 'https://v1team.notion.site/Hardware-Building-Resources-20f82307c07d81fcadcadfd882479f4c',
      },
      {
        name: 'Software Building Resources*',
        description: 'Also put together by the team at V1.',
        url: 'https://v1team.notion.site/Software-Building-Resources-dcdf772230ad4f3195d2399f74964969',
      },
    ],
  },
  {
    title: 'Cap Table Management',
    stack: [
      {
        name: 'AngelList',
        description: 'Build, Lead, Invest - Platform for startup fundraising and investing.',
        url: 'http://angellist.com',
      },
      {
        name: 'Carta',
        description: 'The End-to-End Suite Connecting Private Capital.',
        url: 'http://carta.com',
      },
      {
        name: 'Pulley',
        description: 'Equity management platform for startups and companies.',
        url: 'https://pulley.com/',
      },
    ],
  },
  {
    title: 'Coding',
    stack: [
      {
        name: 'a0.dev',
        description: 'Create Mobile Apps with AI-powered development tools.',
        url: 'https://a0.dev/',
      },
      {
        name: 'All Hands AI',
        description: 'AI-powered coding assistant for software development.',
        url: 'https://www.all-hands.dev/',
      },
      {
        name: 'Augment Code',
        description: 'AI coding platform designed for real-world software development.',
        url: 'http://augmentcode.com',
      },
      {
        name: 'Cognition',
        description: 'AI software engineering company building advanced developer tools.',
        url: 'https://cognition-labs.com/',
      },
      {
        name: 'Cubic',
        description: 'Cursor for code review - streamlined code review process.',
        url: 'https://www.cubic.dev/home',
      },
      {
        name: 'Cursor*',
        description: 'AI-powered code editor that enhances development productivity.',
        url: 'http://cursor.com',
      },
      {
        name: 'Graphite',
        description: 'End-to-end developer platform for modern software teams.',
        url: 'https://graphite.dev/homepage',
      },
      {
        name: 'Morph',
        description: 'The fastest way to apply edits to files with AI assistance.',
        url: 'https://morphllm.com/',
      },
      {
        name: 'Windsurf',
        description: 'Powerful AI code editor (formerly Codeium) for enhanced development workflows.',
        url: 'http://windsurf.com',
      },
    ],
  },
  {
    title: 'Computational Biology',
    stack: [
      {
        name: 'Gaia',
        description: 'Computational biology and bioinformatics platform.',
        url: 'https://gaia.tatta.bio/',
      },
      {
        name: 'Genbio AI',
        description: 'AI-powered genomics and computational biology tools.',
        url: 'https://genbio.ai/',
      },
    ],
  },
  {
    title: 'CRMs',
    stack: [
      {
        name: 'Attio',
        description: 'Next-generation CRM built for modern sales and customer success teams.',
        url: 'http://attio.com',
      },
      {
        name: 'HubSpot',
        description: 'Comprehensive software and tools for your business operations.',
        url: 'http://hubspot.com',
      },
      {
        name: 'Zero',
        description: 'The zero-click CRM that automates customer relationship management.',
        url: 'https://zero.inc/',
      },
    ],
  },
  {
    title: 'Customer Experience',
    stack: [
      {
        name: 'Decagon',
        description: 'Conversational AI platform for enhanced customer experience.',
        url: 'http://decagon.ai',
      },
      {
        name: 'Forethought',
        description: 'Customer Service & Support AI and CX Automation Platform.',
        url: 'https://forethought.ai/',
      },
      {
        name: 'Inkeep',
        description: 'AI-powered support and documentation for your users and support team.',
        url: 'https://inkeep.com/',
      },
      {
        name: 'Siena',
        description: 'AI-powered customer support and documentation for your users and support team.',
        url: 'https://www.siena.cx/',
      },
    ],
  },
  {
    title: 'Defense Contracting',
    stack: [
      {
        name: 'Candor',
        description: 'AI-powered defense contracting and government solutions.',
        url: 'http://usecandor.ai',
      },
      {
        name: 'Usul',
        description: 'Defense technology and contracting platform.',
        url: 'https://usul.com/',
      },
    ],
  },
  {
    title: 'Design Studios',
    stack: [
      {
        name: 'lowercase',
        description: 'Design and development done different - creative studio approach.',
        url: 'https://www.lowercase.club/',
      },
    ],
  },
  {
    title: 'Developer Tools',
    stack: [
      {
        name: 'Anima',
        description: 'AI Design to Code - Figma to React, App, Website, and HTML conversion.',
        url: 'https://www.animaapp.com/',
      },
      {
        name: 'BlockNote*',
        description: 'Javascript Block-Based React rich text editor for modern applications.',
        url: 'https://www.blocknotejs.org/',
      },
      {
        name: 'Composio*',
        description: 'Access 250+ apps and services in just one line of code.',
        url: 'https://composio.dev/',
      },
      {
        name: 'Convex',
        description: 'Fullstack TypeScript development platform for building modern applications.',
        url: 'https://www.convex.dev/',
      },
      {
        name: 'CrewAI*',
        description: 'The leading multi-agent platform for AI development.',
        url: 'https://www.crewai.com/',
      },
      {
        name: 'Feather',
        description: 'Simple open source SVG icon library.',
        url: 'https://feathericons.com/',
      },
      {
        name: 'Linear*',
        description: 'Project management tool for software development teams.',
        url: 'https://linear.app/',
      },
      {
        name: 'Liveblocks',
        description: 'Collaboration engine with AI copilots, comments, and multiplayer editing APIs.',
        url: 'https://liveblocks.io/',
      },
      {
        name: 'Magic Patterns',
        description: 'AI-powered design pattern generation and development tools.',
        url: 'https://www.magicpatterns.com/',
      },
      {
        name: 'Morphik',
        description: 'RAG platform for building AI agents with visual-first retrieval and knowledge graphs.',
        url: 'https://morphik.ai/',
      },
      {
        name: 'Orama',
        description: 'AI-powered data search and chat engine',
        url: 'https://orama.com/',
      },
      {
        name: 'React Bits*',
        description: 'Collection of React patterns, techniques, and best practices.',
        url: 'https://reactbits.dev/',
      },
      {
        name: 'Render',
        description: 'Cloud application platform for hosting and deploying web applications.',
        url: 'https://render.com/',
      },
      {
        name: 'Resend*',
        description: 'Email API designed specifically for developers with excellent DX.',
        url: 'https://resend.com/home',
      },
      {
        name: 'Solar',
        description: 'Build Apps for your Business with streamlined development tools.',
        url: 'https://try.solar/',
      },
      {
        name: 'Superflex',
        description: 'Turn Figma to Code in Seconds with AI-powered conversion.',
        url: 'https://www.superflex.ai/',
      },
    ],
  },
  {
    title: 'Databases',
    stack: [
      {
        name: 'Firebase',
        description: 'Google\'s backend-as-a-service platform.',
        url: 'https://firebase.google.com/',
      },
      {
        name: 'HelixDB',
        description: 'Open-source graph-vector database built in Rust for RAG and AI applications.',
        url: 'https://www.helix-db.com/',
      },
      {
        name: 'Prisma',
        description: 'Fast Postgres-based ORM for Node.js and TypeScript.',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'Redis',
        description: 'In-memory data structure store, used as a database, cache, and message broker.',
        url: 'https://redis.io/',
      },
      {
        name: 'Supabase*',
        description: 'Open-source Firebase alternative.',
        url: 'https://supabase.com/',
      },
    ],
  },
  {
    title: 'Documentation',
    stack: [
      {
        name: 'GitBook',
        description: 'Build product documentation your users will love.',
        url: 'https://www.gitbook.com/',
      },
      {
        name: 'Mintlify*',
        description: 'Beautiful, easy-to-maintain documentation for developers and teams.',
        url: 'https://www.mintlify.com/',
      },
    ],
  },
  {
    title: 'Documents',
    stack: [
      {
        name: 'Agree.com',
        description: 'Free E-Signature & Integrated Payments Platform.',
        url: 'https://agree.com/',
      },
      {
        name: 'Landing AI*',
        description: 'AI-powered document processing and automation.',
        url: 'https://landing.ai/',
      },
    ],
  },
  {
    title: 'Domain Names',
    stack: [
      {
        name: 'Porkbun*',
        description: 'An oddly satisfying domain registration experience.',
        url: 'https://porkbun.com/',
      },
    ],
  },
  {
    title: 'Email',
    stack: [
      {
        name: 'Conversion',
        description: 'Enterprise AI marketing agents for SEO & Google Ads.',
        url: 'https://conversion.ai/',
      },
      {
        name: 'Resend*',
        description: 'Email API designed specifically for developers.',
        url: 'http://resend.com',
      },
      {
        name: 'Superhuman*',
        description: 'The most productive email app ever made for power users.',
        url: 'http://superhuman.com',
      },
      {
        name: 'Zero Email',
        description: 'Email client focused on zero inbox methodology.',
        url: 'https://0.email/',
      },
    ],
  },
  {
    title: 'Event Planning',
    stack: [
      {
        name: 'Luma*',
        description: 'Delightful events platform for creating and managing gatherings.',
        url: 'http://lu.ma',
      },
      {
        name: 'Partiful',
        description: 'Free online invitations with RSVP tracking for events.',
        url: 'https://partiful.com/',
      },
    ],
  },
  {
    title: 'Finance/Fintech',
    stack: [
      {
        name: 'Model ML',
        description: 'Enterprise AI workspace for financial modeling, due diligence, and deal execution.',
        url: 'https://www.modelml.com/',
      },
      {
        name: 'Monarch Money*',
        description: 'Personal finance management tool.',
        url: 'https://monarchmoney.com/',
      },
      {
        name: 'Oscilar',
        description: 'AI-powered risk platform handling fraud, credit, onboarding, and compliance.',
        url: 'https://oscilar.com/',
      },
    ],
  },
  {
    title: 'Generative Engine Optimization',
    stack: [
      {
        name: 'Daydream',
        description: 'AI-driven SEO and GEO agency.',
        url: 'https://www.withdaydream.com/',
      },
      {
        name: 'Profound',
        description: 'AI Answer Engine Optimization for improved search visibility.',
        url: 'https://www.tryprofound.com/',
      },
      {
        name: 'Relixir',
        description: 'The AI Generative Engine Optimization GEO Platform.',
        url: 'https://relixir.ai/',
      },
      {
        name: 'Split.dev',
        description: 'LLM-Search Lead Attribution for Growth Teams.',
        url: 'http://split.dev',
      },
    ],
  },
  {
    title: 'GPUs on the Cloud',
    stack: [
      {
        name: 'Lambda',
        description: 'GPU Compute for AI workloads and machine learning.',
        url: 'https://lambda.ai/',
      },
      {
        name: 'Modal',
        description: 'High-performance AI infrastructure for running compute-intensive workloads.',
        url: 'http://modal.com',
      },
    ],
  },
  {
    title: 'Guides',
    stack: [
      {
        name: 'Starter to SF*',
        description: 'Comprehensive SF guide by Michelle Fang.',
        url: 'https://www.startertosf.guide/',
      },
    ],
  },
  {
    title: 'Law',
    stack: [
      {
        name: 'Crosby',
        description: 'Execute Contracts Faster with AI-powered legal automation.',
        url: 'https://crosby.ai/',
      },
    ],
  },
  {
    title: 'Learning',
    stack: [
      {
        name: 'Fast.ai',
        description: 'Making neural nets uncool again - practical deep learning education.',
        url: 'https://www.fast.ai/',
      },
      {
        name: 'Miyagi Labs',
        description: 'AI-powered learning and education platform.',
        url: 'https://miyagilabs.ai/',
      },
      {
        name: 'Opennote*',
        description: 'AI-powered note-taking platform for personalized learning.',
        url: 'https://www.opennote.com/',
      },
      {
        name: 'YouLearn AI*',
        description: 'AI-powered personalized learning experiences.',
        url: 'http://youlearn.ai',
      },
    ],
  },
  {
    title: 'Marketing',
    stack: [
      {
        name: 'Hightouch',
        description: 'Composable Customer Data Platform (CDP) & AI Decisioning.',
        url: 'https://hightouch.com/',
      },
      {
        name: 'Superscale AI',
        description: 'AI-powered marketing automation and scaling.',
        url: 'https://www.superscale.ai/',
      },
    ],
  },
  {
    title: 'Memory',
    stack: [
      {
        name: 'Mem0*',
        description: 'The Memory layer for your AI apps and applications.',
        url: 'https://mem0.ai/',
      },
    ],
  },
  {
    title: 'Models',
    stack: [
      {
        name: 'ChatGPT*',
        description: 'OpenAI\'s advanced AI model.',
        url: 'https://chatgpt.com/',
      },
      {
        name: 'Claude*',
        description: 'Anthropic\'s advanced AI model.',
        url: 'https://www.anthropic.com/',
      },
      {
        name: 'Gemini',
        description: 'Google\'s advanced AI model.',
        url: 'https://gemini.google.com/',
      },
      {
        name: 'Grok',
        description: 'X.ai\'s advanced AI model.',
        url: 'https://grok.com/',
      },
      {
        name: 'Groq',
        description: 'Purpose-built AI inference platform.',
        url: 'https://groq.com/',
      },
    ],
  },
  {
    title: 'Monitoring/Analytics',
    stack: [
      {
        name: 'Better Stack',
        description: 'Radically better observability stack for modern applications.',
        url: 'https://betterstack.com/',
      },
      {
        name: 'incident.io',
        description: 'All-in-one incident management platform for engineering teams.',
        url: 'https://incident.io/',
      },
      {
        name: 'Keywords AI',
        description: 'AI-powered keyword research and analytics platform.',
        url: 'https://www.keywordsai.co/',
      },
      {
        name: 'PostHog*',
        description: 'All-in-one platform for building successful products with analytics.',
        url: 'http://posthog.com',
      },
    ],
  },
  {
    title: 'Personal Websites',
    stack: [
      {
        name: 'Deedy Das',
        description: 'Principal at Menlo Ventures.',
        url: 'https://debarghyadas.com/',
      },
      {
        name: 'Michael Seibel',
        description: 'Partner Emeritus of Y Combinator.',
        url: 'https://www.michaelseibel.com/',
      },
      {
        name: 'Patrick Collison',
        description: 'Co-founder of Stripe.',
        url: 'https://patrickcollison.com/',
      },
      {
        name: 'Qasar Younis',
        description: 'Co-founder of Applied Intuition.',
        url: 'https://qy.co/about/',
      },
      {
        name: 'Todd Goldberg',
        description: 'Early-stage VC, co-founder of Curated.',
        url: 'https://toddgoldberg.com/index.html',
      },
      {
        name: 'Zhou Xian',
        description: 'Co-founder of Genesis.',
        url: 'https://www.zhou-xian.com/',
      },
    ],
  },
  {
    title: 'Philanthropic Organizations',
    stack: [
      {
        name: 'Renaissance Philanthropy',
        description: 'Modern approach to philanthropic giving and impact.',
        url: 'https://renaissancephilanthropy.org/',
      },
    ],
  },
  {
    title: 'Presentations',
    stack: [
      {
        name: 'Gamma*',
        description: 'AI-powered presentation builder.',
        url: 'https://gamma.app/',
      },
    ],
  },
  {
    title: 'Programs/Scholarships',
    stack: [
      {
        name: 'Anthropic Fellows Program',
        description: 'Research fellowship program in AI safety and alignment.',
        url: 'https://alignment.anthropic.com/2024/anthropic-fellows-program/',
      },
      {
        name: 'Avra',
        description: 'Program turning founders into great CEOs.',
        url: 'https://www.avracap.com/',
      },
      {
        name: 'External Researcher Access Program',
        description: 'Anthropic\'s program for external AI research collaboration.',
        url: 'https://support.anthropic.com/en/articles/9125743-what-is-the-external-researcher-access-program',
      },
      {
        name: 'Felicis Fellows',
        description: 'Fellowship program for emerging entrepreneurs.',
        url: 'https://www.felicis.com/fellows',
      },
      {
        name: 'MATS Program',
        description: 'Machine learning alignment research program.',
        url: 'https://www.matsprogram.org/',
      },
    ],
  },
  {
    title: 'PropTech',
    stack: [
      {
        name: 'WithJoy.AI',
        description: 'AI Real Estate Agent for property search and management.',
        url: 'https://withjoy.ai/',
      },
    ],
  },
  {
    title: 'Quantum Computing',
    stack: [
      {
        name: 'PsiQuantum',
        description: 'Building the World\'s First Useful Quantum Computer.',
        url: 'https://www.psiquantum.com/',
      },
    ],
  },
  {
    title: 'Recruiting',
    stack: [
      {
        name: 'Ashby',
        description: 'All-in-one recruiting software for ambitious teams.',
        url: 'http://ashbyhq.com',
      },
      {
        name: 'Eightfold.ai',
        description: 'AI talent acquisition & recruiting platform.',
        url: 'https://eightfold.ai/',
      },
    ],
  },
  {
    title: 'Robotics',
    stack: [
      {
        name: 'Genesis AI',
        description: 'Physical AI lab building generalist robots with universal foundation models and open-source simulation.',
        url: 'https://genesis-ai.company/',
      },
      {
        name: 'Pittsburgh Robotics Network',
        description: 'Pittsburgh\'s ecosystem supporting 125+ robotics companies.',
        url: 'https://robopgh.org/',
      },
      {
        name: 'Skild AI',
        description: 'Scalable robotics foundation models.',
        url: 'https://www.skild.ai/',
      },
    ],
  },
  {
    title: 'Sales/GTM/User Research',
    stack: [
      {
        name: 'Apollo*',
        description: 'Sales Intelligence and Engagement Platform.',
        url: 'https://www.apollo.io/',
      },
      {
        name: 'Artificial Societies',
        description: 'Simulate your product or idea in realistic AI-powered artificial societies.',
        url: 'https://societies.io/',
      },
      {
        name: 'Clado',
        description: 'AI-powered sales and go-to-market solutions.',
        url: 'https://clado.ai',
      },
      {
        name: 'Clay',
        description: 'AI-powered sales engagement and prospecting platform.',
        url: 'https://clay.com/',
      },
    ],
  },
  {
    title: 'Security',
    stack: [
      {
        name: 'Tracebit',
        description: 'Expect the unexpected with security canaries and monitoring.',
        url: 'https://tracebit.com/',
      },
    ],
  },
  {
    title: 'Shopping',
    stack: [
      {
        name: 'Ario',
        description: 'Turn Competitor Data into First Party Data.',
        url: 'https://heyario.com/',
      },
    ],
  },
  {
    title: 'Social Media/Video/UGC',
    stack: [
      {
        name: 'Argil',
        description: 'Generate videos with your AI clone for content creation.',
        url: 'https://www.argil.ai/',
      },
      {
        name: 'Descript',
        description: 'Edit Videos & Podcasts Like a Doc with AI-powered tools.',
        url: 'https://www.descript.com/',
      },
      {
        name: 'Memories.ai',
        description: 'Large Visual Memory Model for AI-powered video search and editing.',
        url: 'https://memories.ai/',
      },
      {
        name: 'Mosaic',
        description: 'AI Agents for Video Editing and content production.',
        url: 'https://usemosaic.ai/',
      },
      {
        name: 'Overlap',
        description: 'Video Marketing AI Agents for social media.',
        url: 'https://overlap.ai/',
      },
      {
        name: 'Superscale AI',
        description: 'AI-powered social media and video scaling.',
        url: 'https://www.superscale.ai/',
      },
    ],
  },
  {
    title: 'Testing/QA',
    stack: [
      {
        name: 'QualGent',
        description: 'AI-Powered Mobile App Testing Platform beyond traditional automation.',
        url: 'https://qualgent.ai/',
      },
    ],
  },
  {
    title: 'Voice',
    stack: [
      {
        name: 'Brainbase',
        description: 'Build your own AI workforce with voice capabilities.',
        url: 'https://usebrainbase.com/',
      },
      {
        name: 'Superwhisper',
        description: 'Advanced voice recognition and transcription.',
        url: 'https://superwhisper.com/',
      },
      {
        name: 'Vapi',
        description: 'Build Advanced Voice AI Agents for applications.',
        url: 'https://vapi.ai/',
      },
      {
        name: 'Wispr Flow*',
        description: 'Effortless Voice Dictation with AI.',
        url: 'https://wisprflow.ai/',
      },
    ],
  },
  {
    title: 'Web Browsers/Use',
    stack: [
      {
        name: 'Browserbase*',
        description: 'A web browser designed for AI agents & applications.',
        url: 'https://www.browserbase.com/',
      },
      {
        name: 'Exa',
        description: 'Advanced web search and intelligence platform for LLMs.',
        url: 'https://exa.ai/',
      },
      {
        name: 'Hyperbrowser',
        description: 'AI-powered web browsing and automation.',
        url: 'https://www.hyperbrowser.ai/',
      },
      {
        name: 'Parallel',
        description: 'Query the web with advanced parallel processing.',
        url: 'https://parallel.ai/',
      },
      {
        name: 'Playwright',
        description: 'Fast and reliable end-to-end testing for modern web apps.',
        url: 'https://playwright.dev/',
      },
      {
        name: 'Reworkd',
        description: 'AI-powered web automation and data extraction.',
        url: 'https://www.reworkd.ai/',
      },
      {
        name: 'Tavily',
        description: 'Advanced web search and information retrieval.',
        url: 'https://www.tavily.com/',
      },
    ],
  },
  {
    title: 'Writing',
    stack: [
      {
        name: 'Grammarly*',
        description: 'AI-powered grammar and writing assistant.',
        url: 'https://www.grammarly.com/',
      },
      {
        name: 'Harper',
        description: 'Free, Open Source Grammar Checker for better writing.',
        url: 'https://writewithharper.com/',
      },
    ],
  },
]

export default tools 