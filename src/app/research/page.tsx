'use client'

import { useLocale } from '@/lib/locale-context'
import { pagesTranslations } from '@/lib/i18n'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const papers = [
  { key: 'paper1', year: '2026' },
  { key: 'paper2', year: '2025' },
  { key: 'paper3', year: '2025' },
]

export default function ResearchPage() {
  const { locale } = useLocale()
  const t = pagesTranslations[locale]

  const getPaperTitle = (key: string) => {
    switch (key) {
      case 'paper1': return t.paper1
      case 'paper2': return t.paper2
      case 'paper3': return t.paper3
      default: return key
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-foreground">{t.researchTitle}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.researchSubtitle}
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {papers.map((paper) => (
              <a
                key={paper.key}
                href={`/research/${paper.key}`}
                className="block bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-all card-glow"
              >
                <p className="text-sm text-primary font-semibold mb-1">{paper.year}</p>
                <h3 className="text-lg font-semibold text-foreground">{getPaperTitle(paper.key)}</h3>
                <span className="inline-flex items-center mt-3 text-primary font-medium text-sm">
                  {locale === 'zh' ? '阅读论文' : 'Read Paper'}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}