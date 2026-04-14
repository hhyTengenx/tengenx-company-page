'use client'

import { useLocale } from '@/lib/locale-context'
import { pagesTranslations, homeTranslations } from '@/lib/i18n'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const newsData = [
  { id: 1, image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80' },
  { id: 2, image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&q=80' },
  { id: 3, image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80' },
]

export default function NewsPage() {
  const { locale } = useLocale()
  const t = pagesTranslations[locale]
  const ht = homeTranslations[locale]

  const getNewsTitle = (id: number) => {
    switch (id) {
      case 1: return ht.news1Title
      case 2: return ht.news2Title
      case 3: return ht.news3Title
      default: return ''
    }
  }

  const getNewsDate = (id: number) => {
    switch (id) {
      case 1: return ht.news1Date
      case 2: return ht.news2Date
      case 3: return ht.news3Date
      default: return ''
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-foreground">{t.newsTitle}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.newsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((item) => (
              <a
                key={item.id}
                href={`/news/${item.id}`}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={getNewsTitle(item.id)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{getNewsDate(item.id)}</p>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {getNewsTitle(item.id)}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}