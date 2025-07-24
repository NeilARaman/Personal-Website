import '../public/static/css/prism.css'
import 'remixicon/fonts/remixicon.css'

import Head from 'next/head'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import CommandBar from '../components/CommandBar'

// Lazy load WebVitals for performance monitoring
const WebVitals = dynamic(() => import('../components/WebVitals'), { ssr: false })

// Error Boundary Component for production stability
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('App Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '20px', 
          textAlign: 'center',
          color: '#f2f2f2',
          background: '#08070b',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
          <h1>Something went wrong</h1>
          <p>Please refresh the page to try again.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              background: '#212024',
              color: '#f2f2f2',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              cursor: 'pointer',
              marginTop: '20px'
            }}
          >
            Refresh Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

// Enhanced router event handling with error catching
Router.events.on('routeChangeStart', () => {
  // Optional: Add loading state
})

Router.events.on('routeChangeComplete', () => {
  // Page changed successfully
})

Router.events.on('routeChangeError', (err) => {
  console.error('Route change error:', err)
})

const Noop = ({ children }) => children

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop

  // Handle client-side hydration errors
  useEffect(() => {
    const handleUnhandledRejection = (event) => {
      console.error('Unhandled promise rejection:', event.reason)
    }

    const handleError = (event) => {
      console.error('Global error:', event.error)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('unhandledrejection', handleUnhandledRejection)
      window.addEventListener('error', handleError)

      return () => {
        window.removeEventListener('unhandledrejection', handleUnhandledRejection)
        window.removeEventListener('error', handleError)
      }
    }
  }, [])

  return (
    <ErrorBoundary>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CommandBar>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <WebVitals />
      </CommandBar>
    </ErrorBoundary>
  )
}
