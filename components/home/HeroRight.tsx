'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function HeroRight() {
  return (
    /*
     * Mobile: flex-1 so this panel fills whatever h-screen space HeroLeft
     *         didn't use; min-h-0 prevents flex overflow.
     * Desktop: full column height, centred, generous padding.
     */
    <div className="relative flex-1 lg:flex-none flex items-stretch lg:items-center justify-start w-full min-h-0 lg:min-h-screen px-6 lg:px-10 xl:px-14 pb-6 lg:pt-24 lg:pb-16">

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex flex-col lg:max-w-[580px]"
      >
        {/* Label — desktop only, hidden on mobile to save height */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.55, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex items-center gap-3 mb-6"
        >
          <div
            className="shrink-0"
            style={{ width: '24px', height: '1px', background: 'var(--color-accent)' }}
            aria-hidden="true"
          />
          <p
            className="font-sans font-normal uppercase"
            style={{
              fontSize: '0.58rem',
              letterSpacing: '0.32em',
              color: 'var(--color-accent)',
            }}
          >
            Meet Vladimir
          </p>
        </motion.div>

        {/*
         * Video container:
         *   Mobile  — flex-1 + height: 100% fills remaining panel space
         *   Desktop — 16/9 aspect ratio, max-width 580 px
         */}
        <div
          className="relative w-full overflow-hidden flex-1 lg:flex-none"
          style={{
            /* desktop: fixed aspect ratio; mobile: height driven by flex */
            aspectRatio: undefined,
            boxShadow: '0 0 0 1px rgba(196,30,42,0.15), 0 8px 48px rgba(0,0,0,0.1)',
          }}
        >
          {/* aspect-ratio shim — desktop only */}
          <div className="hidden lg:block" style={{ aspectRatio: '16/9', width: '100%' }} />

          {/* Actual video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/video/vladimir-intro.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Vladimir Gonda introduction video"
          />

          {/* Placeholder shown while video is absent */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-4"
            style={{ background: '#E3DDD3' }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                border: '1px solid rgba(196,30,42,0.4)',
                background: 'rgba(196,30,42,0.06)',
              }}
            >
              <Play size={14} style={{ color: 'rgba(196,30,42,0.7)' }} fill="currentColor" />
            </div>
            <p
              className="font-sans text-center px-8 leading-relaxed"
              style={{ fontSize: '0.65rem', color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
            >
              Introduction Video — Coming Soon
            </p>
          </div>

          {/* Vignette — blends into updated bg */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: [
                'linear-gradient(to right,  #F5F0EA 0%, transparent 22%)',
                'linear-gradient(to left,   #E8E3DB 0%, transparent 22%)',
                'linear-gradient(to bottom, #F5F0EA 0%, transparent 26%)',
                'linear-gradient(to top,    #EDE8DF 0%, transparent 26%)',
              ].join(', '),
            }}
            aria-hidden="true"
          />

          {/* Inner border glow */}
          <div
            className="absolute inset-0 pointer-events-none z-20"
            style={{ boxShadow: 'inset 0 0 0 1px rgba(196,30,42,0.08)' }}
            aria-hidden="true"
          />
        </div>

        {/* Caption — desktop only */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="hidden lg:block mt-5 font-sans leading-relaxed"
          style={{ fontSize: '0.68rem', color: 'var(--color-text-tertiary)', letterSpacing: '0.07em' }}
        >
          Senior financial advisor &amp; interim CFO operating across EU/EEA markets.
          Fluent in five languages, available for relocation.
        </motion.p>
      </motion.div>
    </div>
  )
}
