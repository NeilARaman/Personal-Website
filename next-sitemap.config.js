/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://neilraman.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: [
    '/api/*',
    '/404',
    '/500',
    '/uses',
    '/podcasts',
    '/reminder',
    '/talks',
    '/working-remotely',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/uses',
          '/podcasts',
          '/reminder',
          '/talks',
          '/working-remotely',
        ],
      },
    ],
    additionalSitemaps: [
      'https://neilraman.com/sitemap.xml',
    ],
  },
}
 