'use client'

import { motion } from 'framer-motion'
import type { ServiceSection } from '@/lib/services'

interface ServiceBodyProps {
  sections: ServiceSection[]
}

export default function ServiceBody({ sections }: ServiceBodyProps) {
  return (
    <section
      className="py-[var(--section-padding)] px-6 lg:px-10"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-0">

          {/* Sticky sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28">
              <div
                className="mb-4"
                style={{ width: '20px', height: '1px', background: 'var(--color-accent)', opacity: 0.6 }}
                aria-hidden="true"
              />
              <p
                className="font-sans uppercase"
                style={{
                  fontSize: '0.56rem',
                  letterSpacing: '0.35em',
                  color: 'var(--color-text-tertiary)',
                }}
              >
                Overview
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-9 flex flex-col gap-0">
            {sections.map((section, i) => (
              <motion.div
                key={section.heading}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '300px' }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.75,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="py-12"
                style={{ borderTop: '1px solid var(--color-border)' }}
              >
                <div className="flex items-start gap-7">
                  {/* Section number */}
                  <span
                    className="font-sans hidden sm:block shrink-0 mt-1 w-6 text-right"
                    style={{
                      fontSize: '0.58rem',
                      letterSpacing: '0.2em',
                      color: 'rgba(140,30,74,0.4)',
                    }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="flex-1">
                    <h2
                      className="font-display font-light leading-snug mb-5"
                      style={{
                        fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      {section.heading}
                    </h2>
                    <p
                      className="font-sans leading-[1.9]"
                      style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}
                    >
                      {section.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
