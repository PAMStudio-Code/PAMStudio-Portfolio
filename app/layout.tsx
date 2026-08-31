import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://pam-studio.vercel.app'),
  title: 'PAMStudio | Crafting AI-powered experiences',
  description: 'Hi! Welcome to PAMStudio. Created by a student developer leveraging AI to build smart, clean, and modern web applications.',
  applicationName: 'PAMStudio',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'PAMStudio | Crafting AI-powered experiences',
    description: 'Portfolio and modern web applications built by PAMStudio.',
    url: 'https://pam-studio.vercel.app',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PAMStudio',
    alternateName: ['PAM Studio', 'PAMStudio Portfolio'],
    url: 'https://pam-studio.vercel.app',
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
