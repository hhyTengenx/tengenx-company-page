'use client'

import { useLocale } from '@/lib/locale-context'
import { pagesTranslations } from '@/lib/i18n'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const jobs = [
  { key: 'job1', href: '/careers/senior-robotics-engineer' },
  { key: 'job2', href: '/careers/machine-learning-researcher' },
  { key: 'job3', href: '/careers/hardware-engineer' },
  { key: 'job4', href: '/careers/product-manager' },
]

export default function CareersPage() {
  const { locale } = useLocale()
  const t = pagesTranslations[locale]

  const getJobTitle = (key: string) => {
    switch (key) {
      case 'job1': return t.job1
      case 'job2': return t.job2
      case 'job3': return t.job3
      case 'job4': return t.job4
      default: return key
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-foreground">{t.careersTitle}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.careersSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {jobs.map((job) => (
              <a
                key={job.key}
                href={job.href}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-all card-glow"
              >
                <h3 className="text-xl font-bold mb-2 text-foreground">{getJobTitle(job.key)}</h3>
                <p className="text-muted-foreground">{t.location}</p>
                <span className="inline-flex items-center mt-4 text-primary font-medium text-sm">
                  {locale === 'zh' ? '查看详情' : 'View Details'}
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