type LottieShapeItem = {
  ty?: string
  c?: {
    k?: number[]
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

export async function loadSuccessAnimation() {
  const response = await fetch('/animations/success-check.json')

  if (!response.ok) {
    throw new Error('Unable to load success animation.')
  }

  const animation = (await response.json()) as LottieAnimation

  setLayerFill(animation, 'BG', [0.9137, 0.9725, 0.9176, 1])
  setLayerFill(animation, 'Shape Layer 2', [0.6118, 0.8471, 0.6431, 1])
  setLayerFill(animation, 'Shape Layer 1', [0.8157, 0.9294, 0.8078, 1])

  return animation
}
