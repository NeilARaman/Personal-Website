import Head from 'next/head'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import tools from '../data/tools'
import { sanitizeHTML } from '../lib/sanitize'

export async function getStaticProps() {
  const meta = {
    title: 'Tools // Neil Raman',
    description:
      "Interesting <strong>tools and resources</strong> I've discovered across AI, development, finance, and more. This is a <strong>living document</strong> of software/platforms that caught my attention, <strong>ones with a * after them</strong> are something that I use or I've been a part of.",
    tagline: 'Resources. Tools. Discoveries.',
    image: '/static/images/uses-bw.jpg',
    primaryColor: 'cyan',
    secondaryColor: 'purple',
  }

  return { props: meta }
}

function Tools(props) {
  const { title, description, image } = props

  const renderAll = () => {
    return tools.map((category, index) => {
      return (
        <div key={index}>
          <h2>{category.title}</h2>
          <ul>
            {category.stack.map((tool, iIndex) => {
              return (
                <li key={iIndex}>
                  <a href={tool.url} target="_blank">
                    {tool.name}
                  </a>
                  <span> - </span>
                  <span
                    dangerouslySetInnerHTML={{ __html: sanitizeHTML(tool.description) }}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      )
    })
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://neilraman.com/tools" property="og:url" />
        <meta content={`https://neilraman.com${image}`} property="og:image" />
        <meta content={title} name="twitter:title" />
        <meta content={stripHtml(description)} name="twitter:description" />
        <meta content={`https://neilraman.com${image}`} name="twitter:image" />
      </Head>

      <p dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }} />

      {renderAll()}
    </>
  )
}

Tools.Layout = Base

export default Tools 