import { useTheme } from '../../../hooks/useTheme'
import {
  JellyfishIcon,
  LeafBudIcon,
  PearlIcon,
  SakuraIcon,
  SnowCrystalIcon,
  StarfishIcon,
} from '../../common/Icons'

type ProjectPreviewAccentProps = {
  accentIndex: number
}

export function ProjectPreviewAccent({ accentIndex }: ProjectPreviewAccentProps) {
  const { theme } = useTheme()
  const normalizedIndex = accentIndex % 3

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-4 top-4 flex size-10 items-center justify-center rounded-full border backdrop-blur-sm"
      style={{
        borderColor: 'color-mix(in srgb, var(--color-primary) 16%, var(--color-border))',
        background:
          theme === 'light'
            ? 'rgba(255,255,255,0.74)'
            : 'rgba(255,255,255,0.06)',
      }}
    >
      {theme === 'light' ? (
        normalizedIndex === 0 ? (
          <LeafBudIcon className="size-5" />
        ) : normalizedIndex === 1 ? (
          <SakuraIcon variant="a" className="size-5" />
        ) : (
          <SnowCrystalIcon className="size-5 text-sky-300/85" />
        )
      ) : (
        normalizedIndex === 0 ? (
          <JellyfishIcon className="size-5 text-cyan-200/80" />
        ) : normalizedIndex === 1 ? (
          <StarfishIcon variant="light" className="size-5" />
        ) : (
          <PearlIcon className="size-5 text-slate-100/88" />
        )
      )}
    </div>
  )
}
