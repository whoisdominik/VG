import type { Metadata } from 'next'
import { services } from '@/lib/services'
import ServiceHero from '@/components/service/ServiceHero'
import ServiceBody from '@/components/service/ServiceBody'
import ServiceCTA from '@/components/service/ServiceCTA'
import AdvisorStrip from '@/components/service/AdvisorStrip'
import ServiceProcess from '@/components/service/ServiceProcess'

const service = services.find((s) => s.slug === 'restructuring-joint-ventures')!

export const metadata: Metadata = {
  title: `Vladimir Gonda | ${service.title}`,
  description: service.description,
  openGraph: {
    title: `Vladimir Gonda | ${service.title}`,
    description: service.description,
    type: 'website',
  },
}

export default function RestructuringPage() {
  return (
    <>
      <ServiceHero
        title={service.title}
        subtitle={service.subtitle}
        tagline={service.heroTagline}
      />
      <AdvisorStrip />
      <ServiceBody sections={service.sections} />
      <ServiceProcess />
      <ServiceCTA label={service.ctaLabel} href={service.ctaHref} />
    </>
  )
}
