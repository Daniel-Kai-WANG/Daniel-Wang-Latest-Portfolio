import { useEffect, useState } from 'react'

type UseAutoRotateIndexOptions = {
  enabled?: boolean
  intervalMs?: number
  reduceMotion?: boolean
}

export function useAutoRotateIndex(
  total: number,
  { enabled = true, intervalMs = 4800, reduceMotion = false }: UseAutoRotateIndexOptions = {}
) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!enabled || reduceMotion || total < 2) {
      return
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total)
    }, intervalMs)

    return () => {
      window.clearInterval(timer)
    }
  }, [enabled, intervalMs, reduceMotion, total])

  const goToIndex = (index: number) => {
    if (total === 0) {
      return
    }

    setActiveIndex((index + total) % total)
  }

  const goToNext = () => {
    if (total === 0) {
      return
    }

    setActiveIndex((current) => (current + 1) % total)
  }

  const goToPrevious = () => {
    if (total === 0) {
      return
    }

    setActiveIndex((current) => (current - 1 + total) % total)
  }

  return {
    activeIndex,
    goToIndex,
    goToNext,
    goToPrevious,
    setActiveIndex,
  }
}
