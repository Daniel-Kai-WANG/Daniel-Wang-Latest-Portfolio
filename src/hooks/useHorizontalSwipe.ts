import { useMemo, useRef } from 'react'
import type { TouchEvent } from 'react'

type UseHorizontalSwipeOptions = {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  threshold?: number
  maxVerticalTravel?: number
}

export function useHorizontalSwipe({
  onSwipeLeft,
  onSwipeRight,
  threshold = 44,
  maxVerticalTravel = 72,
}: UseHorizontalSwipeOptions) {
  const touchStartRef = useRef<{ x: number; y: number } | null>(null)

  return useMemo(
    () => ({
      onTouchStart(event: TouchEvent<HTMLElement>) {
        const touch = event.changedTouches[0]

        if (!touch) {
          return
        }

        touchStartRef.current = { x: touch.clientX, y: touch.clientY }
      },
      onTouchEnd(event: TouchEvent<HTMLElement>) {
        const touch = event.changedTouches[0]
        const start = touchStartRef.current

        touchStartRef.current = null

        if (!touch || !start) {
          return
        }

        const deltaX = touch.clientX - start.x
        const deltaY = touch.clientY - start.y
        const horizontalDistance = Math.abs(deltaX)
        const verticalDistance = Math.abs(deltaY)

        if (
          horizontalDistance < threshold ||
          verticalDistance > maxVerticalTravel ||
          horizontalDistance <= verticalDistance
        ) {
          return
        }

        if (deltaX < 0) {
          onSwipeLeft?.()
          return
        }

        onSwipeRight?.()
      },
    }),
    [maxVerticalTravel, onSwipeLeft, onSwipeRight, threshold]
  )
}
