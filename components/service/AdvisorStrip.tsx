'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { advisorStrip } from '@/lib/content'

export default function AdvisorStrip() {
  const reduced = useReducedMotion() ?? false

  return (
    <section aria-label="About the advisor">
      <div
        style={{
          background: 'var(--color-surface)',
          border: '1px solid rgba(196,30,42,0.18)',
          borderLeft: 'none',
          borderRight: 'none',
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -60px 0px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              padding: '36px 0',
              flexWrap: 'wrap',
            }}
          >
            {/* Headshot placeholder */}
            <div
              aria-hidden="true"
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#1E2A3A',
                border: '1px solid rgba(196,30,42,0.25)',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              {/* Grey silhouette placeholder */}
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="18" cy="13" r="7" fill="#3A4A60" />
                <path d="M4 34c0-7.732 6.268-14 14-14s14 6.268 14 14" fill="#3A4A60" />
              </svg>
            </div>

            {/* Name + role */}
            <div style={{ flexShrink: 0 }}>
              <p
                className="font-display font-light"
                style={{ fontSize: '1.35rem', color: 'var(--color-text-primary)', lineHeight: 1.1, marginBottom: '4px' }}
              >
                {advisorStrip.name}
              </p>
              <p
                className="font-sans uppercase"
                style={{ fontSize: '0.58rem', letterSpacing: '0.22em', color: 'var(--color-accent)' }}
              >
                {advisorStrip.role}
              </p>
            </div>

            {/* Vertical divider */}
            <div
              aria-hidden="true"
              style={{
                width: '1px',
                height: '44px',
                background: 'rgba(196,30,42,0.3)',
                flexShrink: 0,
                alignSelf: 'center',
              }}
              className="hidden sm:block"
            />

            {/* Stats */}
            <p
              className="font-sans"
              style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', letterSpacing: '0.04em' }}
            >
              {advisorStrip.stats}
            </p>

            {/* Vertical divider */}
            <div
              aria-hidden="true"
              style={{
                width: '1px',
                height: '44px',
                background: 'rgba(196,30,42,0.3)',
                flexShrink: 0,
                alignSelf: 'center',
              }}
              className="hidden md:block"
            />

            {/* Quote */}
            <p
              className="font-display font-light"
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-secondary)',
                fontStyle: 'italic',
                flex: 1,
                minWidth: '200px',
              }}
            >
              &ldquo;{advisorStrip.quote}&rdquo;
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
