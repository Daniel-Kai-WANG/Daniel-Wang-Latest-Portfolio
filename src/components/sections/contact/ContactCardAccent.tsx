import { useTheme } from '../../../hooks/useTheme'
import { SnowflakeAssetIcon, StarfishIcon } from '../../common/Icons'

export function ContactCardAccent() {
  const { theme } = useTheme()

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-4 top-4 flex size-9 items-center justify-center rounded-full border backdrop-blur-sm"
      style={{
        borderColor: 'color-mix(in srgb, var(--color-primary) 18%, var(--color-border))',
        background:
          theme === 'light'
            ? 'rgba(255,255,255,0.72)'
            : 'rgba(255,255,255,0.06)',
      }}
    >
      {theme === 'light' ? (
        <SnowflakeAssetIcon variant="cluster" className="size-5" />
      ) : (
        <StarfishIcon variant="pink" className="size-5" />
      )}
    </div>
  )
}
