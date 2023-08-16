import { SiteHeader } from '@/components/layouts/SiteHeader'
import TailwindIndicator from '@/components/tailwind-indicator'
import ThemeProvider from '@/components/theme-provider'
import Toaster from '@/components/ui/toaster'
import { type Metadata } from 'next'
import { type ReactNode } from 'react'
import { croparFont, interFont } from '@/lib/fonts'
import { siteConfig } from '@/config/site'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s – ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    siteConfig.name,
    siteConfig.description
  ],
  authors: siteConfig.author,
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  applicationName: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  generator: 'Next.js 13',
  robots: 'index, follow',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: `@${siteConfig.author}`
  }
}

export interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout ({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`antialiased ${interFont.className} ${croparFont.variable}`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <SiteHeader />
          {children}
          <TailwindIndicator />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
