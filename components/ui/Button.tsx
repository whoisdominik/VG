import Link from 'next/link'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  external?: boolean
  className?: string
}

export default function Button({
  href,
  onClick,
  variant = 'outline',
  size = 'md',
  children,
  external = false,
  className = '',
}: ButtonProps) {
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-xs',
    lg: 'px-8 py-4 text-sm',
  }

  const variants = {
    primary:
      'bg-[var(--color-accent)] text-[var(--color-bg)] hover:bg-[var(--color-accent-light)] border border-[var(--color-accent)]',
    outline:
      'bg-transparent text-[var(--color-accent)] border border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]',
  }

  const base = `inline-block font-sans font-medium uppercase tracking-widest transition-all duration-300 ${sizes[size]} ${variants[variant]} ${className}`

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
          {children}
        </a>
      )
    }
    return <Link href={href} className={base}>{children}</Link>
  }

  return (
    <button onClick={onClick} className={base} type="button">
      {children}
    </button>
  )
}
