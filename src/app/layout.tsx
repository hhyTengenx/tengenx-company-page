import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://tengenx.cn'
const SITE_NAME = '天元兴科技 TengenX'
const SITE_TITLE = '天元兴科技 TengenX - 工业具身大脑先行者和引领者'
const SITE_DESC =
  '天元兴科技（TengenX）是工业具身大脑先行者和引领者，自研世界动作模型 VLWA 与端到端控制方案，打造 TX01 工业具身机器人等下一代工业机器人产品，让机器人走进万千工厂。'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESC,
  applicationName: SITE_NAME,
  keywords: [
    '具身智能',
    '工业机器人',
    '具身大脑',
    '世界动作模型',
    'VLWA',
    '端到端控制',
    'TengenX',
    '天元兴',
    'TX01',
    'TengenData',
    'embodied AI',
    'industrial robotics',
  ],
  authors: [{ name: '天元兴科技' }],
  creator: '天元兴科技',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: { url: '/img/favicon.ico' },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [
      {
        url: '/img/og.png',
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ['/img/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Organization 结构化数据，帮助搜索引擎理解公司实体
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '天元兴科技',
  alternateName: 'TengenX',
  url: SITE_URL,
  logo: `${SITE_URL}/img/logo-blue.png`,
  email: 'business@tengenx.ai',
  description: SITE_DESC,
  foundingDate: '2025-04',
  knowsAbout: [
    '具身智能',
    '工业机器人',
    '世界动作模型',
    '端到端控制',
    '工业具身大脑',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" className="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
