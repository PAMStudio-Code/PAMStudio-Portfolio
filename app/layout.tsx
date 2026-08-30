import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://pamstudio-pe7wx4igc-pam-studio.vercel.app'),
  title: 'PAMStudio | Crafting AI-powered experiences',
  description: 'Hi! Welcome to PAMStudio. Created by a student developer leveraging AI to build smart, clean, and modern web applications.',
  keywords: ['PAMStudio', 'AI Developer', 'Portfolio', 'Next.js Developer'],
  verification: { google: "MLB-YtJJJkzSU9DYavipNIPDYxByrSVJPzo5RLs3wgA"}
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'PAMStudio | Crafting AI-powered experiences',
    description: 'Portfolio and modern web applications built by PAMStudio.',
    url: 'https://pamstudio-pe7wx4igc-pam-studio.vercel.app',
    siteName: 'PAMStudio',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'PAMStudio Logo',
      },
    ],
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} bg-background`}>
      <head>
       <meta name="google-site-verification" content="MLB-YtJJJkzSU9DYavipNIPDYxByrSVJPzo5RLs3wgA" />
        <link rel="icon" href="/icon.png?v=3" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/icon.png?v=3" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png?v=3" />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
