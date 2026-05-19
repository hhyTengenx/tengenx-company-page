'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const papers = [
  { key: 'paper1', year: '2026', title: 'VLM/VLA/VFA分层架构设计' },
  { key: 'paper2', year: '2025', title: 'VR遥操系统技术实现' },
  { key: 'paper3', year: '2025', title: '工业场景视觉数据适配方法' },
]

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-foreground">技术研发</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              VLM/VLA/VFA算法框架开发
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
                <h3 className="text-lg font-semibold text-foreground">{paper.title}</h3>
                <span className="inline-flex items-center mt-3 text-primary font-medium text-sm">
                  阅读论文
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