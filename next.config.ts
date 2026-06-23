import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  cleanDistDir: true,
}

export default nextConfig
