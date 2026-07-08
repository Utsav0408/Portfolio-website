import { useEffect, useState } from 'react'

import { clamp } from '../utils/scroll.js'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frameId = 0

    const updateProgress = () => {
      const scrollTop = window.scrollY || window.pageYOffset
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = totalHeight > 0 ? clamp(scrollTop / totalHeight, 0, 1) : 0

      setProgress(nextProgress)
      frameId = 0
    }

    const onScroll = () => {
      if (frameId) {
        return
      }

      frameId = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return progress
}