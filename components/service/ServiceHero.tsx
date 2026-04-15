'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface ServiceHeroProps {
  title: string
  subtitle: string
  tagline: string
}

export default function ServiceHero({ title, subtitle, tagline }: ServiceHeroProps) {
  return (
    <section
      className="relative min-h-[62vh] flex flex-col justify-end px-6 lg:px-10 pb-20 pt-40 overflow-hidden"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 15% 65%, rgba(150,32,48,0.04) 0%, transparent 55%)',
        }}
      />

      {/* Fine grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          opacity: 0.025,
          backgroundImage:
            'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div className="max-w-screen-xl mx-auto w-full relative z-10">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 font-sans uppercase transition-colors duration-300"
            style={{ fontSize: '0.58rem', letterSpacing: '0.28em', color: 'var(--color-text-secondary)' }}
            onMouseOver={e => (e.currentTarget.style.color = 'var(--color-accent)')}
            onMouseOut={e => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
          >
            <ArrowLeft size={11} />
            Back
          </Link>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans uppercase mb-5"
          style={{
            fontSize: '0.58rem',
            letterSpacing: '0.32em',
            color: 'var(--color-accent)',
          }}
        >
          {subtitle}
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-light leading-[1.05] tracking-tight"
          style={{
            fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
            color: 'var(--color-text-primary)',
            maxWidth: '820px',
          }}
        >
          {title}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display italic leading-relaxed mt-6"
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
            color: 'var(--color-text-secondary)',
            maxWidth: '560px',
          }}
        >
          {tagline}
        </motion.p>

        {/* Animated gold rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.52, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 origin-left"
          style={{ height: '1px', width: '80px', background: 'var(--color-accent)', opacity: 0.55 }}
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
