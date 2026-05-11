import { StarfishIcon } from '../../common/Icons'
import { ThemeModeTransition } from '../../theme/ThemeModeTransition'

export function ContactSectionAccent() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <ThemeModeTransition
        className="absolute inset-0"
        light={<div />}
        dark={
          <div
            className="absolute left-1 top-14 hidden sm:block"
            style={{
              opacity: 0.44,
            }}
          >
            <StarfishIcon variant="pink" className="size-20 rotate-[-12deg]" />
          </div>
        }
      />
    </div>
  )
}
