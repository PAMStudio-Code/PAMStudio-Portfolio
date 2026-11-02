import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://pamstudio.vercel.app'),
  // Explicit title format prevents Google from attaching "- Vercel"
  title: 'PAMStudio • Smart AI Web Development & Interactive Experiences',
  description:
    'PAMStudio builds cutting-edge web applications, clean modern interfaces, and intelligent AI-powered software engineered with Next.js and Tailwind CSS.',
  applicationName: 'PAMStudio',
  keywords: [
    'PAMStudio',
    'PAM Studio',
    'PAMStudio Portfolio',
    'AI Web Development',
    'Next.js Developer',
    'Tailwind CSS',
  ],
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: 'PAMStudio • Smart AI Web Development & Interactive Experiences',
    description:
      'PAMStudio builds cutting-edge web applications, clean modern interfaces, and intelligent AI-powered software engineered with Next.js and Tailwind CSS.',
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
  twitter: {
    card: 'summary_large_image',
    title: 'PAMStudio • Smart AI Web Development & Interactive Experiences',
    description:
      'PAMStudio builds cutting-edge web applications, clean modern interfaces, and intelligent AI-powered software.',
    images: ['/icon.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Enhanced Schema explicitly tells Google your site name is "PAMStudio", not "Vercel"
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PAMStudio',
    alternateName: ['PAM Studio', 'PAMStudio Developer'],
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
      <body className="bg-[#0C1622] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
