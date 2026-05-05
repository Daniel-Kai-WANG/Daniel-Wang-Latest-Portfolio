import { JellyfishIcon, StarfishIcon } from '../common/Icons'

type CoralDecorPairProps = {
  starfishVariant: 'light' | 'pink'
}

const decorSizeTokens = {
  decorFrame: 'size-[clamp(1.52rem,1.24rem+0.58vw,1.88rem)]',
} as const

const starfishGlowByVariant = {
  light: 'drop-shadow-[0_0_12px_rgba(216,244,255,0.16)]',
  pink: 'drop-shadow-[0_0_12px_rgba(255,160,188,0.14)]',
} as const

const starfishVisualScaleByVariant = {
  light: 'scale-[0.76]',
  pink: 'scale-[0.86]',
} as const

export function CoralDecorPair({ starfishVariant }: CoralDecorPairProps) {
  return (
    <div className="flex items-end gap-1.5">
      <span className={`flex shrink-0 items-center justify-center ${decorSizeTokens.decorFrame}`}>
        <StarfishIcon
          variant={starfishVariant}
          className={`h-full w-full origin-center ${starfishVisualScaleByVariant[starfishVariant]} ${starfishGlowByVariant[starfishVariant]}`}
        />
      </span>
      <span
        className={`flex shrink-0 translate-y-[1px] items-center justify-center ${decorSizeTokens.decorFrame}`}
      >
        <JellyfishIcon className="h-full w-full text-cyan-200/70" />
      </span>
    </div>
  )
}
