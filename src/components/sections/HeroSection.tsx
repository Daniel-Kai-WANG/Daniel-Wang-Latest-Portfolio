import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { profile } from '../../data/profile'
import { useTheme } from '../../hooks/useTheme'
import { ThemeShiftBackdrop } from '../animation/ThemeShiftBackdrop'
import {
  ArrowUpRightIcon,
  JellyfishIcon,
  SakuraIcon,
  SnowCrystalIcon,
  StarfishIcon,
  SunLowIcon,
  TablerMoonIcon,
} from '../common/Icons'

function WorkflowPanel() {
  const { theme } = useTheme()
  const reduceMotion = useReducedMotion()
  const steps = theme === 'light' ? profile.workflowLight : profile.workflowDark

  return (
    <div
      className="relative overflow-hidden rounded-[2rem] border p-6 sm:p-7"
      style={{
        background: 'var(--hero-panel-background)',
        borderColor: 'var(--color-border)',
        boxShadow: 'var(--surface-shadow)',
      }}
    >
      <ThemeShiftBackdrop variant="card" />
      <div className="absolute inset-0 opacity-50 [background-size:24px_24px] bg-hero-grid" />
      <div
        className="absolute right-4 top-4 size-28 rounded-full blur-3xl"
        style={{
          background:
            theme === 'light'
              ? 'rgba(56, 189, 248, 0.22)'
              : 'rgba(128, 199, 255, 0.16)',
        }}
      />
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              {theme === 'light' ? 'Seasonal workflow' : 'Ocean workflow'}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.04em] text-[var(--color-text)]">
              {theme === 'light'
                ? 'From brief to shipped flow'
                : 'A delivery pipeline with tidal flow'}
            </h3>
          </div>
          <div
            className="flex size-12 items-center justify-center rounded-2xl"
            style={{
              background:
                theme === 'light'
                  ? 'rgba(255,255,255,0.72)'
                  : 'rgba(255,255,255,0.06)',
            }}
          >
            {theme === 'light' ? (
              <div className="relative flex items-center justify-center">
                <SakuraIcon className="size-5 -rotate-[10deg]" />
                <SnowCrystalIcon className="absolute -right-2 -top-1 size-3.5" />
              </div>
            ) : (
              <StarfishIcon variant="pink" className="size-5 rotate-[10deg]" />
            )}
          </div>
        </div>

        <div className="relative mt-8 space-y-4">
          <div
            className="absolute left-[17px] top-1 h-[calc(100%-0.5rem)] w-px"
            style={{
              background:
                theme === 'light'
                  ? 'linear-gradient(180deg, rgba(37,99,235,0.35), rgba(56,189,248,0.12))'
                  : 'linear-gradient(180deg, rgba(241,154,201,0.3), rgba(133,120,255,0.22))',
            }}
          />

          {steps.map((step, index) => (
            <div key={step} className="relative flex items-start gap-4">
              <div
                className="relative z-10 mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border"
                style={{
                  borderColor:
                    theme === 'light'
                      ? 'rgba(37, 99, 235, 0.18)'
                      : 'rgba(255, 255, 255, 0.14)',
                  background:
                    theme === 'light'
                      ? 'rgba(255,255,255,0.92)'
                      : 'rgba(255,255,255,0.06)',
                }}
              >
                <span className="text-xs font-bold text-[var(--color-text)]">
                  0{index + 1}
                </span>
              </div>
              <div
                className="min-w-0 flex-1 rounded-[1.4rem] border px-4 py-3"
                style={{
                  borderColor:
                    theme === 'light'
                      ? 'rgba(189,231,255,0.88)'
                      : 'rgba(255,255,255,0.12)',
                  background:
                    theme === 'light'
                      ? 'rgba(255,255,255,0.7)'
                      : 'rgba(255,255,255,0.04)',
                }}
              >
                <div className="text-sm font-semibold text-[var(--color-text)]">
                  {step}
                </div>
                <div className="mt-1 text-sm leading-6 text-[var(--color-muted)]">
                  {theme === 'light'
                    ? 'Keep requirements visible, structure the workflow, and reduce delivery friction.'
                    : 'Translate complex tasks into a calm sequence with product, API, and content alignment.'}
                </div>
              </div>
            </div>
          ))}

          {!reduceMotion && (
            <motion.div
              className="pointer-events-none absolute left-8 top-3"
              animate={
                theme === 'light'
                  ? {
                      x: [0, 14, -6, 10, 0],
                      y: [0, 34, 88, 138, 168],
                      rotate: [-10, 16, -18, 10, -8],
                    }
                  : { x: [0, 12, -3, 0], y: [0, 34, 88, 144] }
              }
              transition={{ duration: 6.6, ease: 'easeInOut', repeat: Infinity }}
            >
              {theme === 'light' ? (
                <SakuraIcon className="size-4" />
              ) : (
                <StarfishIcon variant="light" className="size-4 rotate-[14deg]" />
              )}
            </motion.div>
          )}
        </div>

        <div className="mt-7 grid grid-cols-3 gap-3">
          {[45, 72, 58].map((value, index) => (
            <div
              key={value}
              className="overflow-hidden rounded-2xl border px-3 py-4"
              style={{
                borderColor:
                  theme === 'light'
                    ? 'rgba(189,231,255,0.88)'
                    : 'rgba(255,255,255,0.12)',
                background:
                  theme === 'light'
                    ? 'rgba(255,255,255,0.78)'
                    : 'rgba(255,255,255,0.05)',
              }}
            >
              <div className="flex h-10 items-end gap-1.5">
                {[0.42, 0.68, value / 100, 0.82].map((height, barIndex) => (
                  <div
                    key={`${value}-${barIndex}`}
                    className="flex-1 rounded-full"
                    style={{
                      height: `${height * 100}%`,
                      background:
                        theme === 'light'
                          ? 'linear-gradient(180deg, rgba(56,189,248,0.35), rgba(37,99,235,0.75))'
                          : 'linear-gradient(180deg, rgba(128,199,255,0.6), rgba(133,120,255,0.88))',
                    }}
                  />
                ))}
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                {index === 0
                  ? 'Clarity'
                  : index === 1
                    ? 'Automation'
                    : 'Delivery'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  const { theme } = useTheme()
  const [glow, setGlow] = useState({ x: 24, y: 20 })

  return (
    <section
      className="relative overflow-hidden rounded-[2.25rem] border px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        setGlow({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
        })
      }}
      style={{
        background:
          theme === 'light'
            ? 'linear-gradient(180deg, rgba(248,252,255,0.9), rgba(255,241,247,0.8), rgba(232,245,255,0.76))'
            : 'linear-gradient(180deg, rgba(8,16,33,0.9), rgba(12,22,47,0.82), rgba(18,20,49,0.78))',
        borderColor: 'var(--color-border)',
        boxShadow: 'var(--surface-shadow)',
      }}
    >
      <ThemeShiftBackdrop />
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            theme === 'light'
              ? `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(255,214,235,0.28), transparent 34%)`
              : `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(128,199,255,0.18), rgba(133,120,255,0.1), transparent 34%)`,
        }}
      />
      <div
        className="absolute left-[-4rem] top-[-2rem] h-40 w-40 rounded-full blur-3xl"
        style={{
          background:
            theme === 'light'
              ? 'rgba(56, 189, 248, 0.16)'
              : 'rgba(128, 199, 255, 0.14)',
        }}
      />
      <div
        className="absolute bottom-[-5rem] right-[-2rem] h-56 w-56 rounded-full blur-3xl"
        style={{
          background:
            theme === 'light'
              ? 'rgba(253, 186, 116, 0.16)'
              : 'rgba(133, 120, 255, 0.16)',
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            theme === 'light'
              ? 'linear-gradient(90deg, transparent, rgba(246,168,200,0.8), rgba(186,230,253,0.9), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(255,178,154,0.54), rgba(128,199,255,0.72), rgba(133,120,255,0.72), transparent)',
        }}
      />

      {theme === 'light' ? (
        <>
          <SakuraIcon className="absolute left-8 top-10 size-7 rotate-[-18deg]" />
          <SakuraIcon className="absolute right-16 top-20 size-5 rotate-[12deg] opacity-80" />
          <SnowCrystalIcon className="absolute right-8 top-10 size-5 opacity-80" />
        </>
      ) : (
        <>
          <TablerMoonIcon className="absolute left-8 top-10 size-6 -rotate-[16deg] text-slate-100/76" />
          <StarfishIcon variant="pink" className="absolute right-10 top-16 size-10 rotate-[18deg] opacity-70" />
          <JellyfishIcon className="absolute bottom-8 right-8 size-12 text-cyan-200/42" />
          <StarfishIcon variant="light" className="absolute left-8 top-24 size-8 -rotate-[16deg] opacity-65" />
        </>
      )}

      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold"
            style={{
              borderColor: 'var(--color-border)',
              background: 'var(--pill-background)',
              color: 'var(--pill-text)',
            }}
          >
            {theme === 'light' ? (
              <SunLowIcon className="size-4 text-amber-500" />
            ) : (
              <StarfishIcon variant="light" className="size-4 rotate-[10deg]" />
            )}
            {profile.badge}
          </div>

          <p className="mt-5 flex items-center gap-2 text-sm font-medium text-[var(--color-muted)]">
            {theme === 'light' ? (
              <>
                <SakuraIcon className="size-4" />
                Spring-sky clarity with sakura drift and ice-light highlights.
              </>
            ) : (
              <>
                <StarfishIcon variant="pink" className="size-4 rotate-[12deg]" />
                Moonlit ocean depth with coral glow, tide-light, and drifting reef details.
              </>
            )}
          </p>

          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[0.98] tracking-[-0.06em] text-[var(--color-text)] sm:text-5xl lg:text-[4.3rem]">
            {profile.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
            {profile.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={profile.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-soft"
              style={{
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
              }}
            >
              {profile.primaryCta.label}
              <ArrowUpRightIcon className="size-4" />
            </a>
            <a
              href={profile.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold text-[var(--color-text)]"
              style={{
                borderColor: 'var(--color-border)',
                background: 'color-mix(in srgb, var(--color-surface) 82%, transparent)',
              }}
            >
              {profile.secondaryCta.label}
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {profile.heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="rounded-[1.7rem] border px-4 py-4"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 * index, duration: 0.7 }}
                style={{
                  borderColor: 'var(--color-border)',
                  background:
                    theme === 'light'
                      ? 'rgba(255,255,255,0.84)'
                      : 'rgba(255,255,255,0.04)',
                }}
              >
                <div className="font-display text-3xl font-bold tracking-[-0.05em] text-[var(--color-text)]">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <WorkflowPanel />
      </div>
    </section>
  )
}
