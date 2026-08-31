import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://pamstudio.vercel.app'),
  title: 'PAMStudio | Crafting AI-powered experiences',
  description: 'Hi! Welcome to PAMStudio. Created by a student developer leveraging AI to build smart, clean, and modern web applications.',
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
      <body className="flex min-h-screen flex-col justify-between bg-[#0B0F17] text-white antialiased">
        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="w-full border-t border-slate-800 bg-[#0B0F17] py-8 text-slate-400">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
            <p className="text-sm">
              © {new Date().getFullYear()} <span className="font-medium text-white">PAMStudio</span>. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              {/* GitHub Link */}
              <Link
                href="https://github.com/PAMStudio-Code"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
              >
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                GitHub
              </Link>

              {/* LinkedIn Link */}
              <Link
                href="https://www.linkedin.com/in/pushpam-kumar-98b2a9423"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#0A66C2]"
              >
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                </svg>
                LinkedIn
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
