type LottieShapeItem = {
  ty?: string
  c?: {
    k?: number[]
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

function setLayerFill(animation: LottieAnimation, layerName: string, fillColor: number[]) {
  const layer = animation.layers?.find((item) => item.nm === layerName)
  const fill = layer?.shapes?.[0]?.it?.find((item) => item.ty === 'fl')

  if (fill?.c?.k) {
    fill.c.k = fillColor
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

export async function loadSuccessAnimation(theme: 'light' | 'dark') {
  const response = await fetch('/animations/success-check.json')

  if (!response.ok) {
    throw new Error('Unable to load success animation.')
  }

  const animation = (await response.json()) as LottieAnimation

  setLayerFill(animation, 'BG', [0, 0, 0, 0])
  setLayerFill(animation, 'Shape Layer 2', [0, 0, 0, 0])
  setLayerFill(animation, 'Shape Layer 1', [0, 0, 0, 0])
  setLayerStroke(
    animation,
    'check',
    theme === 'dark' ? [1, 0.8275, 0.6588, 1] : [0.4902, 0.7843, 0.5412, 1],
    34
  )

  return animation
}
