import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import items from '../data/projects'
import { sanitizeHTML } from '../lib/sanitize'

// Lazy load heavy components with proper component resolution
const MotionLayoutGroup = dynamic(
  () => import('framer-motion').then(mod => {
    // Create a proper wrapper component that React recognizes
    const LayoutGroupWrapper = ({ children }) => {
      const LayoutGroup = mod.LayoutGroup
      return React.createElement(LayoutGroup, null, children)
    }
    LayoutGroupWrapper.displayName = 'LayoutGroupWrapper'
    return LayoutGroupWrapper
  }),
  { ssr: false }
)

const FeaturedProject = dynamic(() => import('../components/FeaturedProject'), {
  ssr: false,
  loading: () => <div style={{ height: '120px', background: '#212024', borderRadius: '8px', marginBottom: '20px' }} />
})

const FeaturedProjects = dynamic(() => import('../components/FeaturedProjects').then(mod => mod.FeaturedProjects), {
  ssr: false
})

export async function getStaticProps() {
  const meta = {
    title: 'Projects // Neil Raman',
    tagline: 'Work. Hobby. Open Source.',
    image: '/static/images/projects-bw.jpg',
    primaryColor: 'cyan',
    secondaryColor: 'green',
  }

  return { props: meta }
}

function Projects(props) {
  const renderFeatured = () => {
    const featured = ['Spotify Vinyl Viewer']

    return items
      .map(item => {
        return item.projects.filter(project => featured.includes(project.title))
      })
      .filter(item => {
        if (item.length > 0) {
          return item
        }
      })
      .flat()
      .map((item, index) => {
        return <FeaturedProject key={index} project={item} />
      })
  }

  const renderAll = () => {
    return items.map((item, index) => {
      return (
        <div key={index}>
          <h3>{item.year}</h3>
          <ul>
            {item.projects.map((project, pIndex) => {
              return <ProjectItem key={pIndex} project={project} />
            })}
          </ul>
        </div>
      )
    })
  }

  const getTotalProjects = () => {
    let total = 0

    for (let i = 0; i < items.length; i++) {
      total = total + items[i].projects.length
    }

    return total
  }

  const { title, image } = props
  const description = `I love building projects that other people can use, and also making applications that I use myself.
  Here you can navigate to <strong>${getTotalProjects()} different</strong> websites, apps, and libraries I built.
  Some projects are still active, others have been discontinued.`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://neilraman.com/projects" property="og:url" />
        <meta content={`https://neilraman.com${image}`} property="og:image" />
        <meta content={title} name="twitter:title" />
        <meta content={stripHtml(description)} name="twitter:description" />
        <meta content={`https://neilraman.com${image}`} name="twitter:image" />
      </Head>

      <MotionLayoutGroup>
        <p dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }} />

        <h2>Featured Projects</h2>
        <FeaturedProjects>{renderFeatured()}</FeaturedProjects>

        <h2>All Projects</h2>
        {renderAll()}
      </MotionLayoutGroup>
    </>
  )
}

function ProjectItem(props) {
  const { project } = props

  return (
    <li>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        {project.title}
      </a>
    </li>
  )
}

Projects.Layout = Base

export default Projects
