'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function HeroRight() {
  return (
    <div className="relative flex items-center justify-start w-full h-full min-h-[60vh] lg:min-h-screen px-8 lg:px-10 xl:px-16 pt-8 pb-16 lg:pt-24">

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-sm lg:max-w-[420px]"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.55, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-6"
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

        {/* Video container */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            aspectRatio: '16/9',
            boxShadow: '0 0 0 1px rgba(201,168,76,0.12), 0 32px 80px rgba(0,0,0,0.6)',
          }}
        >
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
            style={{ background: '#0A1220' }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-400"
              style={{
                border: '1px solid rgba(201,168,76,0.4)',
                background: 'rgba(201,168,76,0.06)',
              }}
            >
              <Play size={14} style={{ color: 'rgba(201,168,76,0.7)' }} fill="currentColor" />
            </div>
            <p
              className="font-sans text-center px-8 leading-relaxed"
              style={{ fontSize: '0.65rem', color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
            >
              Introduction Video — Coming Soon
            </p>
          </div>

          {/* Vignette — 4-directional, blends into background */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: [
                'linear-gradient(to right,  #0B1220 0%, transparent 20%)',
                'linear-gradient(to left,   #0E1728 0%, transparent 20%)',
                'linear-gradient(to bottom, #0B1220 0%, transparent 24%)',
                'linear-gradient(to top,    #0B1728 0%, transparent 24%)',
              ].join(', '),
            }}
            aria-hidden="true"
          />

          {/* Inner border glow */}
          <div
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              boxShadow: 'inset 0 0 0 1px rgba(201,168,76,0.08)',
            }}
            aria-hidden="true"
          />
        </div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="mt-5 font-sans leading-relaxed"
          style={{ fontSize: '0.68rem', color: 'var(--color-text-tertiary)', letterSpacing: '0.07em' }}
        >
          Senior financial advisor &amp; interim CFO operating across EU/EEA markets.
          Fluent in five languages, available for relocation.
        </motion.p>
      </motion.div>
    </div>
  )
}
