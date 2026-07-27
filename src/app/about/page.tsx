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
            className="absolute inset-0 w-full h-full object-contain md:object-cover"
          >
            <source src="/video/robot_demo_video1.mp4" type="video/mp4" />
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
            构建工业世界模型底座
            <br/>
            引领工业制造创新变革
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
              走进万千工厂
            </h2>
          </ScrollSection>
        </div>
      </section>

      {/* Philosophy Section */}
      {/* <section className="min-h-screen flex items-center bg-card relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
            <ScrollSection className="order-2 lg:order-1 lg:col-span-7">
              <div className="relative aspect-square rounded-2xl overflow-hidden flex items-center justify-center">
                <img
                  src="/img/TX01.png"
                  alt="Robot philosophy"
                  className="w-full h-full object-contain p-4 rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent pointer-events-none" />
                <motion.div
                  className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </ScrollSection>

            <div className="order-1 lg:order-2 lg:col-span-5 space-y-8">
              <FadeInText delay={0} className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-light">
                2025年4月从商汤科技工业机器人事业部独立分拆成立，团队拥有10+年AI与机器人研发经验，服务10余家工业头部客户。
              </FadeInText>
              <FadeInText delay={0.2} className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-light">
                完整能力链条：机器人设计、控制、AI算法研发、软件工程——从产品POC到量产交付。
              </FadeInText>
              <FadeInText delay={0.4} className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-light">
                自研世界动作模型VLWA：理解世界、预测未来、指导动作、丝滑控制。
              </FadeInText>
            </div>
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="min-h-screen flex items-center bg-background relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollSection className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
              核心优势
            </h2>
          </ScrollSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
            <ScrollSection>
              <div className="bg-card p-10 rounded-2xl border border-border h-full card-glow">
                <div className="w-12 h-12 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">顶尖团队根基</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  原商汤科技工业机器人事业部核心团队组建，全球前 0.05% 顶尖科学家团队，自带深厚的AI大模型技术沉淀。
                </p>
              </div>
            </ScrollSection>

            <ScrollSection>
              <div className="bg-card p-10 rounded-2xl border border-border h-full card-glow">
                <div className="w-12 h-12 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">技术壁垒</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  12 年顶尖 AI 算法研发，覆盖 AI 1.0 到生成式 AI 2.0 完整周期，自研世界动作模型 VLWA，构建工业具身大脑核心壁垒。
                </p>
              </div>
            </ScrollSection>

            <ScrollSection>
              <div className="bg-card p-10 rounded-2xl border border-border h-full card-glow">
                <div className="w-12 h-12 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">商业落地闭环</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  10 年 ToB 商业化落地经验，5 年工业批量落地经验，构建"数据-模型-落地"飞轮。
                </p>
              </div>
            </ScrollSection>

            <ScrollSection>
              <div className="bg-card p-10 rounded-2xl border border-border h-full card-glow">
                <div className="w-12 h-12 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">工程化实力</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  深厚工业 know-how，多行业大规模部署交付能力，从产品 POC 到批量落地全链路闭环。
                </p>
              </div>
            </ScrollSection>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      {/* <section className="min-h-screen flex items-center bg-card relative z-10 py-32">
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
                      <span className="text-2xl font-bold text-primary">2014~2022</span>
                      <h3 className="text-xl font-bold mb-2 text-foreground mt-2">商汤 AI 技术突破</h3>
                      <p className="text-muted-foreground">商汤在 AI 机器视觉领域取得行业级技术突破，连续三年 CVPR Nvidia AI 城市挑战赛冠军</p>
                    </div>
                  </div>
                </div>
              </ScrollSection>

              <ScrollSection>
                <div className="relative flex items-center">
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2" />
                  <div className="ml-12 md:ml-auto md:w-1/2 md:pl-12">
                    <div className="bg-background p-6 rounded-xl border border-border">
                      <span className="text-2xl font-bold text-primary">2022~2025</span>
                      <h3 className="text-xl font-bold mb-2 text-foreground mt-2">工业机器人事业部</h3>
                      <p className="text-muted-foreground">商汤工业机器人事业部成立，服务宁德时代、中铁等行业头部客户，入选 2024 工信部典型应用案例</p>
                    </div>
                  </div>
                </div>
              </ScrollSection>

              <ScrollSection>
                <div className="relative flex items-center">
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2" />
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                    <div className="bg-primary/10 p-6 rounded-xl border border-primary/30">
                      <span className="text-2xl font-bold text-primary">2025.04</span>
                      <h3 className="text-xl font-bold mb-2 text-foreground mt-2">天元兴成立</h3>
                      <p className="text-muted-foreground">从商汤独立分拆成立深圳天元兴科技有限公司，完成核心团队组建</p>
                    </div>
                  </div>
                </div>
              </ScrollSection>

              <ScrollSection>
                <div className="relative flex items-center">
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 animate-pulse-glow" />
                  <div className="ml-12 md:ml-auto md:w-1/2 md:pl-12">
                    <div className="bg-background p-6 rounded-xl border border-border">
                      <span className="text-2xl font-bold text-primary">2025.07</span>
                      <h3 className="text-xl font-bold mb-2 text-foreground mt-2">TX01 试产</h3>
                      <p className="text-muted-foreground">TX01 试产，原创算法 SR-VLA 在国际权威测试集上达到 SOTA，入选 CVPR26</p>
                    </div>
                  </div>
                </div>
              </ScrollSection>
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      {/* <section className="min-h-screen flex items-center bg-background relative z-10 py-32">
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
      </section> */}

      <Footer />
    </main>
  )
}