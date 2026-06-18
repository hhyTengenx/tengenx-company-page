'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-foreground">产品矩阵</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              工业具身智能解决方案
            </p>
          </div>

          {/* TX01 */}
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
                <h2 className="text-3xl font-bold mb-2 text-foreground">TX01 工业具身机器人</h2>
                <p className="text-sm text-primary mb-4">工业场景柔性作业</p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  面向工业场景的轮式底盘人形双臂机器人，具备一体化控制、工业级安全稳定、AI驱动智能。
                </p>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">核心能力</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['工业级安全稳定', '超大操作空间（升降0-2.2m）', '柔性操作能力', 'AI驱动智能', '完善软件工具链'].map((cap, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">硬件平台</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                      仿人形双臂系统：27个自由度（2腰部+2头部关节），单臂额定6kg、最大12kg
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                      升降腰部系统：整机高度125-175cm（行程50cm），作业至2.2米
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7V3z" />
                      </svg>
                      移动底盘系统：4轮4驱全向移动，激光+视觉融合导航，定位精度10cm
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                      载货平台：额定30kg，最大100kg
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                      </svg>
                      双电池热插拔系统：支持7×24小时作业，满电单次作业6-8小时
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">安全保护系统</h3>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-background rounded-lg px-4 py-3 border border-border">
                      <span className="text-muted-foreground">全身力控</span>
                    </div>
                    <div className="bg-background rounded-lg px-4 py-3 border border-border">
                      <span className="text-muted-foreground">断电保护</span>
                    </div>
                    <div className="bg-background rounded-lg px-4 py-3 border border-border">
                      <span className="text-muted-foreground">抗侧推力 &gt;400N</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TX02 - 即将发布 */}
          <div className="mb-20 bg-card rounded-2xl border border-dashed border-primary/40 overflow-hidden relative">
            <span className="absolute top-6 right-6 z-10 px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
              2026 即将发布
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-2 text-foreground">TX02 重载机器人</h2>
                <p className="text-sm text-primary mb-4">面向重载工业场景</p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  面向重载场景的双臂具身机器人，单臂额定负载不低于20公斤，承接重型上下料与物料搬运任务，适用于物流仓储、汽车制造等高强度工况。
                </p>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">核心能力</h3>
                  <ul className="grid grid-cols-2 gap-3">
                    {['重型上下料', '重载物料搬运', '多机协同', '高负载柔性作业'].map((cap, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">核心规格</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>单臂额定负载：不低于20公斤</li>
                    <li>本体形态：双臂具身机器人</li>
                    <li>目标场景：物流仓储、汽车制造、重型上下料</li>
                    <li>发布规划：2026年</li>
                  </ul>
                </div>
              </div>
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&q=80"
                  alt="TX02 Robot"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </div>

          {/* TengenData */}
          <div className="mb-20 bg-card rounded-2xl border border-border p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">TengenData 平台</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  低代码自训练平台，自动化模型训练，云边协同，大模型驱动感知闭环。
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">4大类视觉感知任务</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background rounded-lg p-4 border border-border">
                      <div className="w-10 h-10 mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">图像分类</p>
                    </div>
                    <div className="bg-background rounded-lg p-4 border border-border">
                      <div className="w-10 h-10 mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">目标检测</p>
                    </div>
                    <div className="bg-background rounded-lg p-4 border border-border">
                      <div className="w-10 h-10 mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">语义分割</p>
                    </div>
                    <div className="bg-background rounded-lg p-4 border border-border">
                      <div className="w-10 h-10 mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">异常检测</p>
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

          {/* Algorithm Framework */}
          <div className="mb-20 bg-card rounded-2xl border border-border p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">具身智能算法框架</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">VLM - 视觉语言模型</h3>
                <p className="text-muted-foreground">场景理解和任务分解</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7V3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">VLA - 视觉语言动作模型</h3>
                <p className="text-muted-foreground">子任务执行</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">VFA - 视觉精细动作模型</h3>
                <p className="text-muted-foreground">需要力反馈的精细操作执行</p>
              </div>
            </div>
          </div>

          {/* Applications */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">应用场景</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-xl font-bold mb-2 text-foreground">柔性搬运</h3>
                <p className="text-muted-foreground">自研VLM和VLA，超大操作范围，可换末端执行器，强大负载能力</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-xl font-bold mb-2 text-foreground">精密贴胶</h3>
                <p className="text-muted-foreground">视觉大模型精确识别，VLA+VFA力控精准贴合，轨迹动态规划</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-xl font-bold mb-2 text-foreground">自主装卸货</h3>
                <p className="text-muted-foreground">智能具身导航，自主拆码垛</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-xl font-bold mb-2 text-foreground">智能码垛</h3>
                <p className="text-muted-foreground">自主导航，复杂工况的重货搬运及上下料</p>
              </div>
            </div>
          </div>

          {/* Customer Value */}
          <div className="mb-20 bg-card rounded-2xl border border-border p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">客户价值</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">降低人工成本</h3>
                <p className="text-sm text-muted-foreground">7×24小时运行，1台替代2人，节省20-40万/年</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">提高质量稳定性</h3>
                <p className="text-sm text-muted-foreground">一致性提升60-80%，达标率95%+</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">增强柔性制造能力</h3>
                <p className="text-sm text-muted-foreground">换线时间缩短70%</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">保障安全生产</h3>
                <p className="text-sm text-muted-foreground">人机安全协作</p>
              </div>
            </div>
          </div>

          {/* Industry Trends */}
          <div className="mb-16 bg-primary/5 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">产业趋势</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['市场规模爆发式增长：14亿到770亿', '轮式人形机器人成为主流：94%选择轮式', '工业场景率先批量落地', '新能源、3C电子、物流仓储'].map((trend, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">0{i + 1}</span>
                  </div>
                  <p className="text-muted-foreground">{trend}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Customers */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">头部客户</h2>
            <p className="text-lg text-muted-foreground">宁德时代、中铁、欣旺达、富士康、慈兴集团</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}