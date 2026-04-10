'use client'

import { useState } from 'react'
import Link from 'next/link'

interface LogoProps {
  /** Optional style overrides — use fontSize to scale the mark */
  style?: React.CSSProperties
  className?: string
}

/**
 * VG typographic mark.
 * Cormorant Garamond Bold — "V" warm white, "G" gold.
 * On hover: gold glow bleeds from G across to V, staggered 80 ms.
 */
export default function Logo({ style, className = '' }: LogoProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href="/"
      aria-label="Vladimir Gonda — Home"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={className}
      style={{
        display: 'inline-block',
        lineHeight: 1,
        textDecoration: 'none',
        userSelect: 'none',
        ...style,
      }}
    >
      {/*
       * The two letters share fontFamily / fontWeight / fontSize / letterSpacing
       * but each carries its own color and text-shadow.
       *
       * Transition strategy:
       *   – "G" transitions immediately (0 ms delay) → it lights up first
       *   – "V" transitions with 80 ms delay → glow appears to bleed left
       *   Both use 400 ms ease for a slow, cinematic feel.
       */}
      <span
        style={{
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          fontWeight: 700,
          fontSize: 'inherit',
          letterSpacing: '-0.06em',
          color: '#F0EDE6',
          textShadow: hovered
            ? '0 0 22px rgba(201,168,76,0.5)'
            : '0 0 0px rgba(201,168,76,0)',
          transition: 'text-shadow 400ms ease',
          transitionDelay: hovered ? '80ms' : '0ms',
        }}
      >
        V
      </span>
      <span
        style={{
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          fontWeight: 700,
          fontSize: 'inherit',
          letterSpacing: '-0.06em',
          color: '#C9A84C',
          textShadow: hovered
            ? '0 0 32px rgba(201,168,76,0.85)'
            : '0 0 0px rgba(201,168,76,0)',
          transition: 'text-shadow 400ms ease',
          transitionDelay: '0ms',
        }}
      >
        G
      </span>
    </Link>
  )
}
