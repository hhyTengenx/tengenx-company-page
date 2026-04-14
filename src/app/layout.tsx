import type { Metadata } from 'next'
import './globals.css'
import { LocaleProvider } from '@/lib/locale-context'

export const metadata: Metadata = {
  title: '天元兴科技 TengenX - 具身智能机器人',
  description: '天元兴科技是一家专注于具身智能机器人研发的高科技公司，致力于打造下一代智能机器人，延伸人类能力边界。',
  keywords: ['具身智能', '机器人', '人形机器人', 'TengenX', '天元兴', 'embodied AI', 'humanoid robot'],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: '天元兴科技 TengenX - 具身智能机器人',
    description: '打造下一代具身智能机器人，延伸人类能力边界',
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