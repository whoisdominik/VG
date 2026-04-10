'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function CtaSection() {
  return (
    <section
      id="contact"
      className="relative py-[var(--section-padding)] px-6 lg:px-10 overflow-hidden"
      style={{ background: 'var(--color-surface)' }}
    >
      {/* Decorative background line */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,151,58,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '300px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-accent)] mb-6"
          >
            Ready to talk?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '300px' }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.2rem,4.5vw,4rem)] font-light text-[var(--color-text-primary)] leading-tight mb-6"
          >
            Let&apos;s discuss your
            <br />
            <span className="italic text-[var(--color-accent)]">financial challenges</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '300px' }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-lg mx-auto"
          >
            Whether you need interim CFO leadership, a compliance review, or
            strategic financial guidance — Vladimir brings the experience to
            make it count.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '300px' }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button href="mailto:contact@vladimgonda.com" size="lg" variant="outline">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
