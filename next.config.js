/** @type {import('next').NextConfig} */
const crypto = require('crypto')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Performance optimizations (optimizeCss disabled for Stitches SSR compatibility)
  experimental: {
    // optimizeCss: true, // Temporarily disabled for SSR stability
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
  
  // Optimize bundle size
  experimental: {
    // optimizeCss: true, // Disabled for SSR stability
    scrollRestoration: true,
  },
  
  // Headers for security and performance
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
            key: 'X-XSS-Protection',
            value: '1; mode=block'
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
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  },
  
  webpack: (config, { isServer, dev }) => {
    // Production optimizations
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            framework: {
              chunks: 'all',
              name: 'framework',
              test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
              priority: 40,
              enforce: true,
            },
            lib: {
              test(module) {
                return (
                  module.size() > 160000 &&
                  /node_modules[/\\]/.test(module.identifier())
                )
              },
              name(module) {
                const hash = crypto.createHash('sha1')
                hash.update(module.identifier())
                return hash.digest('hex').substring(0, 8)
              },
              priority: 30,
              minChunks: 1,
              reuseExistingChunk: true,
            },
          },
        },
      }
    }

    // Critical SSR fix for Stitches
    if (isServer) {
      config.externals = config.externals || []
      config.externals.push({
        '@stitches/react': '@stitches/react'
      })
    }

    // Fixes npm packages that depend on Node.js modules
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        dns: false,
        tls: false,
        assert: false,
        // fixes proxy-agent dependencies
        request: false,
        stream: false,
        constants: false,
        vm: false,
        // fixes jsdom dependencies
        canvas: false,
        jsdom: false,
      }
    }
    
    return config
  },
}

module.exports = withBundleAnalyzer(nextConfig) 