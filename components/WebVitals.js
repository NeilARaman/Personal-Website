import { useEffect } from 'react'

export default function WebVitals() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Dynamically import web-vitals to avoid SSR issues
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      function sendToGoogleAnalytics({ name, delta, id }) {
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', name, {
            event_category: 'Web Vitals',
            event_label: id,
            value: Math.round(name === 'CLS' ? delta * 1000 : delta),
            non_interaction: true,
          })
        }
      }

      // Measure and report Core Web Vitals
      getCLS(sendToGoogleAnalytics)
      getFID(sendToGoogleAnalytics)
      getFCP(sendToGoogleAnalytics)
      getLCP(sendToGoogleAnalytics)
      getTTFB(sendToGoogleAnalytics)
    }).catch(() => {
      // Silently fail if web-vitals can't be loaded
    })
  }, [])

  return null
} 