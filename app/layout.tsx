import type { Metadata } from 'next'
import { Cormorant_Garamond, Epilogue } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-epilogue',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vladimir Gonda | Financial Advisor & Interim CFO',
  description:
    'Senior financial advisor and interim CFO with 25+ years of European experience. Financial strategy, compliance, restructuring, and more across 4 countries.',
  openGraph: {
    title: 'Vladimir Gonda | Financial Advisor & Interim CFO',
    description:
      'Senior financial advisor and interim CFO with 25+ years of European experience.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${epilogue.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Vladimir Gonda',
              jobTitle: 'Financial Advisor & Interim CFO',
              description:
                'Senior financial advisor and interim CFO consultant with 25+ years of European experience.',
              url: 'https://vladimgonda.com',
              sameAs: ['https://www.linkedin.com/in/vladimgonda'],
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
