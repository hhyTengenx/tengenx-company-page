'use client'

import { useLocale } from '@/lib/locale-context'
import { productsTranslations } from '@/lib/i18n'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const productsData = [
  {
    id: 'north',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
  },
  {
    id: 'wave',
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&q=80',
  },
  {
    id: 'craftnet',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
]

export default function ProductsPage() {
  const { locale } = useLocale()
  const t = productsTranslations[locale]

  const getProductTitle = (id: string) => {
    switch (id) {
      case 'north': return t.northTitle
      case 'wave': return t.waveTitle
      case 'craftnet': return t.craftnetTitle
      default: return id
    }
  }

  const getProductDesc = (id: string) => {
    switch (id) {
      case 'north': return t.northDesc
      case 'wave': return t.waveDesc
      case 'craftnet': return t.craftnetDesc
      default: return ''
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-foreground">{t.title}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <div
                key={product.id}
                className="bg-card rounded-xl overflow-hidden border border-border card-glow"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={getProductTitle(product.id)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {getProductTitle(product.id)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {getProductDesc(product.id)}
                  </p>
                  <a
                    href={`/products/${product.id}`}
                    className="inline-flex items-center mt-4 text-primary font-medium text-sm hover:gap-2 gap-1 transition-all"
                  >
                    {t.learnMore}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}