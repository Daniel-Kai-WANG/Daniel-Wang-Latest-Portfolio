import { useTheme } from '../../../hooks/useTheme'
import { StarfishIcon } from '../../common/Icons'

export function ContactSectionAccent() {
  const { theme } = useTheme()

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {theme === 'dark' ? (
        <div
          className="absolute left-1 top-14 hidden sm:block"
          style={{
            opacity: 0.44,
          }}
        >
          <StarfishIcon variant="pink" className="size-20 rotate-[-12deg]" />
        </div>
      ) : null}
    </div>
  )
}
