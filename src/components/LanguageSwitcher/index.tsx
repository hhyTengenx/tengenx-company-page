'use client'

import { useLocale } from '@/lib/locale-context'

const localeNames = {
  en: 'EN',
  zh: '中',
}

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()

  return (
    <div className="flex items-center gap-1">
      {(['zh', 'en'] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => setLocale(lang)}
          className={`px-2 py-1 text-sm font-medium rounded transition-all ${
            locale === lang
              ? 'text-primary bg-primary/10'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
        >
          {localeNames[lang]}
        </button>
      ))}
    </div>
  )
}