'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const jobs = [
  { key: 'job1', href: '/careers/senior-robotics-engineer', title: '高级机器人工程师' },
  { key: 'job2', href: '/careers/machine-learning-researcher', title: 'AI算法研究员' },
  { key: 'job3', href: '/careers/hardware-engineer', title: '硬件工程师' },
  { key: 'job4', href: '/careers/product-manager', title: '产品经理' },
]

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-foreground">加入我们</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              与我们一起构建工业具身智能的未来
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {jobs.map((job) => (
              <a
                key={job.key}
                href={job.href}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-all card-glow"
              >
                <h3 className="text-xl font-bold mb-2 text-foreground">{job.title}</h3>
                <p className="text-muted-foreground">中国深圳</p>
                <span className="inline-flex items-center mt-4 text-primary font-medium text-sm">
                  查看详情
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