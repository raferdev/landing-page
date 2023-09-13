import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
      crawlDelay: 10,
    },
    sitemap: 'https://acme.com/sitemap.xml',
  }
}
