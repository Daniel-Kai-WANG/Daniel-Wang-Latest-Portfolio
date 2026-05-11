import { useTheme } from '../../hooks/useTheme'
import { ThemeModeTransition } from '../theme/ThemeModeTransition'
import {
  JellyfishIcon,
  SakuraIcon,
  SnowCrystalIcon,
  StarfishIcon,
  SunLowIcon,
  TablerMoonIcon,
} from './Icons'

type SectionPolishAccentProps = {
  className?: string
}

export function SectionPolishAccent({ className = '' }: SectionPolishAccentProps) {
  const { theme } = useTheme()

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 hidden sm:block ${className}`}
    >
      <div
        className="absolute left-5 top-5 flex items-start gap-3 opacity-80"
      >
        <div
          className="flex size-11 items-center justify-center rounded-full border backdrop-blur-sm"
          style={{
            borderColor: 'color-mix(in srgb, var(--color-primary) 18%, var(--color-border))',
            background:
              theme === 'light'
                ? 'rgba(255,255,255,0.76)'
                : 'rgba(255,255,255,0.06)',
          }}
        >
          <ThemeModeTransition
            className="flex items-center justify-center"
            light={<SakuraIcon className="size-5" />}
            dark={<StarfishIcon variant="pink" className="size-4 rotate-[10deg]" />}
          />
        </div>
        <div
          className="mt-3 flex size-16 items-center justify-center rounded-full"
          style={{
            background:
              theme === 'light'
                ? 'color-mix(in srgb, var(--color-primary) 10%, white)'
                : 'color-mix(in srgb, var(--color-primary) 14%, transparent)',
            boxShadow:
              theme === 'light'
                ? '0 0 32px rgba(56, 189, 248, 0.16)'
                : '0 0 32px rgba(133, 120, 255, 0.16)',
          }}
        >
          <ThemeModeTransition
            className="flex items-center justify-center"
            light={<SnowCrystalIcon className="size-5 text-sky-400/85" />}
            dark={<JellyfishIcon className="size-5 text-cyan-200/70" />}
          />
        </div>
      </div>

      <div
        className="absolute right-5 top-5 rounded-full border px-4 py-3 backdrop-blur-sm"
        style={{
          borderColor: 'color-mix(in srgb, var(--color-primary) 18%, var(--color-border))',
          background:
            theme === 'light'
              ? 'rgba(255,255,255,0.72)'
              : 'rgba(255,255,255,0.05)',
        }}
      >
        <div className="flex items-center gap-2">
          <ThemeModeTransition
            className="flex items-center gap-2"
            light={
              <>
                <SakuraIcon className="size-4" />
                <SnowCrystalIcon className="size-4 text-sky-400/70" />
                <SunLowIcon className="size-3.5 text-amber-500" />
              </>
            }
            dark={
              <>
                <StarfishIcon variant="light" className="size-4 -rotate-[10deg]" />
                <JellyfishIcon className="size-4 text-cyan-200/70" />
                <TablerMoonIcon className="size-3.5 text-slate-100/80" />
              </>
            }
          />
        </div>
      </div>

      <div
        className="absolute bottom-5 left-5 rounded-full border px-3 py-2 backdrop-blur-sm"
        style={{
          borderColor: 'color-mix(in srgb, var(--color-primary) 16%, var(--color-border))',
          background:
            theme === 'light'
              ? 'linear-gradient(180deg, rgba(255,255,255,0.78), rgba(246,251,255,0.72))'
              : 'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(128,199,255,0.06))',
        }}
      >
        <div className="flex items-center gap-2">
          <ThemeModeTransition
            className="flex items-center gap-2"
            light={
              <>
                <SakuraIcon className="size-4" />
                <SnowCrystalIcon className="size-4 text-sky-300/80" />
              </>
            }
            dark={
              <>
                <StarfishIcon variant="pink" className="size-4 rotate-[10deg]" />
                <JellyfishIcon className="size-4 text-cyan-200/65" />
              </>
            }
          />
          <span
            className="block h-px w-12"
            style={{
              background:
                'linear-gradient(90deg, color-mix(in srgb, var(--color-primary) 34%, transparent), transparent)',
            }}
          />
        </div>
      </div>

      <div
        className="absolute bottom-5 right-5 rounded-[1.1rem] border px-3 py-3 backdrop-blur-sm"
        style={{
          borderColor: 'color-mix(in srgb, var(--color-primary) 16%, var(--color-border))',
          background:
            theme === 'light'
              ? 'linear-gradient(180deg, rgba(255,255,255,0.78), rgba(246,251,255,0.72))'
              : 'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(128,199,255,0.06))',
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="block h-2 w-2 rounded-full"
            style={{
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
            }}
          />
          <span
            className="block h-px w-10"
            style={{
              background:
                'linear-gradient(90deg, color-mix(in srgb, var(--color-primary) 34%, transparent), transparent)',
            }}
          />
          <span
            className="block h-2 w-2 rounded-full"
            style={{
              background: 'color-mix(in srgb, var(--color-secondary) 60%, white)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
