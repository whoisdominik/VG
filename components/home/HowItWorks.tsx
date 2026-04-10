'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { processSteps } from '@/lib/content'

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '0px 0px -100px 0px' })
  const reduced = useReducedMotion() ?? false

  return (
    <section
      ref={sectionRef}
      aria-labelledby="process-heading"
      style={{
        background: '#0F1A2E',
        padding: 'var(--section-padding) 0',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        overflow: 'hidden',
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">

        {/* ── Heading block ── */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans uppercase"
            style={{ fontSize: '0.58rem', letterSpacing: '0.3em', color: 'var(--color-accent)', marginBottom: '20px' }}
          >
            Engagement Model
          </motion.p>
          <motion.h2
            id="process-heading"
            initial={{ opacity: 0, y: reduced ? 0 : 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 24 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="font-display font-light"
            style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              color: 'var(--color-text-primary)',
              lineHeight: 1.05,
              marginBottom: '20px',
            }}
          >
            How We Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="font-sans"
            style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', maxWidth: '480px', margin: '0 auto' }}
          >
            A structured process built around your situation.
          </motion.p>
        </div>

        {/* ── Steps ── */}
        {/* Desktop: horizontal row; Mobile: vertical stack */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '0',
            position: 'relative',
          }}
          className="hidden lg:grid"
        >
          {/* Connecting line behind steps */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '44px',
              left: 'calc(10% + 20px)',
              right: 'calc(10% + 20px)',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3) 15%, rgba(201,168,76,0.3) 85%, transparent)',
            }}
          />

          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: reduced ? 0 : 32 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 32 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 + i * 0.12 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 20px',
                position: 'relative',
              }}
            >
              {/* Large background numeral */}
              <div
                aria-hidden="true"
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontWeight: 700,
                  fontSize: '88px',
                  lineHeight: 1,
                  color: 'rgba(201,168,76,0.15)',
                  userSelect: 'none',
                  marginBottom: '-24px',
                  letterSpacing: '-0.04em',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Gold dot on the connector line */}
              <div
                aria-hidden="true"
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--color-accent)',
                  border: '1px solid rgba(201,168,76,0.5)',
                  flexShrink: 0,
                  marginBottom: '28px',
                  position: 'relative',
                  zIndex: 1,
                }}
              />

              {/* Step title */}
              <p
                className="font-sans uppercase"
                style={{
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  color: 'var(--color-accent)',
                  marginBottom: '12px',
                }}
              >
                {step.title}
              </p>

              {/* Step description */}
              <p
                className="font-sans leading-[1.8]"
                style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical stack */}
        <div className="lg:hidden" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: reduced ? 0 : -24 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: reduced ? 0 : -24 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.12 + i * 0.1 }}
              style={{
                display: 'flex',
                gap: '24px',
                alignItems: 'flex-start',
                padding: '28px 0',
                borderBottom: i < processSteps.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              }}
            >
              {/* Number */}
              <div
                aria-hidden="true"
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontWeight: 700,
                  fontSize: '56px',
                  lineHeight: 1,
                  color: 'rgba(201,168,76,0.2)',
                  userSelect: 'none',
                  flexShrink: 0,
                  minWidth: '48px',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              {/* Text */}
              <div style={{ paddingTop: '8px' }}>
                <p
                  className="font-sans uppercase"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-accent)', marginBottom: '8px' }}
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
