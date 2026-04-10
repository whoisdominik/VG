import type { Metadata } from 'next'
import HeroLeft from '@/components/home/HeroLeft'
import HeroRight from '@/components/home/HeroRight'
import HomeSections from '@/components/home/HomeSections'

export const metadata: Metadata = {
  title: 'Vladimir Gonda | Financial Advisor & Interim CFO',
  description:
    'Senior financial advisor and interim CFO consultant with 25+ years of European experience across financial strategy, compliance, restructuring, and more.',
  openGraph: {
    title: 'Vladimir Gonda | Financial Advisor & Interim CFO',
    description:
      'Senior financial advisor and interim CFO consultant with 25+ years of European experience.',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Full-viewport split hero — seamless gradient blend left→right */}
      <section
        className="relative grid grid-cols-1 lg:grid-cols-2 min-h-screen"
        style={{
          background:
            'linear-gradient(to right, #0B1220 0%, #0B1220 40%, #0D1525 60%, #0E1728 100%)',
        }}
      >
        {/* Faint central depth glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(255,255,255,0.018) 0%, transparent 70%)',
          }}
        />
        <HeroLeft />
        <HeroRight />
      </section>

      <HomeSections />
    </>
  )
}
