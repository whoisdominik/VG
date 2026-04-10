'use client'

import { motion } from 'framer-motion'
import ServiceCard from '@/components/ui/ServiceCard'
import { services } from '@/lib/services'

// First 6 in a 3×2 grid, 7th spans full width as a featured card
const gridServices = services.slice(0, 6)
const featuredService = services[6]

export default function ServicesGrid() {
  return (
    <section className="bg-[var(--color-bg)] py-[var(--section-padding)] px-6 lg:px-10">
      <div className="max-w-screen-xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '300px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3"
            >
              Areas of Expertise
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '300px' }}
              transition={{ delay: 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-light leading-tight text-[var(--color-text-primary)]"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Seven disciplines.
              <br />
              <span className="italic" style={{ color: 'var(--color-accent)' }}>One advisor.</span>
            </motion.h2>
          </div>
        </div>

        {/* 3×2 main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)]">
          {gridServices.map((service, i) => (
            <div key={service.slug} className="bg-[var(--color-bg)]">
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>

        {/* Featured 7th card — full width */}
        {featuredService && (
          <div className="mt-px bg-[var(--color-border)]">
            <div className="bg-[var(--color-bg)]">
              <ServiceCard service={featuredService} index={6} featured />
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
