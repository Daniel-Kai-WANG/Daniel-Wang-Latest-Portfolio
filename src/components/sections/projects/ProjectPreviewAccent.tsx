import { useTheme } from '../../../hooks/useTheme'
import { SakuraIcon, StarfishIcon } from '../../common/Icons'

export function ProjectPreviewAccent() {
  const { theme } = useTheme()

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
        <SakuraIcon variant="a" className="size-5" />
      ) : (
        <StarfishIcon variant="light" className="size-5" />
      )}
    </div>
  )
}
