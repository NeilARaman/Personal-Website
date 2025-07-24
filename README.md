# Neil Raman Personal Website

> Documenting my journey every step of the way.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FNeilARaman%2FPersonal-Website)

## About Me

I'm Neil Raman, a sophomore at Carnegie Mellon University studying Information Systems and Economics. I have interests in computational biology/chemistry, applied AI/ML in healthcare, and research foundational models in robotics, driverless cars, and space exploration. Currently building the best entrepreneurship environment at CMU through Foundry and scouting for impactful startups via GoAhead Ventures.

## Features

- 🎨 **Modern Design** - Clean, responsive design with smooth animations
- 📝 **Blog/Articles** - Markdown-based blog with syntax highlighting
- 🛠️ **Projects Showcase** - Display of personal and professional projects
- 📊 **Investment Portfolio** - Showcase of investment and venture activities
- 🎤 **Talks & Presentations** - Speaking engagements and presentations
- 🎧 **Podcast Appearances** - Media appearances and interviews
- 📞 **Contact Form** - Direct communication through email integration
- ⌨️ **Command Bar** - Quick navigation with keyboard shortcuts (⌘K)
- 🌙 **Optimized Performance** - Built with Next.js for optimal loading speeds
- 📱 **Mobile Responsive** - Works seamlessly across all devices

## Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) - React framework for production
- **Styling:** [Stitches](https://stitches.dev/) - CSS-in-JS with near-zero runtime
- **Content:** [Markdown](https://daringfireball.net/projects/markdown/) - Content management
- **Animation:** [Framer Motion](https://www.framer.com/motion/) - Smooth animations and transitions
- **Icons:** [Lottie](https://lottiefiles.com/) - High-quality animated icons
- **Command Bar:** [KBar](https://kbar.vercel.app/) - Fast keyboard navigation
- **Email:** Custom email integration for contact form
- **Deployment:** [Vercel](https://vercel.com/) - Serverless deployment platform

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/NeilARaman/Personal-Website.git
   cd Personal-Website
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory:

   ```bash
   # Add environment variables as needed
   RESEND_API_KEY=your_resend_api_key
   RESEND_DESTINATION_EMAIL=your_email@example.com
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser:**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## Project Structure

```text
.
├── articles/          # Blog posts and articles (Markdown)
├── components/        # Reusable React components
├── data/             # JSON data files for content
├── layouts/          # Page layout templates
├── lib/              # Utility functions and helpers
├── pages/            # Next.js pages and API routes
├── public/           # Static assets (images, icons, fonts)
├── .env              # Environment variables
├── next.config.js    # Next.js configuration
├── package.json      # Dependencies and scripts
└── stitches.config.js # Styling configuration
```

### Key Directories

- **`articles/`** - Markdown files for blog posts and articles
- **`components/`** - Reusable UI components like BlogDate, CommandBar, Navbar
- **`data/`** - JSON files containing information about projects, talks, investments
- **`pages/`** - Application pages and API endpoints
- **`public/static/`** - Images, icons, audio files, and other static assets

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality
- `npm run export` - Export static site

## Deployment

This website is optimized for deployment on [Vercel](https://vercel.com/):

1. **Connect your GitHub repository** to Vercel
2. **Set environment variables** in your Vercel dashboard
3. **Deploy automatically** on every push to main branch

### Manual Deployment

```bash
npm run build
npm run export
```

## Content Management

### Adding Blog Posts

1. Create a new Markdown file in the `articles/` directory
2. Include frontmatter with metadata:

   ```markdown
   ---
   title: "Your Post Title"
   description: "Brief description"
   date: "2025-01-01"
   ---

   Your content here...
   ```

### Updating Projects

Edit the `data/projects.js` file to add or modify project information.

### Updating Personal Information

- **About page:** Edit `data/about.js`
- **Contact information:** Update `components/Footer.js`
- **Investment portfolio:** Modify `data/investments.js`

## Keyboard Shortcuts

- `⌘K` / `Ctrl+K` - Open command bar
- `⌘L` / `Ctrl+L` - Copy website link
- `⌘E` / `Ctrl+E` - Open email contact
- Navigate through sections using keyboard shortcuts in command bar

## Performance Features

- **Static Site Generation (SSG)** for optimal performance
- **Image optimization** with Next.js Image component
- **Code splitting** for faster page loads
- **Lazy loading** for images and components
- **Web Vitals monitoring** for performance insights

## Contributing

While this is a personal website, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
