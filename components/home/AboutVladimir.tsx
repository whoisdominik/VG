'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { aboutContent } from '@/lib/content'

export default function AboutVladimir() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '0px 0px -120px 0px' })
  const reduced = useReducedMotion() ?? false

  const easing = [0.16, 1, 0.3, 1] as [number, number, number, number]
  const fromLeft = {
    hidden:  { opacity: 0, x: reduced ? 0 : -48 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: easing } },
  }
  const fromRight = {
    hidden:  { opacity: 0, x: reduced ? 0 : 48 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: easing, delay: 0.1 } },
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby="about-heading"
      style={{
        background: 'var(--color-bg)',
        padding: 'var(--section-padding) 0',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* ── Left column — text ──────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fromLeft}
          >
            {/* Eyebrow */}
            <p
              className="font-sans uppercase mb-5"
              style={{ fontSize: '0.58rem', letterSpacing: '0.3em', color: 'var(--color-accent)' }}
            >
              Background
            </p>

            {/* Heading */}
            <h2
              id="about-heading"
              className="font-display font-light leading-[1.05]"
              style={{ fontSize: 'clamp(2.8rem, 5vw, 4.4rem)', color: 'var(--color-text-primary)' }}
            >
              About{' '}
              <span style={{ color: 'var(--color-accent)' }}>Vladimir</span>
            </h2>

            {/* Gold rule */}
            <div
              aria-hidden="true"
              style={{
                width: '60px', height: '1px',
                background: 'var(--color-accent)', opacity: 0.55,
                margin: '28px 0 32px',
              }}
            />

            {/* Body paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {aboutContent.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-sans leading-[1.9]"
                  style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Credential chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '36px' }}>
              {aboutContent.credentials.map((cred) => (
                <span
                  key={cred}
                  className="font-sans"
                  style={{
                    display: 'inline-block',
                    fontSize: '0.58rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent)',
                    border: '1px solid rgba(150,32,48,0.35)',
                    padding: '6px 14px',
                    background: 'rgba(150,32,48,0.04)',
                  }}
                >
                  {cred}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── Right column — stat card ────────────────────────────────── */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fromRight}
          >
            <div
              style={{
                position: 'relative',
                background: '#162840',
                border: '1px solid rgba(150,32,48,0.2)',
                padding: '52px 44px',
                overflow: 'hidden',
              }}
            >
              {/* VG watermark — large faint monogram */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  bottom: '-60px',
                  right: '-16px',
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontWeight: 700,
                  fontSize: '280px',
                  lineHeight: 1,
                  color: 'rgba(150,32,48,0.06)',
                  userSelect: 'none',
                  pointerEvents: 'none',
                  letterSpacing: '-0.06em',
                }}
              >
                VG
              </div>

              {/* Stat rows */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                {aboutContent.stats.map((stat, i) => (
                  <div key={stat.label}>
                    {i > 0 && (
                      <div
                        aria-hidden="true"
                        style={{ height: '1px', background: 'rgba(184,192,204,0.1)' }}
                      />
                    )}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '22px',
                        padding: '28px 0',
                      }}
                    >
                      {/* Number */}
                      <span
                        className="font-display font-light tabular-nums"
                        style={{
                          fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                          color: 'var(--color-accent)',
                          lineHeight: 1,
                          minWidth: '72px',
                          flexShrink: 0,
                        }}
                      >
                        {stat.number}
                      </span>

                      {/* Label */}
                      <span
                        className="font-sans uppercase"
                        style={{
                          fontSize: '0.6rem',
                          letterSpacing: '0.2em',
                          color: 'var(--color-text-secondary)',
                          lineHeight: 1.4,
                        }}
                      >
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
