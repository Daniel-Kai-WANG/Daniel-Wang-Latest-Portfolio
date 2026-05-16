import { useEffect, useRef, useState } from 'react'

type UseAutoRotateIndexOptions = {
  enabled?: boolean
  intervalMs?: number
  reduceMotion?: boolean
}

export function useAutoRotateIndex(
  total: number,
  { enabled = true, intervalMs = 4800, reduceMotion = false }: UseAutoRotateIndexOptions = {}
) {
  const [activeIndex, setActiveIndexState] = useState(0)
  const [direction, setDirection] = useState(1)
  const [interactionVersion, setInteractionVersion] = useState(0)
  const activeIndexRef = useRef(0)

  useEffect(() => {
    activeIndexRef.current = activeIndex
  }, [activeIndex])

  useEffect(() => {
    if (!enabled || reduceMotion || total < 2) {
      return
    }

    const timer = window.setInterval(() => {
      setDirection(1)
      setActiveIndexState((current) => (current + 1) % total)
    }, intervalMs)

    return () => {
      window.clearInterval(timer)
    }
  }, [enabled, interactionVersion, intervalMs, reduceMotion, total])

  const restartAutoRotate = () => {
    setInteractionVersion((current) => current + 1)
  }

  const setActiveIndex = (index: number) => {
    if (total === 0) {
      return
    }

    const current = activeIndexRef.current
    const nextIndex = (index + total) % total

    if (nextIndex === current) {
      return
    }

    setDirection(nextIndex > current ? 1 : -1)
    restartAutoRotate()
    setActiveIndexState(nextIndex)
  }

  const goToIndex = (index: number) => {
    if (total === 0) {
      return
    }

    const current = activeIndexRef.current
    const nextIndex = (index + total) % total

    if (nextIndex === current) {
      return
    }

    setDirection(nextIndex > current ? 1 : -1)
    restartAutoRotate()
    setActiveIndexState(nextIndex)
  }

  const goToNext = () => {
    if (total === 0) {
      return
    }

    setDirection(1)
    restartAutoRotate()
    setActiveIndexState((current) => (current + 1) % total)
  }

  const goToPrevious = () => {
    if (total === 0) {
      return
    }

    setDirection(-1)
    restartAutoRotate()
    setActiveIndexState((current) => (current - 1 + total) % total)
  }

  return {
    activeIndex,
    direction,
    goToIndex,
    goToNext,
    goToPrevious,
    setActiveIndex,
  }
}
