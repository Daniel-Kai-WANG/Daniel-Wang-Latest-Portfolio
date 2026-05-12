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
  getLogoPosition,
} from './techLogoCarouselTimeline'
import { TechLogoTile } from './TechLogoTile'

const MOBILE_TILE_SCALE = 0.6

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
  const [isCompactMobile, setIsCompactMobile] = useState(false)

  useEffect(() => {
    const element = containerRef.current

    if (!element) {
      return
    }

    const observer = new ResizeObserver(([entry]) => {
      const nextWidth = entry.contentRect.width
      const compact = window.innerWidth < 640
      const tileWidth = compact ? LOGO_TILE_WIDTH * MOBILE_TILE_SCALE : LOGO_TILE_WIDTH

      setIsCompactMobile(compact)
      const nextValue = Math.max(
        1,
        Math.floor((nextWidth + LOGO_GAP) / (tileWidth + LOGO_GAP))
      )

      setLogosPerRow(nextValue)
    })

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const rows = useMemo(() => splitIntoRows(logos, logosPerRow), [logos, logosPerRow])
  const rowCount = rows.length
  const tileWidth = isCompactMobile ? LOGO_TILE_WIDTH * MOBILE_TILE_SCALE : LOGO_TILE_WIDTH
  const tileHeight = isCompactMobile ? LOGO_TILE_HEIGHT * MOBILE_TILE_SCALE : LOGO_TILE_HEIGHT
  const trackWidth =
    logosPerRow * tileWidth + Math.max(0, logosPerRow - 1) * LOGO_GAP
  const trackHeight =
    rowCount * tileHeight + Math.max(0, rowCount - 1) * ROW_GAP
  const segments = useMemo(
    () => buildSegments(rowCount, trackWidth, { tileHeight, tileWidth }),
    [rowCount, tileHeight, tileWidth, trackWidth]
  )
  const cycleDurationMs = getCycleDuration(segments)
  const isAnimated = !reduceMotion && logos.length >= 2 && cycleDurationMs > 0
  const baseLogoSpacingMs = ((tileWidth + LOGO_GAP) / LOGO_SPEED) * 2000
  const logoSpacingMs = baseLogoSpacingMs / 2

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
          gridTemplateColumns: `repeat(${logosPerRow}, minmax(0, ${tileWidth}px))`,
        }}
      >
        {logos.map((logo) => (
          <TechLogoTile key={`${activeKey}-${logo.id}`} compact={isCompactMobile} logo={logo} />
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
        {logos.map((logo, logoIndex) => {
          const position = getLogoPosition(
            elapsedMs - logoIndex * logoSpacingMs,
            segments,
            cycleDurationMs
          )

          return (
            <div
              key={`${activeKey}-${logo.id}`}
              className="absolute transition-opacity duration-200"
              style={{
                opacity: position ? 1 : 0,
                transform: position
                  ? `translate(${position.x}px, ${position.y}px)`
                  : 'translate3d(-999px, -999px, 0)',
                willChange: 'transform, opacity',
              }}
            >
              <TechLogoTile compact={isCompactMobile} logo={logo} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
