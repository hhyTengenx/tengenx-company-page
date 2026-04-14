import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'blue' | 'white'
}

const sizes = {
  sm: { width: 32, height: 32 },
  md: { width: 40, height: 40 },
  lg: { width: 64, height: 64 },
}

export default function Logo({ className = '', size = 'md', variant = 'blue' }: LogoProps) {
  const { width, height } = sizes[size]

  // 白色版本使用 CSS filter 实现
  const filterStyle = variant === 'white'
    ? { filter: 'brightness(0) invert(1)' }
    : {}

  return (
    <Image
      src={`/img/logo-blue.png`}
      alt="TengenX Logo"
      width={width}
      height={height}
      className={className}
      style={filterStyle}
      priority
    />
  )
}