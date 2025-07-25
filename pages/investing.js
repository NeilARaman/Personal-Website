// import React from 'react' // Not needed with Next.js
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import investments from '../data/investments'
import { sanitizeHTML } from '../lib/sanitize'

// Lazy load heavy components
const FeaturedProject = dynamic(() => import('../components/FeaturedProject'), {
  ssr: false,
  loading: () => <div style={{ height: '120px', background: '#212024', borderRadius: '8px', marginBottom: '20px' }} />
})

const FeaturedProjects = dynamic(() => import('../components/FeaturedProjects').then(mod => mod.FeaturedProjects), {
  ssr: false
})

export async function getStaticProps() {
  const meta = {
    title: 'Investing // Neil Raman',
    description:
      "On the side, <strong>angel investing</strong> is how I engage in startups outside of Foundry and do my best to support generational companies.",
    tagline: 'Money. Money. Money.',
    image: '/static/images/projects-bw.jpg',
    primaryColor: 'purple',
    secondaryColor: 'cyan',
  }

  return { props: meta }
}

function Investing(props) {
  const { title, description, image } = props

  const renderAll = () => {
    return investments.map((investment, index) => {
      return <FeaturedProject key={index} project={investment} />
    })
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://neilraman.com/investing" property="og:url" />
        <meta content={`https://neilraman.com${image}`} property="og:image" />
        <meta content={title} name="twitter:title" />
        <meta content={stripHtml(description)} name="twitter:description" />
        <meta content={`https://neilraman.com${image}`} name="twitter:image" />
      </Head>

      <p dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }} />

      <h2>What I Invest In</h2>
      <p>
        Broadly I&apos;m a <strong>generalist</strong>, and I write <strong>small checks (around 5-10k)</strong> in
        startups that solve deep problems. I usually look at startups <strong>who are early (think pre-seed or seed)</strong>, and want
        to get to know the founders very well before I usually sign anything. I try to define a deep problem as something
        that fundamentally does something different from the market, is something I personally believe in, and see as
        something that
        their customers can&apos;t stop using.
      </p>

      <h2>What You Get from Me</h2>
      <p>
        While I&apos;m definitely very early-on in investing, I&apos;m never going to say
        phrases like &quot;how can I help&quot; or &quot;what can I do for you&quot;. I want to
        be <strong>deeply involved</strong> and help you grow in whatever way I can.
      </p>

      <h2>Who Took My Money</h2>
      <p>I&apos;ve been grateful to work with these companies as an investor.</p>
      <FeaturedProjects>{renderAll()}</FeaturedProjects>

      <h2>Let&apos;s Chat</h2>
      <p>Contact me if what you read here resonates with you.</p>
    </>
  )
}

Investing.Layout = Base

export default Investing
