'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ServiceCTAProps {
  label: string
  href: string
}

export default function ServiceCTA({ label, href }: ServiceCTAProps) {
  return (
    <section
      className="relative overflow-hidden py-24 px-6 lg:px-10"
      style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '300px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="font-sans uppercase mb-3"
              style={{ fontSize: '0.58rem', letterSpacing: '0.32em', color: 'var(--color-accent)', opacity: 0.8 }}
            >
              Start a conversation
            </p>
            <h2
              className="font-display font-light leading-snug"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                color: 'var(--color-text-primary)',
              }}
            >
              Ready to work together?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '300px' }}
            transition={{ delay: 0.15, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0"
          >
            <Link
              href={href}
              className="inline-block font-sans font-normal uppercase transition-all duration-300"
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.26em',
                padding: '13px 32px',
                border: '1px solid var(--color-accent)',
                color: 'var(--color-accent)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'var(--color-accent)'
                el.style.color = 'var(--color-bg)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'transparent'
                el.style.color = 'var(--color-accent)'
              }}
            >
              {label}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
