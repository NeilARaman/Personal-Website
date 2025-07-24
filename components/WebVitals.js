import { useEffect } from 'react'

export default function WebVitals() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Dynamically import web-vitals to avoid SSR issues
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      function logWebVitals({ name, delta, id }) {
        // Just log web vitals to console for debugging
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.log(`Web Vital: ${name}`, { delta, id })
        }
      }

      // Measure Core Web Vitals for performance monitoring
      getCLS(logWebVitals)
      getFID(logWebVitals)
      getFCP(logWebVitals)
      getLCP(logWebVitals)
      getTTFB(logWebVitals)
    }).catch(() => {
      // Silently fail if web-vitals can't be loaded
    })
  }, [])

  return null
} 