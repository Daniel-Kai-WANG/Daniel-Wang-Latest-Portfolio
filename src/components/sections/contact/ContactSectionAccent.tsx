import { useTheme } from '../../../hooks/useTheme'
import { JellyfishIcon, PearlIcon, StarfishIcon, TablerMoonIcon } from '../../common/Icons'

export function ContactSectionAccent() {
  const { theme } = useTheme()

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute left-3 top-16 hidden sm:block"
        style={{
          opacity: theme === 'light' ? 0.52 : 0.44,
        }}
      >
        <StarfishIcon
          variant={theme === 'light' ? 'pink' : 'light'}
          className="size-20 rotate-[-12deg]"
        />
      </div>

      <div
        className="absolute left-16 top-40 hidden sm:block"
        style={{
          opacity: theme === 'light' ? 0.42 : 0.3,
        }}
      >
        <PearlIcon className="size-14" />
      </div>

      <div
        className="absolute right-10 top-7 hidden items-center gap-3 sm:flex"
        style={{
          opacity: theme === 'light' ? 0.7 : 0.58,
        }}
      >
        <TablerMoonIcon
          className="size-10"
          style={{
            color: theme === 'light' ? 'rgba(246, 181, 112, 0.92)' : 'rgba(226, 235, 255, 0.84)',
          }}
        />
        <PearlIcon className="size-11" />
      </div>

      <div
        className="absolute bottom-10 left-4 hidden sm:block"
        style={{
          opacity: theme === 'light' ? 0.24 : 0.2,
        }}
      >
        <JellyfishIcon
          className="size-10"
          style={{
            color: theme === 'light' ? '#7bc8ec' : 'rgba(164, 228, 255, 0.72)',
          }}
        />
      </div>

      <div
        className="absolute bottom-6 right-8 hidden sm:block"
        style={{
          opacity: theme === 'light' ? 0.2 : 0.18,
        }}
      >
        <JellyfishIcon
          className="size-11"
          style={{
            color: theme === 'light' ? '#7bc8ec' : 'rgba(164, 228, 255, 0.68)',
          }}
        />
      </div>

      <div
        className="absolute right-0 top-28 hidden sm:block"
        style={{
          opacity: theme === 'light' ? 0.38 : 0.28,
        }}
      >
        <StarfishIcon
          variant={theme === 'light' ? 'light' : 'pink'}
          className="size-16 rotate-[12deg]"
        />
      </div>
    </div>
  )
}
