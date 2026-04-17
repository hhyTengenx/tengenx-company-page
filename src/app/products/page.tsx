'use client'

import { useLocale } from '@/lib/locale-context'
import { productsTranslations } from '@/lib/i18n'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ProductsPage() {
  const { locale } = useLocale()
  const t = productsTranslations[locale]

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
          <div className="mb-20 bg-card rounded-2xl border border-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                <img
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
                  alt="TX01 Robot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold mb-2 text-foreground">{t.tx01Title}</h2>
                <p className="text-sm text-primary mb-4">{t.tx01Positioning}</p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t.tx01Desc}
                </p>

                {/* 核心能力 */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{t.tx01CoreCapabilities}</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[t.tx01Cap1, t.tx01Cap2, t.tx01Cap3, t.tx01Cap4, t.tx01Cap5].map((cap, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 硬件平台 */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{t.tx01SpecsTitle}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                      {t.tx01ArmSystem}
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                      {t.tx01WaistSystem}
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7V3z" />
                      </svg>
                      {t.tx01ChassisSystem}
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                      {t.tx01Payload}
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                      </svg>
                      {t.tx01Battery}
                    </li>
                  </ul>
                </div>

                {/* 安全保护 */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{t.tx01SafetyTitle}</h3>
                  <div className="flex gap-4">
                    <div className="bg-background rounded-lg px-4 py-3 border border-border">
                      <span className="text-muted-foreground">{t.tx01Safety1}</span>
                    </div>
                    <div className="bg-background rounded-lg px-4 py-3 border border-border">
                      <span className="text-muted-foreground">{t.tx01Safety2}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TX-CARBO */}
          <div className="mb-20 bg-card rounded-2xl border border-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-2 text-foreground">{t.txCarboTitle}</h2>
                <p className="text-sm text-primary mb-4">{t.txCarboPositioning}</p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t.txCarboDesc}
                </p>

                {/* 核心能力 */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{t.txCarboCoreCapabilities}</h3>
                  <ul className="grid grid-cols-2 gap-3">
                    {[t.txCarboCap1, t.txCarboCap2, t.txCarboCap3, t.txCarboCap4].map((cap, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 技术规格 */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{t.txCarboSpecsTitle}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>{t.txCarboDrive}</li>
                    <li>{t.txCarboPayload}</li>
                    <li>{t.txCarboEfficiency}</li>
                    <li>{t.txCarboRadius}</li>
                    <li>{t.txCarboBoxSize}</li>
                  </ul>
                </div>
              </div>
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&q=80"
                  alt="TX-CARBO Robot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* TengenData 平台 */}
          <div className="mb-20 bg-card rounded-2xl border border-border p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">{t.tengenDataTitle}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {t.tengenDataDesc}
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{t.tengenDataTasks}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background rounded-lg p-4 border border-border">
                      <div className="w-10 h-10 mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">{t.tengenDataTask1}</p>
                    </div>
                    <div className="bg-background rounded-lg p-4 border border-border">
                      <div className="w-10 h-10 mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">{t.tengenDataTask2}</p>
                    </div>
                    <div className="bg-background rounded-lg p-4 border border-border">
                      <div className="w-10 h-10 mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">{t.tengenDataTask3}</p>
                    </div>
                    <div className="bg-background rounded-lg p-4 border border-border">
                      <div className="w-10 h-10 mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">{t.tengenDataTask4}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                  alt="TengenData Platform"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* 算法框架 */}
          <div className="mb-20 bg-card rounded-2xl border border-border p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">{t.algorithmTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{t.vlmTitle}</h3>
                <p className="text-muted-foreground">{t.vlmDesc}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7V3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{t.vlaTitle}</h3>
                <p className="text-muted-foreground">{t.vlaDesc}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{t.vfaTitle}</h3>
                <p className="text-muted-foreground">{t.vfaDesc}</p>
              </div>
            </div>
          </div>

          {/* 应用场景 */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">{t.applicationsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-xl font-bold mb-2 text-foreground">{t.app1Title}</h3>
                <p className="text-muted-foreground">{t.app1Desc}</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-xl font-bold mb-2 text-foreground">{t.app2Title}</h3>
                <p className="text-muted-foreground">{t.app2Desc}</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-xl font-bold mb-2 text-foreground">{t.app3Title}</h3>
                <p className="text-muted-foreground">{t.app3Desc}</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-xl font-bold mb-2 text-foreground">{t.app4Title}</h3>
                <p className="text-muted-foreground">{t.app4Desc}</p>
              </div>
            </div>
          </div>

          {/* 客户价值 */}
          <div className="mb-20 bg-card rounded-2xl border border-border p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">{t.customerValueTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{t.value1Title}</h3>
                <p className="text-sm text-muted-foreground">{t.value1Desc}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{t.value2Title}</h3>
                <p className="text-sm text-muted-foreground">{t.value2Desc}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{t.value3Title}</h3>
                <p className="text-sm text-muted-foreground">{t.value3Desc}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{t.value4Title}</h3>
                <p className="text-sm text-muted-foreground">{t.value4Desc}</p>
              </div>
            </div>
          </div>

          {/* 产业趋势 */}
          <div className="mb-16 bg-primary/5 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">{t.trendsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">01</span>
                </div>
                <p className="text-muted-foreground">{t.trend1}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">02</span>
                </div>
                <p className="text-muted-foreground">{t.trend2}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">03</span>
                </div>
                <p className="text-muted-foreground">{t.trend3}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">04</span>
                </div>
                <p className="text-muted-foreground">{t.trend4}</p>
              </div>
            </div>
          </div>

          {/* 客户 */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">{t.customersTitle}</h2>
            <p className="text-lg text-muted-foreground">{t.customerList}</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}