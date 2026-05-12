const LOGO_TILE_WIDTH = 96
const LOGO_TILE_HEIGHT = 108
const LOGO_GAP = 12
const ROW_GAP = 12
const LOGO_SPEED = 112
const TRANSFER_DURATION_MS = 860

type TravelSegment = {
  durationMs: number
  endX: number
  rowIndex: number
  startX: number
  type: 'travel'
  y: number
}

type TransferSegment = {
  durationMs: number
  type: 'transfer'
}

type LogoSegment = TravelSegment | TransferSegment

type LogoTrackMetrics = {
  tileHeight: number
  tileWidth: number
}

function buildSegments(rowCount: number, trackWidth: number, metrics: LogoTrackMetrics) {
  const segments: LogoSegment[] = []
  const { tileHeight, tileWidth } = metrics

  for (let rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
    const moveRight = rowIndex % 2 === 0
    const startX = moveRight ? -tileWidth : trackWidth
    const endX = moveRight ? trackWidth : -tileWidth

    segments.push({
      type: 'travel',
      rowIndex,
      startX,
      endX,
      y: rowIndex * (tileHeight + ROW_GAP),
      durationMs: ((trackWidth + tileWidth) / LOGO_SPEED) * 1000,
    })

    if (rowIndex < rowCount - 1) {
      segments.push({
        type: 'transfer',
        durationMs: TRANSFER_DURATION_MS,
      })
    }
  }

  return segments
}

function getCycleDuration(segments: LogoSegment[]) {
  return segments.reduce((total, segment) => total + segment.durationMs, 0)
}

function getVisibleDuration(segments: LogoSegment[]) {
  return segments.reduce((total, segment) => {
    if (segment.type !== 'travel') {
      return total
    }

    return total + segment.durationMs
  }, 0)
}

function getLogoPosition(
  timeMs: number,
  segments: LogoSegment[],
  cycleDurationMs: number
) {
  if (timeMs < 0) {
    return null
  }

  let localTime = timeMs

  if (timeMs > cycleDurationMs) {
    localTime %= cycleDurationMs

    if (localTime < 0) {
      localTime += cycleDurationMs
    }
  }

  let elapsed = 0

  for (const segment of segments) {
    const segmentEnd = elapsed + segment.durationMs

    if (localTime <= segmentEnd) {
      if (segment.type === 'transfer') {
        return null
      }

      const progress =
        segment.durationMs === 0 ? 0 : (localTime - elapsed) / segment.durationMs

      return {
        x: segment.startX + (segment.endX - segment.startX) * progress,
        y: segment.y,
      }
    }

    elapsed = segmentEnd
  }

  return null
}

export {
  LOGO_GAP,
  LOGO_SPEED,
  LOGO_TILE_HEIGHT,
  LOGO_TILE_WIDTH,
  ROW_GAP,
  buildSegments,
  getCycleDuration,
  getLogoPosition,
  getVisibleDuration,
}
