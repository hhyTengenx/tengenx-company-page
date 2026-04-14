'use client'

import Link from 'next/link'
import { useLocale } from '@/lib/locale-context'
import { footerTranslations } from '@/lib/i18n'
import Logo from '@/components/Logo'

export default function Footer() {
  const { locale } = useLocale()
  const t = footerTranslations[locale]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size="sm" variant="blue" />
              <span className="text-xl font-bold text-foreground">{t.companyFullName}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t.company}</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.about}</Link></li>
              <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.careers}</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.contactLink}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t.resources}</h4>
            <ul className="space-y-2">
              <li><Link href="/research" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.research}</Link></li>
              <li><Link href="/news" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.news}</Link></li>
              <li><Link href="/developer" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.developer}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t.contact}</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">{t.salesEmail}: sales@tengenx.com</li>
              <li className="text-sm text-muted-foreground">{t.prEmail}: pr@tengenx.com</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://weibo.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.736-5.441 3.977-.391 7.413 1.406 7.671 4.02.26 2.609-2.757 5.047-6.735 5.441zM9.054 14.5c-2.057.209-3.606 1.535-3.449 2.949.154 1.414 1.86 2.377 3.917 2.168 2.057-.209 3.607-1.535 3.449-2.949-.153-1.414-1.861-2.377-3.917-2.168zM19.109 5.484c-1.067-.797-2.553-1.207-4.091-1.207-.26 0-.52.016-.777.047l-.009.001c-.527.06-.847.535-.715 1.063.133.527.613.848 1.14.727 1.021-.131 2.088.033 2.893.58.805.55 1.261 1.367 1.261 2.267 0 .527.427.957.953.957.527 0 .957-.43.957-.957 0-1.397-.655-2.757-1.769-3.677zM21.078 3.609c-1.532-1.13-3.678-1.717-5.864-1.717-.353 0-.707.022-1.057.065l-.009.001c-.627.07-1.005.636-.847 1.264.159.628.727.996 1.355.876 1.332-.163 2.745.025 3.817.825 1.072.8 1.67 1.987 1.67 3.267 0 .627.51 1.135 1.137 1.135.627 0 1.137-.508 1.137-1.135 0-1.8-.875-3.542-2.376-4.677z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t.copyright}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.privacy}</Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}