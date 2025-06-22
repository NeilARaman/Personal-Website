/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Performance optimizations (optimizeCss disabled for Stitches SSR compatibility)
  experimental: {
    // optimizeCss: true, // Disabled for SSR stability
    scrollRestoration: true,
  },
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year
  },
  
  // Compression
  compress: true,
  
  // Production-ready build optimizations
  poweredByHeader: false,
  generateEtags: false,
  
  // Headers for security and performance (CSP handled in middleware)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ]
  },
  
  webpack: (config, { isServer, dev }) => {
    // Critical SSR fix for Stitches
    if (isServer) {
      config.externals = config.externals || []
      config.externals.push('@stitches/react')
    }

    // Fixes npm packages that depend on Node.js modules
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        dns: false,
        tls: false,
        assert: false,
        request: false,
        stream: false,
        constants: false,
        vm: false,
        canvas: false,
        jsdom: false,
      }
    }
    
    return config
  },
}

module.exports = withBundleAnalyzer(nextConfig) 