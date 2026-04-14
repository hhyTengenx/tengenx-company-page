import type { Metadata } from 'next'
import './globals.css'
import { LocaleProvider } from '@/lib/locale-context'

export const metadata: Metadata = {
  title: '天元兴科技 TengenX - 通用工业具身智能平台',
  description: '天元兴科技专注于通用工业具身智能平台研发，以端到端控制技术打造TX01机器人，解决传统工业机器人痛点，服务宁德时代、欣旺达等头部客户。',
  keywords: ['具身智能', '工业机器人', '端到端控制', 'TengenX', '天元兴', 'TX01', 'embodied AI', 'industrial robotics'],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: '天元兴科技 TengenX - 通用工业具身智能平台',
    description: '端到端控制技术，打造下一代工业机器人，解决传统工业机器人研发和实施成本过高的痛点。',
    type: 'website',
    locale: 'zh_CN',
    alternateLocale: ['en_US'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" className="dark" data-scroll-behavior="smooth">
      <body className="antialiased">
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  )
}