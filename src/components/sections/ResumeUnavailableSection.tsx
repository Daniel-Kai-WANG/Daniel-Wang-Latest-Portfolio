import { useTheme } from '../../hooks/useTheme'
import { Reveal } from '../animation/Reveal'
import { ThemeShiftBackdrop } from '../animation/ThemeShiftBackdrop'
import {
  JellyfishIcon,
  PetalIcon,
  SnowflakeIcon,
  SparkIcon,
  StarSparkIcon,
} from '../common/Icons'

export function ResumeUnavailableSection() {
  const { theme } = useTheme()

  return (
    <Reveal>
      <section className="section-frame relative overflow-hidden px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
        <ThemeShiftBackdrop />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative z-10">
            <h2 className="font-display text-3xl font-bold tracking-[-0.05em] text-[var(--color-text)] sm:text-4xl">
              Resume temporarily out of office.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
              My work is still here, but the downloadable resume is having a short maintenance
              break. In the meantime, you can explore my projects, experience journey, and tech
              stack universe below.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white"
                style={{
                  background:
                    theme === 'light'
                      ? 'linear-gradient(135deg, #38BDF8, #2563EB)'
                      : 'linear-gradient(135deg, #FF4FD8, #7C5CFF)',
                }}
              >
                Explore Projects Instead
              </a>
              <button
                type="button"
                disabled
                className="inline-flex cursor-not-allowed items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold opacity-80"
                style={{
                  borderColor: 'var(--color-border)',
                  background: 'var(--pill-background)',
                  color: 'var(--color-muted)',
                }}
              >
                Resume Coming Back Soon
              </button>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-[2rem] border p-6"
            style={{
              borderColor: 'var(--color-border)',
              background:
                theme === 'light'
                  ? 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(240,249,255,0.9))'
                  : 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(124,92,255,0.07))',
            }}
          >
            <ThemeShiftBackdrop variant="card" />
            <div
              className="sheen-pass"
              style={{
                animationDuration: theme === 'light' ? '8.6s' : '6.8s',
                background:
                  theme === 'light'
                    ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.52), rgba(214,244,255,0.28), transparent)'
                    : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.16), rgba(255,79,216,0.1), transparent)',
              }}
            />
            <div
              className="absolute right-[-1rem] top-[-1rem] h-24 w-24 rounded-full blur-3xl"
              style={{
                background:
                  theme === 'light'
                    ? 'rgba(56,189,248,0.18)'
                    : 'rgba(255,79,216,0.16)',
              }}
            />

            {theme === 'light' ? (
              <div className="relative z-10 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="flex size-10 items-center justify-center rounded-full bg-white">
                      <PetalIcon className="size-5 text-rose-300" />
                    </div>
                    <div className="mt-3 flex size-14 items-center justify-center rounded-full bg-sky-100">
                      <SnowflakeIcon className="size-6 text-sky-400" />
                    </div>
                    <div className="flex size-9 items-center justify-center rounded-full bg-white/90">
                      <PetalIcon className="size-4 text-pink-200" />
                    </div>
                  </div>
                  <div className="rounded-[1.4rem] border border-sky-100 bg-white/90 px-4 py-3 text-sm font-semibold text-sky-700">
                    BRB — polishing resume
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-[1.6rem] border border-sky-100 bg-white/80 px-4 py-5">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-sky-500">
                      Maintenance note
                    </div>
                    <div className="mt-2 font-display text-2xl font-bold tracking-[-0.04em] text-slate-800">
                      Work is still very much active.
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                      <PetalIcon className="size-4 text-rose-300" />
                      <SnowflakeIcon className="size-4 text-sky-300" />
                      Sakura breeze outside, shipping energy still on.
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <PetalIcon className="size-6 rotate-[-14deg] text-rose-300" />
                    <SnowflakeIcon className="size-5 text-sky-400" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative z-10 space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-fuchsia-200">
                  <SparkIcon className="size-4" />
                  Resume is backstage — coming back soon
                </div>
                <div className="rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-white/8 to-transparent px-5 py-6">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
                    Backstage pass
                  </div>
                  <div className="mt-3 font-display text-3xl font-bold tracking-[-0.05em] text-white">
                    Temporary hold
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                    The downloadable file is off-stage for cleanup, but the live portfolio still
                    shows the work, context, and delivery range.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-fuchsia-100/80">
                    <StarSparkIcon className="size-4 text-fuchsia-200" />
                    <JellyfishIcon className="size-4 text-cyan-200" />
                    Midnight-set shimmer with jellyfish glow.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Reveal>
  )
}
