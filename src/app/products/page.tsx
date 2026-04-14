'use client'

import { useLocale } from '@/lib/locale-context'
import { productsTranslations } from '@/lib/i18n'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const productsData = [
  {
    id: 'tx01',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
  },
  {
    id: 'tengenBrain',
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&q=80',
  },
  {
    id: 'tengenBuddy',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
]

export default function ProductsPage() {
  const { locale } = useLocale()
  const t = productsTranslations[locale]

  const getProductTitle = (id: string) => {
    switch (id) {
      case 'tx01': return t.tx01Title
      case 'tengenData': return t.tengenDataTitle
      case 'tengenBrain': return t.tengenBrainTitle
      case 'tengenBuddy': return t.tengenBuddyTitle
      default: return id
    }
  }

  const getProductDesc = (id: string) => {
    switch (id) {
      case 'tx01': return t.tx01Desc
      case 'tengenData': return t.tengenDataDesc
      case 'tengenBrain': return t.tengenBrainDesc
      case 'tengenBuddy': return t.tengenBuddyDesc
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

          {/* TX01 详细介绍 */}
          <div className="mb-16 bg-card rounded-2xl border border-border p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
                  alt="TX01 Robot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">{t.tx01Title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t.tx01Desc}
                </p>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">{t.tx01SpecsTitle}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t.tx01Spec1}
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t.tx01Spec2}
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t.tx01Spec3}
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t.tx01Spec4}
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t.tx01Spec5}
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t.tx01Spec6}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 应用场景 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">{t.applications}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
                <p className="text-muted-foreground">{t.app1}</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <p className="text-muted-foreground">{t.app2}</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-muted-foreground">{t.app3}</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-muted-foreground">{t.app4}</p>
              </div>
            </div>
          </div>

          {/* 其他产品 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productsData.slice(1).map((product) => (
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
                </div>
              </div>
            ))}
          </div>

          {/* 客户 */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">{t.customers}</h2>
            <p className="text-muted-foreground">{t.customerList}</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}