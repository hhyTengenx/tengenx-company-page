'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const teamMembers = [
  {
    name: '旷章辉博士',
    role: '创始人 & CEO',
    desc: '香港大学人工智能博士，商汤科技高级总监，工业机器人事业部总经理，曾先后任职于微软亚洲研究院、华为诺亚方舟实验室，清华大学深圳研究生院校外导师',
    image: '/img/kuangzhanghui.png',
  },
]

function ScrollSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function FadeInText({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.p>
  )
}

export default function AboutPage() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 0.3, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -80])
  const heroVisibility = useTransform(scrollYProgress, (value) => {
    return value > 0.2 ? 'hidden' : 'visible'
  })
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0])

  return (
    <main ref={containerRef} className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden sticky top-0"
        style={{ opacity: heroOpacity, y: heroY, visibility: heroVisibility }}
      >
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video/VR遥操.mp4" type="video/mp4" />
          </video>
        </div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background"
        />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight text-white"
          >
            以世界级AI与机器人技术打造通用工业具身智能平台
          </motion.h1>
        </div>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm tracking-widest uppercase">向下滚动</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Mission Section */}
      <section className="min-h-screen flex items-center justify-center bg-background relative z-10 py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <ScrollSection className="text-center">
            <h2 className="text-5xl md:text-8xl font-bold mb-8 text-foreground tracking-tight">
              让机器人
            </h2>
            <h2 className="text-5xl md:text-8xl font-bold mb-8 text-foreground tracking-tight">
              变得真正有用
            </h2>
          </ScrollSection>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="min-h-screen flex items-center bg-card relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollSection className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&q=80"
                  alt="Robot philosophy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent" />
                <motion.div
                  className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </ScrollSection>

            <div className="order-1 lg:order-2 space-y-8">
              <FadeInText delay={0} className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-light">
                成立于2024年12月，团队拥有5年以上AI与机器人经验，服务10余家头部客户。
              </FadeInText>
              <FadeInText delay={0.2} className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-light">
                完整能力链条：AI算法研发、机器人控制、机械设计、软件工程——从产品POC到量产交付。
              </FadeInText>
              <FadeInText delay={0.4} className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-light">
                VLM/VLA/VFA分层架构：场景理解、任务执行、精细操控——灵活高效、实时性好。
              </FadeInText>
              <FadeInText delay={0.6}>
                <span className="text-3xl md:text-4xl font-semibold text-foreground">
                  构建量产能力，实现50%以上成本下降。
                </span>
              </FadeInText>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="min-h-screen flex items-center bg-background relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollSection className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
              核心优势
            </h2>
          </ScrollSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <ScrollSection>
              <div className="bg-card p-10 rounded-2xl border border-border h-full card-glow">
                <div className="w-12 h-12 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">VLM/VLA/VFA架构</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  视觉语言模型场景理解，视觉语言动作模型任务执行，视觉精细动作模型精准操控。
                </p>
              </div>
            </ScrollSection>

            <ScrollSection>
              <div className="bg-card p-10 rounded-2xl border border-border h-full card-glow">
                <div className="w-12 h-12 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">工业安全</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  全身力控、断电保护，可选4转4驱全向移动或两轮差速底盘。
                </p>
              </div>
            </ScrollSection>

            <ScrollSection>
              <div className="bg-card p-10 rounded-2xl border border-border h-full card-glow">
                <div className="w-12 h-12 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">VR遥操系统</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  沉浸式全身遥操，毫秒级同步，安全柔顺接触，全栈式AI工具链。
                </p>
              </div>
            </ScrollSection>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="min-h-screen flex items-center bg-card relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground tracking-tight">
              发展历程
            </h2>
          </ScrollSection>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30" />

            <div className="space-y-12">
              <ScrollSection>
                <div className="relative flex items-center">
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2" />
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                    <div className="bg-background p-6 rounded-xl border border-border">
                      <span className="text-2xl font-bold text-primary">2014</span>
                      <h3 className="text-xl font-bold mb-2 text-foreground mt-2">商汤成立</h3>
                      <p className="text-muted-foreground">创世界级竞赛多项纪录，Deep ID人脸识别技术突破</p>
                    </div>
                  </div>
                </div>
              </ScrollSection>

              <ScrollSection>
                <div className="relative flex items-center">
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2" />
                  <div className="ml-12 md:ml-auto md:w-1/2 md:pl-12">
                    <div className="bg-background p-6 rounded-xl border border-border">
                      <span className="text-2xl font-bold text-primary">2020</span>
                      <h3 className="text-xl font-bold mb-2 text-foreground mt-2">全球化扩张</h3>
                      <p className="text-muted-foreground">多国设立分支机构、联合实验室，筹建亚洲最大智算中心</p>
                    </div>
                  </div>
                </div>
              </ScrollSection>

              <ScrollSection>
                <div className="relative flex items-center">
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2" />
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                    <div className="bg-background p-6 rounded-xl border border-border">
                      <span className="text-2xl font-bold text-primary">2021</span>
                      <h3 className="text-xl font-bold mb-2 text-foreground mt-2">工业团队成立</h3>
                      <p className="text-muted-foreground">商汤港交所上市，与中铁、宁德时代、富士康建立合作</p>
                    </div>
                  </div>
                </div>
              </ScrollSection>

              <ScrollSection>
                <div className="relative flex items-center">
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 animate-pulse-glow" />
                  <div className="ml-12 md:ml-auto md:w-1/2 md:pl-12">
                    <div className="bg-primary/10 p-6 rounded-xl border border-primary/30">
                      <span className="text-2xl font-bold text-primary">2024</span>
                      <h3 className="text-xl font-bold mb-2 text-foreground mt-2">天元兴成立</h3>
                      <p className="text-muted-foreground">拆分成立深圳天元兴科技有限公司，引领具身智能发展</p>
                    </div>
                  </div>
                </div>
              </ScrollSection>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="min-h-screen flex items-center bg-background relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollSection className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-foreground tracking-tight">
              创始团队
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI与机器人领域的世界级专家，致力于构建工业具身智能的未来。
            </p>
          </ScrollSection>

          <div className="max-w-2xl mx-auto">
            {teamMembers.map((member) => (
              <ScrollSection key={member.name}>
                <div className="text-center">
                  <motion.div
                    className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary/30 relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 hover:opacity-100 transition-opacity" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-lg text-primary mb-4">
                    {member.role}
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
                    {member.desc}
                  </p>
                </div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}