'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import AboutVladimir from '@/components/home/AboutVladimir'
import HowItWorks from '@/components/home/HowItWorks'

/* ─── Count-up hook ──────────────────────────────────────────────────────── */
function useCountUp(target: number, duration = 1600, triggered = false) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!triggered) return
    setValue(0)
    const steps = Math.round(duration / 16)
    let frame = 0
    const id = setInterval(() => {
      frame++
      const progress = 1 - Math.pow(1 - frame / steps, 3)
      setValue(Math.round(progress * target))
      if (frame >= steps) { setValue(target); clearInterval(id) }
    }, 16)
    return () => clearInterval(id)
  }, [triggered, target, duration])
  return value
}

/* ─── Data ───────────────────────────────────────────────────────────────── */
const stats = [
  { number: 25,  suffix: '+', label: 'Years Experience' },
  { number: 400, suffix: '+', label: 'European Audits'  },
  { number: 4,   suffix: '',  label: 'Countries'        },
  { number: 5,   suffix: '',  label: 'Languages'        },
  { number: 30,  suffix: '+', label: 'Companies Advised'},
]

const serviceCards = [
  {
    title: 'Financial Strategy',
    description: 'Long-term planning, KPI frameworks and capital allocation for sustainable growth.',
    href: '/financial-strategy',
    index: 1,
  },
  {
    title: 'Restructuring & Joint Ventures',
    description: 'Debt restructuring, turnaround management and JV structuring across Europe.',
    href: '/restructuring-joint-ventures',
    index: 2,
  },
  {
    title: 'Compliance & Audits',
    description: '400+ completed audits. Full EU regulatory compliance and gap analysis.',
    href: '/compliance-audits',
    index: 3,
  },
  {
    title: 'Transaction Fraud',
    description: 'Forensic financial analysis and fraud detection for legal and corporate teams.',
    href: '/transaction-fraud',
    index: 4,
  },
  {
    title: 'ERP / SAD Integration',
    description: 'Finance-aligned ERP implementation oversight and customs process integration.',
    href: '/erp-sad-integration',
    index: 5,
  },
  {
    title: 'Cybercrime Risk',
    description: 'CFO-level financial risk assessment and response planning for cyber incidents.',
    href: '/cybercrime-risk',
    index: 6,
  },
]

const whyPoints = [
  {
    label: 'Language Precision',
    text: 'Multilingual across 5 European languages — no lost nuance in cross-border deals.',
  },
  {
    label: 'Flexible Engagement',
    text: 'Interim CFO model — senior expertise without the permanent hire commitment.',
  },
  {
    label: 'Pattern Recognition',
    text: '400+ audits across EU jurisdictions — the experience to spot problems others miss.',
  },
  {
    label: 'On-Site Presence',
    text: 'Relocates to client sites across Europe — present where it matters most.',
  },
]

/* ─── Stat item ──────────────────────────────────────────────────────────── */
function StatItem({
  number, suffix, label, triggered, index,
}: {
  number: number; suffix: string; label: string; triggered: boolean; index: number
}) {
  const count = useCountUp(number, 1400 + index * 80, triggered)
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '200px' }}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-2.5 px-8"
    >
      <span
        className="font-display font-light leading-none tabular-nums"
        style={{ fontSize: 'clamp(2.6rem, 4.5vw, 3.8rem)', color: 'var(--color-accent)' }}
      >
        {count}{suffix}
      </span>
      <span
        className="font-sans uppercase text-center"
        style={{
          fontSize: '0.56rem',
          letterSpacing: '0.26em',
          color: 'var(--color-text-tertiary)',
        }}
      >
        {label}
      </span>
    </motion.div>
  )
}

/* ─── Service card ───────────────────────────────────────────────────────── */
function ServiceCard({
  title, description, href, index: cardNumber, delay,
}: {
  title: string; description: string; href: string; index: number; delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '200px' }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Link
        href={href}
        className="group relative flex flex-col h-full overflow-hidden transition-colors duration-400"
        style={{ background: 'var(--color-surface)', padding: '28px' }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.background = 'var(--color-surface-2)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.background = 'var(--color-surface)'
        }}
      >
        {/* Animated gold top border */}
        <div
          className="absolute top-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-500"
          style={{ background: 'var(--color-accent)' }}
          aria-hidden="true"
        />

        {/* Number */}
        <span
          className="font-sans block mb-5"
          style={{
            fontSize: '0.58rem',
            letterSpacing: '0.28em',
            color: 'rgba(201,168,76,0.4)',
          }}
        >
          {String(cardNumber).padStart(2, '0')}
        </span>

        <h3
          className="font-display font-light mb-3 leading-snug transition-colors duration-300 group-hover:text-[var(--color-accent)]"
          style={{ fontSize: '1.25rem', color: 'var(--color-text-primary)' }}
        >
          {title}
        </h3>

        <p
          className="font-sans flex-1 leading-relaxed"
          style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', letterSpacing: '0.01em' }}
        >
          {description}
        </p>

        <div
          className="mt-6 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ color: 'var(--color-accent)' }}
        >
          <span className="font-sans" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Explore
          </span>
          <ArrowUpRight size={11} />
        </div>
      </Link>
    </motion.div>
  )
}

