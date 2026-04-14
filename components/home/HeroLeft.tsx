'use client'

import { motion } from 'framer-motion'
import { MapPin, Building2, Languages, ClipboardCheck, GraduationCap, Clock } from 'lucide-react'

const credentials = [
  { icon: MapPin,         text: 'Relocation Flexible' },
  { icon: Building2,      text: 'Temporary CFO · 4 Countries' },
  { icon: Languages,      text: '5 Languages' },
  { icon: ClipboardCheck, text: '400+ European Audits' },
  { icon: GraduationCap,  text: 'MBA · BSc.' },
  { icon: Clock,          text: '25+ Years Experience' },
]

/* Word-mask reveal — each word slides up from below its own clip */
function WordReveal({
  children,
  delay = 0,
  className = '',
  style = {},
}: {
  children: string
  delay?: number
  className?: string
  style?: React.CSSProperties
}) {
  const words = children.split(' ')
  return (
    <span className={className} style={{ ...style, display: 'block' }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '108%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              delay: delay + i * 0.07,
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && (
            <span style={{ display: 'inline-block', width: '0.28em' }} />
          )}
        </span>
      ))}
    </span>
  )
}

export default function HeroLeft() {
  return (
    <div className="relative flex items-center justify-center lg:justify-end w-full h-auto lg:h-full lg:min-h-screen px-6 lg:px-10 xl:px-16 pt-[72px] pb-3 lg:pt-24 lg:pb-16">
      <div className="w-full max-w-[340px] lg:max-w-[390px]">

        {/* Name — cinematic word-mask reveal */}
        <h1
          className="font-display font-light leading-[1.0] tracking-wide"
          style={{ fontSize: 'clamp(2.8rem, 6.5vw, 6rem)', letterSpacing: '0.01em' }}
          aria-label="Vladimir Gonda"
        >
          <WordReveal
            delay={0.05}
            style={{ color: 'var(--color-text-primary)' }}
          >
            Vladimir
          </WordReveal>
          <WordReveal
            delay={0.15}
            style={{ color: 'rgba(140,30,74,0.75)' }}
          >
            Gonda
          </WordReveal>
        </h1>

        {/* Title */}
        <div style={{ overflow: 'hidden' }}>
          <motion.p
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ delay: 0.42, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-normal uppercase mt-6"
            style={{
              fontSize: '0.62rem',
              letterSpacing: '0.3em',
              color: 'var(--color-text-secondary)',
            }}
          >
            Financial Advisor &amp; Interim CFO
          </motion.p>
        </div>

        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 mb-8 origin-left"
          style={{ height: '1px', width: '44px', background: 'rgba(140,30,74,0.5)' }}
          aria-hidden="true"
        />

        {/* Credential list */}
        <div className="flex flex-col">
          {credentials.map(({ icon: Icon, text }, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.68 + i * 0.07,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {i > 0 && (
                <div
                  style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }}
                  aria-hidden="true"
                />
              )}
              <div className="flex items-center gap-4 py-3.5">
                <Icon
                  size={10}
                  className="shrink-0"
                  style={{ color: 'rgba(140,30,74,0.55)' }}
                />
                <span
                  className="font-sans font-normal"
                  style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {text}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
