import { useTheme } from '../../../hooks/useTheme'
import { LeafBudIcon, StarfishIcon } from '../../common/Icons'

export function ContactSectionAccent() {
  const { theme } = useTheme()

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute left-1 top-14 hidden sm:block"
        style={{
          opacity: theme === 'light' ? 0.46 : 0.44,
        }}
      >
        {theme === 'light' ? (
          <LeafBudIcon className="h-24 w-24 rotate-[-10deg]" />
        ) : (
          <StarfishIcon variant="pink" className="size-20 rotate-[-12deg]" />
        )}
      </div>
    </div>
  )
}
