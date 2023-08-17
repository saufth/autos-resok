import TailwindIndicator from '@/components/TailwindIndicator'
import ThemeProvider from '@/components/ThemeProvider'
import Toaster from '@/components/ui/Toaster'
import { type Metadata } from 'next'
import { croparFont, interFont } from '@/lib/fonts'
import { siteConfig } from '@/config/site'
import type { LayoutProps } from '@/types'
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

export default function RootLayout ({ children }: LayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`antialiased ${interFont.className} ${croparFont.variable}`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
          <TailwindIndicator />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
