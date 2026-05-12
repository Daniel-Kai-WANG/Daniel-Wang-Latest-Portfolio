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
  s?: {
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
  ind?: number
  nm?: string
  refId?: string
  shapes?: Array<{
    it?: LottieShapeItem[]
  }>
}

type LottieAnimation = {
  assets?: Array<{
    id?: string
    layers?: LottieLayer[]
  }>
  layers?: LottieLayer[]
}

function findLayer(animation: LottieAnimation, layerName: string) {
  const rootLayer = animation.layers?.find((item) => item.nm === layerName)

  if (rootLayer) {
    return rootLayer
  }

  for (const asset of animation.assets ?? []) {
    const assetLayer = asset.layers?.find((item) => item.nm === layerName)

    if (assetLayer) {
      return assetLayer
    }
  }

  return undefined
}

function setLayerStroke(
  animation: LottieAnimation,
  layerName: string,
  strokeColor: number[],
  strokeWidth?: number
) {
  const layer = findLayer(animation, layerName)
  const stroke = layer?.shapes?.[0]?.it?.find((item) => item.ty === 'st')

  if (stroke?.c?.k) {
    stroke.c.k = strokeColor
  }

  if (typeof strokeWidth === 'number' && stroke?.w?.k !== undefined) {
    stroke.w.k = strokeWidth
  }
}

function setAllMatchingFillColors(animation: LottieAnimation, layerName: string, fillColor: number[]) {
  const layers = [
    ...(animation.layers?.filter((item) => item.nm === layerName) ?? []),
    ...((animation.assets ?? []).flatMap((asset) =>
      asset.layers?.filter((item) => item.nm === layerName) ?? []
    )),
  ]

  for (const layer of layers) {
    for (const shape of layer.shapes ?? []) {
      const fill = shape.it?.find((item) => item.ty === 'fl')

      if (fill?.c?.k) {
        fill.c.k = fillColor
      }
    }
  }
}

function setLayerFillColor(animation: LottieAnimation, layerName: string, fillColor: number[]) {
  const layer = findLayer(animation, layerName)

  if (!layer) {
    return
  }

  for (const shape of layer.shapes ?? []) {
    for (const item of shape.it ?? []) {
      if (item.ty === 'fl' && item.c?.k) {
        item.c.k = fillColor
      }
    }
  }
}

function slowCheckAnimation(animation: LottieAnimation, layerName: string) {
  const layer = findLayer(animation, layerName)
  const trimPath = layer?.shapes?.find((shape) => shape.it?.some((item) => item.ty === 'tm'))
    ?.it?.find((item) => item.ty === 'tm')
  const keyframes = trimPath?.s?.k

  if (!keyframes || keyframes.length < 2) {
    return
  }

  if (keyframes[0]?.t !== undefined) {
    keyframes[0].t = 66
  }

  if (keyframes[1]?.t !== undefined) {
    keyframes[1].t = 92
  }
}

export async function loadSuccessAnimation(theme: 'light' | 'dark') {
  const response = await fetch(`${import.meta.env.BASE_URL}animations/success-check.json`)

  if (!response.ok) {
    throw new Error('Unable to load success animation.')
  }

  const animation = (await response.json()) as LottieAnimation
  const strokeColor =
    theme === 'dark' ? [1, 0.9216, 0.6941, 1] : [1, 1, 1, 1]
  const popColor =
    theme === 'dark' ? [0.9804, 0.6392, 0.2588, 1] : [0.0471, 0.6745, 0.4314, 1]

  if (theme === 'dark') {
    setLayerFillColor(animation, 'Circle', [0.9804, 0.6392, 0.2588, 1])
    setLayerFillColor(animation, 'Circle 2', [0.9804, 0.6392, 0.2588, 1])
    setLayerFillColor(animation, 'Circle 3', [0.9804, 0.6392, 0.2588, 1])
  }

  slowCheckAnimation(animation, 'tick')
  setLayerStroke(animation, 'tick', strokeColor, 96)

  setAllMatchingFillColors(animation, 'pop', popColor)

  return animation
}
