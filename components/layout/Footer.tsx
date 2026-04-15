import Link from 'next/link'
import { Mail } from 'lucide-react'
import { services } from '@/lib/services'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>

      {/* Gold rule — top accent */}
      <div style={{ height: '1px', background: 'var(--color-accent)', opacity: 0.35 }} aria-hidden="true" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand column — 4 cols */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link
              href="/"
              aria-label="Vladimir Gonda — Home"
              className="font-display font-semibold tracking-[0.12em] w-fit hover:opacity-80 transition-opacity duration-300"
              style={{ fontSize: '2rem', color: 'var(--color-accent)' }}
            >
              VG
            </Link>

            <div>
              <p
                className="font-display font-light leading-snug"
                style={{ fontSize: '1.2rem', color: 'var(--color-text-primary)' }}
              >
                Vladimir Gonda
              </p>
              <p
                className="font-sans uppercase mt-1"
                style={{ fontSize: '0.58rem', letterSpacing: '0.24em', color: 'var(--color-text-tertiary)' }}
              >
                Financial Advisor &amp; Interim CFO
              </p>
            </div>

            <p
              className="font-sans leading-relaxed"
              style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', maxWidth: '280px' }}
            >
              25+ years of senior-level financial expertise across European markets.
              Available for interim engagements and strategic advisory.
            </p>

            <a
              href="mailto:contact@vladimgonda.com"
              className="flex items-center gap-2 w-fit transition-colors duration-300 hover:text-[var(--color-accent)]"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <Mail size={12} />
              <span className="font-sans" style={{ fontSize: '0.72rem', letterSpacing: '0.04em' }}>
                contact@vladimgonda.com
              </span>
            </a>
          </div>

          {/* Spacer — 1 col */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Services column — 4 cols */}
          <div className="lg:col-span-4">
            <p
              className="font-sans uppercase mb-6"
              style={{ fontSize: '0.56rem', letterSpacing: '0.3em', color: 'var(--color-text-tertiary)' }}
            >
              Services
            </p>
            <ul className="flex flex-col gap-0">
              {services.map((service) => (
                <li key={service.slug} style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                  <Link
                    href={service.href}
                    className="block py-2.5 font-sans transition-colors duration-300 hover:text-[var(--color-text-primary)]"
                    style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Agency column — 3 cols */}
          <div className="lg:col-span-3">
            <p
              className="font-sans uppercase mb-6"
              style={{ fontSize: '0.56rem', letterSpacing: '0.3em', color: 'var(--color-text-tertiary)' }}
            >
              Agency
            </p>
            <p
              className="font-sans leading-relaxed"
              style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}
            >
              Built by{' '}
              <a
                href="https://novix.sk"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[var(--color-accent)]"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Novix Digital
              </a>
              .
              <br />
              Premium digital experiences for exceptional professionals.
            </p>

            <div className="mt-8">
              <p className="font-sans" style={{ fontSize: '0.68rem', color: 'var(--color-text-tertiary)' }}>
                EU / EEA Markets
              </p>
              <p className="font-sans mt-1" style={{ fontSize: '0.68rem', color: 'var(--color-text-tertiary)' }}>
                Operating across 4 countries
              </p>
            </div>
          </div>

        </div>

        {/* Second gold rule above copyright */}
        <div
          className="mt-14"
          style={{ height: '1px', background: 'var(--color-accent)', opacity: 0.15 }}
          aria-hidden="true"
        />

        {/* Copyright bar */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="font-sans" style={{ fontSize: '0.65rem', letterSpacing: '0.04em', color: 'var(--color-text-tertiary)' }}>
            &copy; {year} Vladimir Gonda. All rights reserved.
          </p>
          <p className="font-sans" style={{ fontSize: '0.65rem', letterSpacing: '0.04em', color: 'var(--color-text-tertiary)' }}>
            Website by{' '}
            <a
              href="https://novix.sk"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-[var(--color-accent)]"
            >
              Novix Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
