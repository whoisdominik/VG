'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Service } from '@/lib/services'

interface ServiceCardProps {
  service: Service
  index: number
  featured?: boolean
}

export default function ServiceCard({ service, index, featured = false }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '300px' }}
      transition={{ delay: index * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        href={service.href}
        className={[
          'group relative flex h-full overflow-hidden',
          'bg-[var(--color-surface)] transition-colors duration-400',
          'hover:bg-[#141E2E]',
          featured ? 'flex-row items-center gap-12 px-10 py-10' : 'flex-col px-7 py-8',
        ].join(' ')}
      >
        {/* Animated gold top border */}
        <div
          className="absolute top-0 left-0 h-[1.5px] w-0 bg-[var(--color-accent)] group-hover:w-full transition-all duration-500 ease-out"
          aria-hidden="true"
        />

        {featured ? (
          /* Featured (wide) layout — horizontal */
          <>
            <div className="flex-1 min-w-0">
              <span className="block font-sans text-[10px] text-[var(--color-accent)] tracking-[0.25em] uppercase opacity-50 mb-3">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-3xl font-light text-[var(--color-text-primary)] leading-snug group-hover:text-[var(--color-accent)] transition-colors duration-300">
                {service.title}
              </h3>
            </div>
            <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1 min-w-0 max-w-md">
              {service.description}
            </p>
            <ArrowUpRight
              size={18}
              className="shrink-0 text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </>
        ) : (
          /* Standard layout — vertical */
          <>
            <span className="font-sans text-[10px] text-[var(--color-accent)] tracking-[0.25em] uppercase opacity-50 mb-5 block">
              {String(index + 1).padStart(2, '0')}
            </span>

            <h3 className="font-display text-2xl font-light text-[var(--color-text-primary)] leading-snug mb-4 group-hover:text-[var(--color-accent)] transition-colors duration-300">
              {service.title}
            </h3>

            <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1">
              {service.description}
            </p>

            <div className="mt-7 flex items-center gap-1.5 text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em]">Explore</span>
              <ArrowUpRight size={12} />
            </div>
          </>
        )}
      </Link>
    </motion.div>
  )
}
