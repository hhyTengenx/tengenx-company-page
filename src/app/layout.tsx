import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '天元兴科技 TengenX - 构建工业世界模型底座，引领工业制造创新变革',
  description: '构建工业世界模型底座，引领工业制造创新变革',
  keywords: ['具身智能', '工业机器人', '端到端控制', 'TengenX', '天元兴', 'TX01', 'embodied AI', 'industrial robotics'],
  icons: {
    icon: { url: '/img/favicon.ico' },
  },
  openGraph: {
    title: '天元兴科技 TengenX - 构建工业世界模型底座，引领工业制造创新变革',
    description: '构建工业世界模型底座，引领工业制造创新变革',
    type: 'website',
    locale: 'zh_CN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" className="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}