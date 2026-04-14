'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { processSteps } from '@/lib/content'

export default function ServiceProcess() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '0px 0px -80px 0px' })
  const reduced = useReducedMotion() ?? false

  return (
    <section
      ref={sectionRef}
      aria-labelledby="service-process-heading"
      style={{
        background: 'var(--color-bg)',
        padding: '80px 0',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div style={{ marginBottom: '48px' }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans uppercase"
            style={{ fontSize: '0.58rem', letterSpacing: '0.3em', color: 'var(--color-accent)', marginBottom: '14px' }}
          >
            Engagement Model
          </motion.p>
          <motion.h2
            id="service-process-heading"
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 16 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.07 }}
            className="font-display font-light"
            style={{ fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', color: 'var(--color-text-primary)', lineHeight: 1.05 }}
          >
            The Process
          </motion.h2>
        </div>

        {/* Single-column step list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: reduced ? 0 : -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: reduced ? 0 : -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.09 }}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '28px',
                padding: '22px 0',
                borderBottom: i < processSteps.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              }}
            >
              {/* Number */}
              <span
                aria-hidden="true"
                className="font-display font-light tabular-nums"
                style={{
                  fontSize: '2rem',
                  color: 'rgba(140,30,74,0.25)',
                  lineHeight: 1,
                  minWidth: '36px',
                  flexShrink: 0,
                  letterSpacing: '-0.02em',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Title + description */}
              <div>
                <p
                  className="font-sans uppercase"
                  style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.2em',
                    color: 'var(--color-accent)',
                    marginBottom: '6px',
                  }}
                >
                  {step.title}
                </p>
                <p
                  className="font-sans leading-[1.8]"
                  style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
