type LottieShapeItem = {
  ty?: string
  c?: {
    k?: number[]
  }
  e?: {
    k?: Array<{
      i?: { x?: number[]; y?: number[] }
      o?: { x?: number[]; y?: number[] }
      s?: number[]
      t?: number
    }>
  }
  o?: {
    k?: number
  }
  w?: {
    k?: number
  }
}

type LottieLayer = {
  nm?: string
  shapes?: Array<{
    it?: LottieShapeItem[]
  }>
}

type LottieAnimation = {
  layers?: LottieLayer[]
}

function setLayerFillOpacity(animation: LottieAnimation, layerName: string, opacity: number) {
  const layer = animation.layers?.find((item) => item.nm === layerName)
  const fill = layer?.shapes?.[0]?.it?.find((item) => item.ty === 'fl')

  if (fill?.o?.k !== undefined) {
    fill.o.k = opacity
  }
}

function setLayerStroke(
  animation: LottieAnimation,
  layerName: string,
  strokeColor: number[],
  strokeWidth?: number
) {
  const layer = animation.layers?.find((item) => item.nm === layerName)
  const stroke = layer?.shapes?.[0]?.it?.find((item) => item.ty === 'st')

  if (stroke?.c?.k) {
    stroke.c.k = strokeColor
  }

  if (typeof strokeWidth === 'number' && stroke?.w?.k !== undefined) {
    stroke.w.k = strokeWidth
  }
}

function slowCheckAnimation(animation: LottieAnimation, layerName: string) {
  const layer = animation.layers?.find((item) => item.nm === layerName)
  const trimPath = layer?.shapes?.[0]?.it?.find((item) => item.ty === 'tm')
  const keyframes = trimPath?.e?.k

  if (!keyframes || keyframes.length < 2) {
    return
  }

  if (keyframes[0]?.t !== undefined) {
    keyframes[0].t = 52
  }

  if (keyframes[1]?.t !== undefined) {
    keyframes[1].t = 104
  }
}

export async function loadSuccessAnimation(theme: 'light' | 'dark') {
  const response = await fetch(`${import.meta.env.BASE_URL}animations/success-check.json`)

  if (!response.ok) {
    throw new Error('Unable to load success animation.')
  }

  const animation = (await response.json()) as LottieAnimation

  setLayerFillOpacity(animation, 'BG', 0)
  setLayerFillOpacity(animation, 'Shape Layer 2', 0)
  setLayerFillOpacity(animation, 'Shape Layer 1', 0)
  slowCheckAnimation(animation, 'check')
  setLayerStroke(
    animation,
    'check',
    theme === 'dark' ? [1, 0.8275, 0.6588, 1] : [0.4902, 0.7843, 0.5412, 1],
    34
  )

  return animation
}
