'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Logo from '@/components/Logo'
import SmoothScrollSnap from '@/components/SmoothScrollSnap'

const products = [
  {
    id: 'tengenData',
    image: '/img/tengendata.jpg',
    title: 'TengenData 平台',
    desc: '26B 全工业场景多模态数据，完善高效的数据治理，自动化模型训练，云边协同。',
  },
  {
    id: 'tx01',
    image: '/img/TX01.png',
    title: 'TX01 工业具身机器人',
    desc: '全栈自研轮式具身机器人，27 个自由度，单臂额定 6kg（最大 12kg），升降高度 125-175cm，4 轮 4 驱全向移动，双电池热插拔支持 7×24 小时作业。',
  },
  {
    id: 'tx02',
    image: '/img/to_be_continued.png',
    title: 'TX02 重载机器人',
    desc: '面向重载场景的双臂具身机器人，单臂额定负载不低于 20 公斤，适配重型上下料与物料搬运（预计 2026 年发布）。',
  },
]

const news = [
  {
    id: 1,
    image: '/img/news1.png',
    href: 'https://mp.weixin.qq.com/s/Ra7u3zzpESnpCS6m3Wm5ZQ',
    title: '硬氪独家｜前商汤工业机器人团队完成数千万元天使轮融资，自研一体化控制轮式工业机器人',
    date: '2026年2月',
  },
  {
    id: 2,
    image: '/img/news2.png',
    href: 'https://mp.weixin.qq.com/s/lmVdb2cZkQ_ILVSnG0_Ekw',
    title: 'RoboChallenge 关键挑战登顶！TengenX0.1 斩获"叠毛巾"任务冠军',
    date: '2026年4月',
  },
  {
    id: 3,
    image: '/img/news3.png',
    href: 'https://mp.weixin.qq.com/s/iK4ofS06j-08lbot1mISpg',
    title: 'CVPR 2026｜提出 FLARE 框架，赋予 VLA 自主重试与环境重置能力',
    date: '2026年6月',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SmoothScrollSnap />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[100svh] md:h-screen flex items-center justify-center snap-start">
        {/* 背景视频 */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/robot_demo_video1.mp4" type="video/mp4" />
          </video>
        </div>
        {/* 深色遮罩 */}
        <div className="absolute inset-0 hero-overlay" />

        {/* 内容 */}
        <div className="relative z-10 w-full flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-6">
            {/* Logo */}
            <div className="mb-8 animate-fade-up flex justify-center">
              <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center p-2">
                <Logo size="lg" variant="blue" />
              </div>
            </div>

            {/* 主标题 */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-up [animation-delay:100ms]">
              构建工业世界模型底座
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-up [animation-delay:100ms]">
              引领工业制造创新变革
            </h1>

            {/* 副标题 */}
            {/* <p className="text-xl md:text-2xl text-white/80 mb-10 animate-fade-up [animation-delay:200ms]">
              自研世界动作模型VLWA，打造通用工业具身大脑
            </p> */}

            {/* CTA 按钮 */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up [animation-delay:300ms]">
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/80 transition-all animate-glow"
              >
                关于我们
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                探索产品
              </a>
            </div> */}
          </div>
        </div>

        {/* 底部渐变 */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" /> */}
      </section>

      {/* Products Section */}
      {/* <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">产品矩阵</h2>
            <p className="text-muted-foreground text-lg">VLWA世界动作模型驱动，理解世界、预测未来、指导动作</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <a
                key={product.id}
                // href={`/products/${product.id}`}
                className="group bg-card rounded-xl overflow-hidden border border-border card-glow"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.desc}
                  </p>
                  <span className="inline-flex items-center mt-4 text-primary font-medium text-sm group-hover:gap-2 gap-1 transition-all">
                    了解更多
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section> */}

      {/* Mission Section */}
      <section className="relative overflow-hidden min-h-[100svh] md:h-screen flex items-center justify-center snap-start">
        {/* 背景视频 */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/robot_demo_video2.mp4" type="video/mp4" />
          </video>
        </div>
        {/* 深色遮罩 */}
        <div className="absolute inset-0 hero-overlay-invert" />

        {/* 顶部渐变（衔接上一屏） */}
        <div className="absolute top-0 left-0 right-0 h-30 section-fade-top" />

        {/* 内容 */}
        <div className="relative z-10 w-full flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-6">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-up">
              让机器人变得真正有用
            </h2>
          </div>
        </div>

        {/* 底部渐变 */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" /> */}
      </section>

      {/* News Section */}
      {/* <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">新闻动态</h2>
            <a href="/news" className="text-primary font-medium hover:underline flex items-center gap-1">
              查看全部新闻
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
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section> */}

      {/* Partners Section */}
      {/* <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">合作伙伴</h2>
            <p className="text-muted-foreground text-lg">服务新能源、轨交、汽车、制造等行业 10 余家头部客户</p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/img/parters/parters.png"
              alt="合作伙伴"
              className="w-full max-w-4xl h-auto object-contain"
            />
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  )
}