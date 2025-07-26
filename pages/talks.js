import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { sanitizeHTML } from '../lib/sanitize'

// Create a proper client-side LayoutGroup component
const LayoutGroup = dynamic(() => 
  import('framer-motion').then(mod => {
    const LayoutGroupComponent = ({ children }) => {
      const { LayoutGroup } = mod
      return React.createElement(LayoutGroup, null, children)
    }
    LayoutGroupComponent.displayName = 'LayoutGroup'
    return LayoutGroupComponent
  }), 
  { ssr: false }
)
import { parseISO, format } from 'date-fns'
import Base from '../layouts/Base'
import { Box } from '../components/Box'
import FeaturedTalk from '../components/FeaturedTalk'
import stripHtml from '../lib/strip-html'
import items from '../data/talks'

export async function getStaticProps() {
  const meta = {
    title: 'Talks // Neil Raman',
    tagline: 'Confs. Meetups. Events.',
    image: '/static/images/talks-bw.jpg',
    primaryColor: 'purple',
    secondaryColor: 'cyan',
  }

  return { props: meta }
}

function Talks(props) {
  const renderFeatured = () => {
    const featured = ['Epic Web Conf', 'Nordic.JS', 'SFHTML5']

    return items
      .map(item => {
        return item.talks.filter(talk => featured.includes(talk.title))
      })
      .filter(item => {
        if (item.length > 0) {
          return item
        }
      })
      .map((item, index) => {
        return <FeaturedTalk key={index} talk={item[0]} />
      })
  }

  const renderAll = () => {
    return items.map((item, index) => {
      return (
        <div key={index}>
          <h3>{item.year}</h3>
          <p>{item.summary}</p>
          {item.talks.map((talk, tIndex) => {
            return <TalkItem key={tIndex} talk={talk} />
          })}
        </div>
      )
    })
  }

  const getTotalTalks = () => {
    let total = 0

    for (let i = 0; i < items.length; i++) {
      total += items[i].talks.length
    }

    return total
  }

  const { title, image } = props
  const description = `I went my first conference in 2010 and felt in love with <strong>sharing knowledge</strong> publicly. Since then, I traveled to <strong>11 countries</strong> and gave more than <strong>${getTotalTalks()} talks</strong>. Want me to speak at your event? Hit me up!`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://neilraman.com/talks" property="og:url" />
        <meta content={`https://neilraman.com${image}`} property="og:image" />
        <meta content={title} name="twitter:title" />
        <meta content={stripHtml(description)} name="twitter:description" />
        <meta content={`https://neilraman.com${image}`} name="twitter:image" />
      </Head>

      <LayoutGroup>
        <p dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }} />

        <h2>Featured Talks</h2>
        <Box css={{ margin: '10px 0 0 -20px' }}>{renderFeatured()}</Box>

        <h2>All Talks</h2>
        {renderAll()}
              </LayoutGroup>
    </>
  )
}

function TalkItem(props) {
  const { talk } = props

  return (
    <div>
      <h3>
        <a href={talk.url} target="_blank">
          {talk.title}
        </a>
      </h3>
      <ul>
        <li>
          <em>When:</em> {format(parseISO(talk.date), 'LLLL, d')}
        </li>
        <li>
          <em>Where:</em> {talk.where}
        </li>
        {talk.attendees && (
          <li>
            <em>Attendees:</em> {talk.attendees}
          </li>
        )}
        {talk.presentations &&
          talk.presentations.map((presentation, pIndex) => {
            return (
              <li key={pIndex}>
                <em>Presentation:</em>{' '}
                <a href={presentation.url} target="_blank">
                  {presentation.title}
                </a>{' '}
                {presentation.video && (
                  <a href={presentation.video} target="_blank">
                    (Video)
                  </a>
                )}
              </li>
            )
          })}
      </ul>
    </div>
  )
}

Talks.Layout = Base

export default Talks
