import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function Sitemap () : MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.url}`,
      lastModified: new Date()
    }
  ]
}