/* ─── Main export ────────────────────────────────────────────────────────── */
export default function HomeSections() {
  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { once: true, margin: '0px 0px -80px 0px' })

  return (
    <>
      {/* ── Section 1: Stats Strip ─────────────────────────────────────── */}
      <section style={{ background: '#060B14', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div
          ref={statsRef}
          className="max-w-screen-xl mx-auto px-6 lg:px-10 py-20 flex flex-wrap justify-center items-center gap-0"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center">
              {i > 0 && (
                <div
                  className="hidden sm:block self-stretch mx-0"
                  style={{ width: '1px', minHeight: '64px', background: 'rgba(255,255,255,0.06)' }}
                  aria-hidden="true"
                />
              )}
              <StatItem {...s} index={i} triggered={statsInView} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 2: Services Grid ───────────────────────────────────── */}
      <section
        className="py-[var(--section-padding)] px-6 lg:px-10"
        style={{ background: 'var(--color-bg)' }}
      >
        <div className="max-w-screen-xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '200px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-5 mb-14"
          >
            <div
              className="shrink-0"
              style={{ width: '28px', height: '1px', background: 'var(--color-accent)', opacity: 0.7 }}
              aria-hidden="true"
            />
            <div>
              <p
                className="font-sans uppercase mb-1.5"
                style={{ fontSize: '0.58rem', letterSpacing: '0.3em', color: 'var(--color-accent)' }}
              >
                Areas of Expertise
              </p>
              <h2
                className="font-display font-light leading-tight"
                style={{ fontSize: 'clamp(1.7rem, 3vw, 2.6rem)', color: 'var(--color-text-primary)' }}
              >
                Six disciplines.{' '}
                <span className="italic" style={{ color: 'rgba(201,168,76,0.8)' }}>One advisor.</span>
              </h2>
            </div>
          </motion.div>

          {/* Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ background: 'var(--color-border)' }}
          >
            {serviceCards.map((card, i) => (
              <div key={card.href} style={{ background: 'var(--color-bg)' }}>
                <ServiceCard {...card} delay={i * 0.06} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES SECTION — add here when content is ready */}

      {/* ── Section 3: About Vladimir ──────────────────────────────────── */}
      <AboutVladimir />

      {/* ── Section 4: How It Works ────────────────────────────────────── */}
      <HowItWorks />

      {/* ── Section 5: Why Vladimir ────────────────────────────────────── */}
      <section
        className="py-[var(--section-padding)] px-6 lg:px-10"
        style={{ background: 'var(--color-surface)', borderTop: '1px solid rgba(255,255,255,0.04)' }}
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">

            {/* Left — heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '200px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                className="font-sans uppercase mb-4"
                style={{ fontSize: '0.58rem', letterSpacing: '0.3em', color: 'var(--color-accent)' }}
              >
                Why Choose Vladimir
              </p>
              <h2
                className="font-display font-light leading-tight"
                style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: 'var(--color-text-primary)' }}
              >
                Senior expertise.{' '}
                <br />
                <span className="italic" style={{ color: 'var(--color-accent)' }}>No compromise.</span>
              </h2>

              <p
                className="font-sans leading-relaxed mt-6"
                style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', maxWidth: '360px' }}
              >
                Decades of hands-on experience across European markets, combined with
                a flexible engagement model that puts you first.
              </p>
            </motion.div>

            {/* Right — credential points */}
            <div className="flex flex-col">
              {whyPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '200px' }}
                  transition={{ delay: i * 0.09, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-5 py-6"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div
                    className="shrink-0 mt-1"
                    style={{
                      width: '2px',
                      minHeight: '1.2rem',
                      background: 'rgba(201,168,76,0.45)',
                      borderRadius: '1px',
                    }}
                    aria-hidden="true"
                  />
                  <div>
                    <p
                      className="font-sans uppercase mb-1.5"
                      style={{ fontSize: '0.58rem', letterSpacing: '0.22em', color: 'var(--color-accent)', opacity: 0.7 }}
                    >
                      {point.label}
                    </p>
                    <p
                      className="font-sans leading-relaxed"
                      style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}
                    >
                      {point.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 6: Contact CTA ─────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-[var(--section-padding)] px-6 lg:px-10"
        style={{ background: '#060B14' }}
      >
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 65%)',
          }}
        />

        <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center gap-7 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '200px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans uppercase"
            style={{ fontSize: '0.58rem', letterSpacing: '0.32em', color: 'var(--color-accent)', opacity: 0.8 }}
          >
            Start a Conversation
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '200px' }}
            transition={{ delay: 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light leading-[1.1]"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
              color: 'var(--color-text-primary)',
              maxWidth: '760px',
            }}
          >
            Ready to strengthen your{' '}
            <span className="italic" style={{ color: 'var(--color-accent)' }}>
              financial position
            </span>
            ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '200px' }}
            transition={{ delay: 0.18, duration: 0.7 }}
            className="font-sans"
            style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', letterSpacing: '0.05em' }}
          >
            Let&apos;s discuss your situation in confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '200px' }}
            transition={{ delay: 0.26, duration: 0.6 }}
            className="mt-3"
          >
            <Link
              href="mailto:contact@vladimgonda.com"
              className="inline-block font-sans font-normal uppercase transition-all duration-300"
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.26em',
                padding: '14px 36px',
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
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
