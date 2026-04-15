'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '@/components/ui/Logo'

/* ─── Data ───────────────────────────────────────────────────────────────── */
interface NavLink { label: string; href: string }

const navLinks: NavLink[] = [
  { label: 'Financial Strategy',    href: '/financial-strategy' },
  { label: 'Restructuring & JV',    href: '/restructuring-joint-ventures' },
  { label: 'Compliance & Audits',   href: '/compliance-audits' },
  { label: 'Transaction Fraud',     href: '/transaction-fraud' },
  { label: 'ERP / SAD Integration', href: '/erp-sad-integration' },
  { label: 'Cybercrime Risk',       href: '/cybercrime-risk' },
  { label: 'Projects Integration',  href: '/projects-integration' },
]

/* ─── Custom SVG icons (no library dependency) ────────────────────────────── */
function HamburgerIcon() {
  return (
    <svg
      width="22"
      height="14"
      viewBox="0 0 22 14"
      fill="none"
      aria-hidden="true"
    >
      <line x1="0" y1="1"  x2="22" y2="1"  stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <line x1="0" y1="7"  x2="22" y2="7"  stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <line x1="0" y1="13" x2="22" y2="13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <line x1="1"  y1="1"  x2="17" y2="17" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <line x1="17" y1="1"  x2="1"  y2="17" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  )
}

/* ─── Desktop nav link ───────────────────────────────────────────────────── */
function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative"
      style={{
        fontFamily: 'var(--font-epilogue), system-ui, sans-serif',
        textTransform: 'uppercase',
        fontSize: '0.63rem',
        letterSpacing: '0.09em',
        fontWeight: 400,
        color: active ? '#C41E2A' : hovered ? '#C41E2A' : '#666660',
        transition: 'color 200ms ease',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        paddingBottom: '3px',
      }}
    >
      {label}

      {/* Underline: scaleX 0→1 from left on hover; static when active */}
      <span
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '1px',
          background: '#C41E2A',
          transformOrigin: 'left center',
          transform: active || hovered ? 'scaleX(1)' : 'scaleX(0)',
          transition: active ? 'none' : 'transform 200ms ease',
        }}
        aria-hidden="true"
      />
    </Link>
  )
}

/* ─── CTA button ─────────────────────────────────────────────────────────── */
function CtaButton() {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      href="/contact"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-block',
        fontFamily: 'var(--font-epilogue), system-ui, sans-serif',
        textTransform: 'uppercase',
        fontSize: '0.68rem',
        letterSpacing: '0.16em',
        fontWeight: 500,
        padding: '8px 20px',
        border: '1px solid',
        borderColor: hovered ? '#C41E2A' : 'rgba(196,30,42,0.45)',
        color: hovered ? '#F5F0EA' : '#C41E2A',
        background: hovered ? '#C41E2A' : 'transparent',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        transition: 'background 220ms ease, color 220ms ease, border-color 220ms ease',
      }}
    >
      Get in Touch
    </Link>
  )
}

/* ─── Navbar ─────────────────────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  /* Scroll listener — threshold 80 px */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close mobile menu on route change */
  useEffect(() => { setMenuOpen(false) }, [pathname])

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* ── Header ── */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: scrolled ? '56px' : '72px',
          background: scrolled ? 'rgba(245,240,234,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px) saturate(1.5)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px) saturate(1.5)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(196,30,42,0.3)'
            : '1px solid transparent',
          transition:
            'height 350ms ease, background 400ms ease, border-color 400ms ease, backdrop-filter 400ms ease',
        }}
      >
        {/*
         * Desktop layout: 3-column CSS grid
         *   [1fr → logo left] [auto → nav centred] [1fr → CTA right]
         *
         * The 1fr columns distribute remaining space equally, so the auto
         * middle column truly centres regardless of logo/CTA width differences.
         */}
        {/*
         * Three-column flex layout.
         * Left (flex:1) holds the logo — justified to the start.
         * Center (flex:none) holds the nav — it takes its natural width.
         * Right (flex:1) holds the CTA — justified to the end.
         * The two flex:1 columns absorb equal amounts of remaining space,
         * so the nav is always centred regardless of logo/button width.
         */}
        <div className="max-w-screen-xl mx-auto px-6 xl:px-10 h-full flex items-center">

          {/* Left — logo (flex:3) */}
          <div style={{ flex: 3, display: 'flex', justifyContent: 'flex-start' }}>
            <Logo style={{ fontSize: '1.875rem' }} />
          </div>

          {/* Center — nav links */}
          <nav
            className="hidden lg:flex"
            aria-label="Primary"
            style={{ flexShrink: 0, alignItems: 'center', whiteSpace: 'nowrap' }}
          >
            {navLinks.map((link, i) => (
              <div key={link.href} style={{ display: 'contents' }}>
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'inline-block',
                      width: '1px',
                      height: '14px',
                      background: 'rgba(184,192,204,0.18)',
                      margin: '0 12px',
                      flexShrink: 0,
                    }}
                  />
                )}
                <NavLink
                  href={link.href}
                  label={link.label}
                  active={pathname === link.href}
                />
              </div>
            ))}
          </nav>

          {/* Right — CTA or hamburger (flex:5, wider to offset the button's own width) */}
          <div style={{ flex: 5, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <div className="hidden lg:block">
              <CtaButton />
            </div>
            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              style={{ color: '#C41E2A', padding: '4px', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <HamburgerIcon />
            </button>
          </div>

        </div>
      </header>

      {/* ── Mobile full-screen overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 60,
              background: '#F5F0EA',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Overlay header */}
            <div
              style={{
                height: '72px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 24px',
                borderBottom: '1px solid rgba(0,0,0,0.08)',
                flexShrink: 0,
              }}
            >
              <Logo style={{ fontSize: '1.875rem' }} />
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                style={{ color: '#C41E2A', padding: '4px', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <CloseIcon />
              </button>
            </div>

            {/* Overlay nav links — vertically centred */}
            <nav
              aria-label="Mobile primary"
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '0 36px',
                gap: 0,
              }}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.05 + i * 0.055,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}
                >
                  <Link
                    href={link.href}
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontWeight: 300,
                      fontSize: 'clamp(1.8rem, 6vw, 2.6rem)',
                      color: pathname === link.href ? '#C41E2A' : '#111111',
                      textDecoration: 'none',
                      padding: '16px 0',
                      transition: 'color 200ms ease',
                      letterSpacing: '0.01em',
                    }}
                    onMouseOver={e => {
                      if (pathname !== link.href)
                        (e.currentTarget as HTMLElement).style.color = '#C41E2A'
                    }}
                    onMouseOut={e => {
                      if (pathname !== link.href)
                        (e.currentTarget as HTMLElement).style.color = '#111111'
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* "Get in Touch" at bottom of overlay */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.05 + navLinks.length * 0.055,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ marginTop: '36px' }}
              >
                <Link
                  href="/contact"
                  style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-epilogue), system-ui, sans-serif',
                    textTransform: 'uppercase',
                    fontSize: '0.7rem',
                    letterSpacing: '0.18em',
                    fontWeight: 500,
                    padding: '12px 28px',
                    border: '1px solid rgba(196,30,42,0.5)',
                    color: '#C41E2A',
                    textDecoration: 'none',
                  }}
                >
                  Get in Touch
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
