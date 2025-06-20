// import React from 'react' // Not needed with Next.js
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../stitches.config'
import { GA_TRACKING_ID } from '../lib/gtag'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    try {
      const initialProps = await Document.getInitialProps(ctx)
      
      // Extract CSS for SSR - Critical for preventing constructor errors
      const css = getCssText()
      
      return { 
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            <style
              id="stitches"
              dangerouslySetInnerHTML={{ __html: css }}
              suppressHydrationWarning
            />
          </>
        ),
      }
    } catch (error) {
      // Fallback for SSR issues
      const initialProps = await Document.getInitialProps(ctx)
      console.warn('SSR CSS extraction warning:', error.message)
      
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            <style
              id="stitches"
              dangerouslySetInnerHTML={{ __html: '' }}
              suppressHydrationWarning
            />
          </>
        ),
      }
    }
  }

  render() {
    const lang = this.props.__NEXT_DATA__.props?.pageProps?.post?.lang || 'en-US'

    return (
      <Html lang={lang}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta content="Neil Raman" name="author" />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Neil Raman" />
          <meta property="og:locale" content="en_US" />
          <meta content="summary_large_image" name="twitter:card" />
          <meta content="@neilraman21" name="twitter:site" />
          <meta content="@neilraman21" name="twitter:creator" />
          <meta name="theme-color" content="#08070b" />
          <meta name="format-detection" content="telephone=no" />
          
          {/* Security Headers */}
          <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
          <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
          
          {/* DNS Prefetch for external domains */}
          <link rel="dns-prefetch" href="//www.googletagmanager.com" />
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="dns-prefetch" href="//fonts.gstatic.com" />
          
          {/* Preconnect to critical domains */}
          <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
          
          {/* Preload critical fonts - Fixed paths */}
          <link
            rel="preload"
            href="/static/font/Biotif-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/static/font/NeuzeitGrotesk-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/static/font/FiraCode-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />

          {/* Favicon with proper formats */}
          <link
            rel="icon"
            href="/favicon.svg"
            sizes="any"
            type="image/svg+xml"
          />
          <link rel="icon" href="/favicon.ico" sizes="32x32" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

          {/* Google Analytics with optimized loading */}
          {GA_TRACKING_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_title: document.title,
                  page_location: window.location.href,
                  send_page_view: false
                });
              `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
