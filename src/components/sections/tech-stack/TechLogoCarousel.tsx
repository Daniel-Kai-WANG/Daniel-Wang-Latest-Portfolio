import { useReducedMotion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { TechLogo } from '../../../data/techStack'
import {
  LOGO_GAP,
  LOGO_SPEED,
  LOGO_TILE_HEIGHT,
  LOGO_TILE_WIDTH,
  ROW_GAP,
  buildSegments,
  getCycleDuration,
  getVisibleDuration,
  getLogoPosition,
} from './techLogoCarouselTimeline'
import { TechLogoTile } from './TechLogoTile'

function splitIntoRows(logos: TechLogo[], logosPerRow: number) {
  const rows: TechLogo[][] = []

  for (let index = 0; index < logos.length; index += logosPerRow) {
    rows.push(logos.slice(index, index + logosPerRow))
  }

  return rows
}

type TechLogoCarouselProps = {
  activeKey: string
  logos: TechLogo[]
}

export function TechLogoCarousel({ activeKey, logos }: TechLogoCarouselProps) {
  const reduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const [logosPerRow, setLogosPerRow] = useState(4)
  const [elapsedMs, setElapsedMs] = useState(0)

  useEffect(() => {
    const element = containerRef.current

    if (!element) {
      return
    }

    const observer = new ResizeObserver(([entry]) => {
      const nextWidth = entry.contentRect.width
      const nextValue = Math.max(
        1,
        Math.floor((nextWidth + LOGO_GAP) / (LOGO_TILE_WIDTH + LOGO_GAP))
      )

      setLogosPerRow(nextValue)
    })

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const rows = useMemo(() => splitIntoRows(logos, logosPerRow), [logos, logosPerRow])
  const rowCount = rows.length
  const trackWidth =
    logosPerRow * LOGO_TILE_WIDTH + Math.max(0, logosPerRow - 1) * LOGO_GAP
  const trackHeight =
    rowCount * LOGO_TILE_HEIGHT + Math.max(0, rowCount - 1) * ROW_GAP
  const segments = useMemo(() => buildSegments(rowCount, trackWidth), [rowCount, trackWidth])
  const cycleDurationMs = getCycleDuration(segments)
  const visibleDurationMs = getVisibleDuration(segments)
  const logoDelayMs = ((LOGO_TILE_WIDTH + LOGO_GAP) / LOGO_SPEED) * 1000
  const isAnimated = !reduceMotion && logos.length >= 2 && cycleDurationMs > 0
  const renderLogos = useMemo(() => {
    const minimumInstances = Math.max(
      logos.length,
      Math.ceil(visibleDurationMs / logoDelayMs)
    )

    return Array.from({ length: minimumInstances }, (_, index) => {
      return logos[index % logos.length]
    })
  }, [logos, logoDelayMs, visibleDurationMs])

  useEffect(() => {
    if (!isAnimated) {
      return
    }

    let frameId = 0
    const startTime = performance.now()

    const updateFrame = (now: number) => {
      setElapsedMs(now - startTime)
      frameId = window.requestAnimationFrame(updateFrame)
    }

    frameId = window.requestAnimationFrame(updateFrame)

    return () => window.cancelAnimationFrame(frameId)
  }, [activeKey, isAnimated])

  if (!isAnimated) {
    return (
      <div
        ref={containerRef}
        className="grid gap-3"
        style={{
          gridTemplateColumns: `repeat(${logosPerRow}, minmax(0, ${LOGO_TILE_WIDTH}px))`,
        }}
      >
        {logos.map((logo) => (
          <TechLogoTile key={`${activeKey}-${logo.id}`} logo={logo} />
        ))}
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="flex min-h-[10rem] flex-1 items-center justify-center overflow-hidden"
    >
      <div
        className="relative overflow-hidden"
        style={{
          width: `${trackWidth}px`,
          height: `${trackHeight}px`,
        }}
      >
        {renderLogos.map((logo, logoIndex) => {
          const position = getLogoPosition(
            elapsedMs - logoIndex * logoDelayMs,
            segments,
            cycleDurationMs
          )

          return (
            <div
              key={`${activeKey}-${logo.id}-${logoIndex}`}
              className="absolute transition-opacity duration-200"
              style={{
                opacity: position ? 1 : 0,
                transform: position
                  ? `translate(${position.x}px, ${position.y}px)`
                  : 'translate3d(-999px, -999px, 0)',
                willChange: 'transform, opacity',
              }}
            >
              <TechLogoTile logo={logo} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
