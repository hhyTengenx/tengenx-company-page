import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '天元兴科技 TengenX - 工业具身大脑先行者和引领者',
  description: '工业具身大脑先行者和引领者',
  keywords: ['具身智能', '工业机器人', '具身大脑', 'TengenX', '天元兴', 'TX01', 'embodied AI', 'industrial robotics'],
  icons: {
    icon: { url: '/img/favicon.ico' },
  },
  openGraph: {
    title: '天元兴科技 TengenX - 工业具身大脑先行者和引领者',
    description: '工业具身大脑先行者和引领者',
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