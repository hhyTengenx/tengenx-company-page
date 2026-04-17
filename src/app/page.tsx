'use client'

import { useLocale } from '@/lib/locale-context'
import { homeTranslations } from '@/lib/i18n'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Logo from '@/components/Logo'

const products = [
  {
    id: 'tx01',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
  },
  {
    id: 'txCarbo',
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&q=80',
  },
  {
    id: 'tengenData',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
]

const news = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    href: '/news/1',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&q=80',
    href: '/news/2',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    href: '/news/3',
  },
]

export default function HomePage() {
  const { locale } = useLocale()
  const t = homeTranslations[locale]

  const getProductTitle = (id: string) => {
    switch (id) {
      case 'tx01': return t.tx01Title
      case 'txCarbo': return t.txCarboTitle
      case 'tengenData': return t.tengenDataTitle
      default: return id
    }
  }

  const getProductDesc = (id: string) => {
    switch (id) {
      case 'tx01': return t.tx01Desc
      case 'txCarbo': return t.txCarboDesc
      case 'tengenData': return t.tengenDataDesc
      default: return ''
    }
  }

  const getNewsTitle = (id: number) => {
    switch (id) {
      case 1: return t.news1Title
      case 2: return t.news2Title
      case 3: return t.news3Title
      default: return ''
    }
  }

  const getNewsDate = (id: number) => {
    switch (id) {
      case 1: return t.news1Date
      case 2: return t.news2Date
      case 3: return t.news3Date
      default: return ''
    }
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* 背景图片 */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80)',
          }}
        />
        {/* 深色遮罩 */}
        <div className="absolute inset-0 hero-overlay" />

        {/* 内容 */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-6">
            {/* Logo */}
            <div className="mb-8 animate-fade-up flex justify-center">
              <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center animate-pulse-glow p-2">
                <Logo size="lg" variant="blue" />
              </div>
            </div>

            {/* 主标题 */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-up [animation-delay:100ms]">
              {t.heroTitle}
            </h1>

            {/* 副标题 */}
            <p className="text-xl md:text-2xl text-white/80 mb-10 animate-fade-up [animation-delay:200ms]">
              {t.heroSubtitle}
            </p>

            {/* CTA 按钮 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up [animation-delay:300ms]">
              <a
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/80 transition-all animate-glow"
              >
                {t.exploreProducts}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <button
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                {t.watchVideo}
              </button>
            </div>
          </div>
        </div>

        {/* 底部渐变 */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Products Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.productsTitle}</h2>
            <p className="text-muted-foreground text-lg">{t.productsSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <a
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-card rounded-xl overflow-hidden border border-border card-glow"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={getProductTitle(product.id)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {getProductTitle(product.id)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {getProductDesc(product.id)}
                  </p>
                  <span className="inline-flex items-center mt-4 text-primary font-medium text-sm group-hover:gap-2 gap-1 transition-all">
                    {t.viewMore}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-card relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm tracking-widest mb-4 text-primary uppercase">{t.missionTitle}</p>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
              {t.missionSubtitle}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t.missionDesc}
            </p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">{t.newsTitle}</h2>
            <a href="/news" className="text-primary font-medium hover:underline flex items-center gap-1">
              {t.newsViewMore}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item) => (
              <a
                key={item.id}
                href={item.href}
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
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
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