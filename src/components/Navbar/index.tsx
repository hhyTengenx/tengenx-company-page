'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLocale } from '@/lib/locale-context'
import { navTranslations } from '@/lib/i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import Logo from '@/components/Logo'

const navItems: { key: keyof typeof navTranslations['en']; href: string }[] = [
  { key: 'about', href: '/about' },
  { key: 'products', href: '/products' },
  { key: 'research', href: '/research' },
  { key: 'news', href: '/news' },
  { key: 'careers', href: '/careers' },
  { key: 'contact', href: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { locale } = useLocale()
  const t = navTranslations[locale]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Logo size="sm" variant={isScrolled ? 'blue' : 'white'} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              {locale === 'zh' ? '天元兴科技' : 'TengenX'}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled
                    ? 'text-muted-foreground hover:text-foreground'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {t[item.key]}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          <button
            className={`lg:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-card rounded-b-lg">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="block py-3 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t[item.key]}
              </Link>
            ))}
            <div className="py-3 border-t border-border mt-2">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}