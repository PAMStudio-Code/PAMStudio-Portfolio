import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://pamstudio.vercel.app'),
  title: 'PAMStudio | Crafting AI-powered experiences',
  description: 'Hi! Welcome to PAMStudio. Hi! a 10th-grade student and a developer based in India blending AI with modern web frameworks to build clean, high-performance applications.',
  applicationName: 'PAMStudio',
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: 'PAMStudio | Crafting AI-powered experiences',
    description: 'Portfolio and modern web applications built by PAMStudio.',
    url: 'https://pamstudio.vercel.app',
    siteName: 'PAMStudio',
    images: [
      {
        url: '/icon.png',
        width: 1080,
        height: 1080,
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
    url: 'https://pamstudio.vercel.app',
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-[#0B0F17] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
