import { useEffect, useLayoutEffect, useRef, useState } from 'react'

export function useMeasuredCarouselHeight<T extends HTMLElement>(watchKey: string) {
  const nodesRef = useRef<T[]>([])
  const [height, setHeight] = useState(0)

  const setNode = (index: number, node: T | null) => {
    if (!node) {
      return
    }

    nodesRef.current[index] = node
  }

  useLayoutEffect(() => {
    const nextHeight = nodesRef.current.reduce((maxHeight, node) => {
      if (!node) {
        return maxHeight
      }

      return Math.max(maxHeight, Math.ceil(node.getBoundingClientRect().height))
    }, 0)

    if (nextHeight > 0 && nextHeight !== height) {
      setHeight(nextHeight)
    }
  }, [height, watchKey])

  useEffect(() => {
    const updateHeight = () => {
      const nextHeight = nodesRef.current.reduce((maxHeight, node) => {
        if (!node) {
          return maxHeight
        }

        return Math.max(maxHeight, Math.ceil(node.getBoundingClientRect().height))
      }, 0)

      if (nextHeight > 0) {
        setHeight(nextHeight)
      }
    }

    updateHeight()
    window.addEventListener('resize', updateHeight)
    window.addEventListener('orientationchange', updateHeight)

    return () => {
      window.removeEventListener('resize', updateHeight)
      window.removeEventListener('orientationchange', updateHeight)
    }
  }, [])

  return {
    height,
    setNode,
  }
}
