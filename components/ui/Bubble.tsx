'use client'

import { motion } from 'framer-motion'

interface BubbleProps {
  label: string
  index: number
  style?: React.CSSProperties
}

export default function Bubble({ label, index, style }: BubbleProps) {
  // Alternate between two float animations for organic feel
  const floatY = index % 2 === 0 ? [-6, 0, -6] : [0, -8, 0]
  const floatDuration = 3.5 + index * 0.4

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: 0.6 + index * 0.12,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={style}
      className="absolute"
    >
      <motion.div
        animate={{ y: floatY }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatType: 'loop',
        }}
        whileHover={{ scale: 1.06 }}
        className="
          font-sans text-xs font-medium uppercase tracking-widest
          px-4 py-2 rounded-full whitespace-nowrap cursor-default
          border border-[var(--color-accent)]
          text-[var(--color-text-primary)]
          transition-shadow duration-300
          hover:shadow-[0_0_16px_rgba(201,151,58,0.35)]
        "
        style={{ background: 'rgba(201, 151, 58, 0.08)' }}
      >
        {label}
      </motion.div>
    </motion.div>
  )
}
