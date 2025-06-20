/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
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

module.exports = nextConfig 