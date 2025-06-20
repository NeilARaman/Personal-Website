import '../public/static/css/prism.css'
import 'remixicon/fonts/remixicon.css'

import Router from 'next/router'
import dynamic from 'next/dynamic'
import * as gtag from '../lib/gtag'
import CommandBar from '../components/CommandBar'

// Lazy load WebVitals for performance monitoring
const WebVitals = dynamic(() => import('../components/WebVitals'), { ssr: false })

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

const Noop = ({ children }) => children

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop

  return (
    <CommandBar>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <WebVitals />
    </CommandBar>
  )
}
