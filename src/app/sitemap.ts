import type { MetadataRoute } from 'next'

// 站点域名，部署到其他环境时改这里（或换成 env 变量）
const SITE_URL = 'https://tengenx.cn'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  // 目前只对外暴露首页；其他页面成熟后在这里追加
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
