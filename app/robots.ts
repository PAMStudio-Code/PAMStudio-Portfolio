import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://pamstudio-pe7wx4igc-pam-studio.vercel.app/sitemap.xml',
  }
}
