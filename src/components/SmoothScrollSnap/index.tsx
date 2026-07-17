'use client'

import { useEffect, useRef } from 'react'

// 单屏滚动动画时长（ms），越大越平缓
const SCROLL_DURATION = 500
// 动画结束后的冷却时间，吸收触控板/惯性滚动的余震
const COOLDOWN = 220
// 方向判定的死区阈值（占视口高度的比例），避免在吸附点附近抖动
const EDGE_RATIO = 0.15

export default function SmoothScrollSnap() {
  const animatingRef = useRef(false)
  const cooldownRef = useRef(0)

  useEffect(() => {
    // 触屏主设备走原生滚动 + CSS proximity 吸附，不接管
    if (window.matchMedia('(pointer: coarse)').matches) return

    // 只认 <section> 上的吸附点（Hero、Mission），footer 不参与，
    // 这样 Mission → footer 方向没有吸附点，可自由平滑滚动
    const getSections = () =>
      Array.from(document.querySelectorAll<HTMLElement>('section.snap-start'))

    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

    const scrollToY = (endY: number) => {
      const startY = window.scrollY
      if (Math.abs(endY - startY) < 1) return
      animatingRef.current = true
      const startTime = performance.now()
      const step = (now: number) => {
        const p = Math.min((now - startTime) / SCROLL_DURATION, 1)
        window.scrollTo({
          top: startY + (endY - startY) * ease(p),
          behavior: 'auto',
        })
        if (p < 1) {
          requestAnimationFrame(step)
        } else {
          animatingRef.current = false
          cooldownRef.current = performance.now() + COOLDOWN
        }
      }
      requestAnimationFrame(step)
    }

    const locked = () =>
      animatingRef.current || performance.now() < cooldownRef.current

    // 按方向找最近一个吸附目标的 Y；没有则返回 -1（放行原生滚动）
    const findTarget = (dir: 1 | -1) => {
      const sections = getSections()
      const y = window.scrollY
      const edge = window.innerHeight * EDGE_RATIO
      if (dir > 0) {
        for (const s of sections) {
          if (s.offsetTop > y + edge) return s.offsetTop
        }
      } else {
        for (let i = sections.length - 1; i >= 0; i--) {
          if (sections[i].offsetTop < y - edge) return sections[i].offsetTop
        }
      }
      return -1
    }

    const onWheel = (e: WheelEvent) => {
      if (locked()) {
        e.preventDefault()
        return
      }
      if (Math.abs(e.deltaY) < 12) return
      const target = findTarget(e.deltaY > 0 ? 1 : -1)
      if (target < 0) return // 该方向无吸附点 → 自由滚动
      e.preventDefault()
      scrollToY(target)
    }

    const onKey = (e: KeyboardEvent) => {
      if (locked()) return
      let dir = 0
      if (['ArrowDown', 'PageDown', ' '].includes(e.key)) dir = 1
      else if (['ArrowUp', 'PageUp'].includes(e.key)) dir = -1
      if (!dir) return
      const target = findTarget(dir as 1 | -1)
      if (target < 0) return
      e.preventDefault()
      scrollToY(target)
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  return null
}
