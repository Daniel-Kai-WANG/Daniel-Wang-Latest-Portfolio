import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { profile, profileBadgeRoles } from '../../data/profile'
import { useTheme } from '../../hooks/useTheme'
import { ThemeShiftBackdrop } from '../animation/ThemeShiftBackdrop'
import { getPrimaryCtaStyle } from '../common/primaryCta'
import { WorkflowFloatingMotifs } from './hero/WorkflowFloatingMotifs'
import {
  ArrowUpRightIcon,
  JellyfishIcon,
  SakuraIcon,
  SnowCrystalIcon,
  StarfishIcon,
  SunLowIcon,
} from '../common/Icons'

function WorkflowPanel() {
  const { theme } = useTheme()
  const reduceMotion = useReducedMotion()

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
        <div className="relative flex min-h-[4.5rem] items-start justify-center sm:min-h-0 sm:items-center sm:justify-between sm:gap-4">
          <div className="mx-auto max-w-[13.5rem] text-center sm:mx-0 sm:max-w-none sm:min-w-0 sm:flex-1 sm:pr-0 sm:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              {theme === 'light' ? 'FOCUS AREAS' : 'DEEP FOCUS'}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.04em] text-[var(--color-text)]">
              {theme === 'light'
                ? 'Where I can contribute'
                : 'Built across web, app, CMS, and workflow systems'}
            </h3>
          </div>
          <div
            className="absolute right-0 top-1 flex size-8 shrink-0 items-center justify-center rounded-2xl sm:static sm:size-12"
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

          {profile.workflow.map(({role, desc}, index) => (
            <div key={role} className="relative flex items-start gap-4">
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
                  {role}
                </div>
                <div className="mt-1 text-sm leading-6 text-[var(--color-muted)]">
                  {desc}
                </div>
              </div>
            </div>
          ))}

          <WorkflowFloatingMotifs reduceMotion={Boolean(reduceMotion)} theme={theme} />
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
      className="home-hero-shell relative overflow-hidden rounded-[2.25rem] border px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        setGlow({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
        })
      }}
      style={{
        backgroundColor:
          theme === 'light' ? 'rgba(248, 252, 255, 0.76)' : 'rgba(8, 16, 33, 0.72)',
        borderColor: 'var(--color-border)',
        boxShadow: 'var(--surface-shadow)',
      }}
    >
      <div className="home-hero-atmosphere absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="home-hero-layer absolute inset-0 opacity-90"
          style={{
            opacity: theme === 'light' ? 1 : 0,
            background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(255,214,235,0.28), transparent 34%)`,
            transform: theme === 'light' ? 'translateY(0) scale(1)' : 'translateY(-4px) scale(0.995)',
            filter: theme === 'light' ? 'none' : 'blur(2px)',
          }}
        />
        <div
          className="home-hero-layer absolute inset-0 opacity-90"
          style={{
            opacity: theme === 'dark' ? 1 : 0,
            background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(128,199,255,0.18), rgba(133,120,255,0.1), transparent 34%)`,
            transform: theme === 'dark' ? 'translateY(0) scale(1)' : 'translateY(8px) scale(1.01)',
            filter: theme === 'dark' ? 'saturate(1.05)' : 'blur(2px)',
          }}
        />
        <div
          className="home-hero-layer absolute left-[-4rem] top-[-2rem] h-40 w-40 rounded-full blur-3xl"
          style={{
            opacity: theme === 'light' ? 1 : 0,
            background: 'rgba(56, 189, 248, 0.16)',
            transform: theme === 'light' ? 'translate3d(0,0,0)' : 'translate3d(-10px,-6px,0)',
          }}
        />
        <div
          className="home-hero-layer absolute left-[-4rem] top-[-2rem] h-40 w-40 rounded-full blur-3xl"
          style={{
            opacity: theme === 'dark' ? 1 : 0,
            background: 'rgba(128, 199, 255, 0.14)',
            transform: theme === 'dark' ? 'translate3d(0,0,0)' : 'translate3d(10px,6px,0)',
          }}
        />
        <div
          className="home-hero-layer absolute bottom-[-5rem] right-[-2rem] h-56 w-56 rounded-full blur-3xl"
          style={{
            opacity: theme === 'light' ? 1 : 0,
            background: 'rgba(253, 186, 116, 0.16)',
            transform: theme === 'light' ? 'translate3d(0,0,0)' : 'translate3d(10px,8px,0)',
          }}
        />
        <div
          className="home-hero-layer absolute bottom-[-5rem] right-[-2rem] h-56 w-56 rounded-full blur-3xl"
          style={{
            opacity: theme === 'dark' ? 1 : 0,
            background: 'rgba(133, 120, 255, 0.16)',
            transform: theme === 'dark' ? 'translate3d(0,0,0)' : 'translate3d(-10px,-8px,0)',
          }}
        />
        <div
          className="home-hero-layer absolute inset-x-0 top-0 h-px"
          style={{
            opacity: theme === 'light' ? 1 : 0,
            background:
              'linear-gradient(90deg, transparent, rgba(246,168,200,0.8), rgba(186,230,253,0.9), transparent)',
          }}
        />
        <div
          className="home-hero-layer absolute inset-x-0 top-0 h-px"
          style={{
            opacity: theme === 'dark' ? 1 : 0,
            background:
              'linear-gradient(90deg, transparent, rgba(255,178,154,0.54), rgba(128,199,255,0.72), rgba(133,120,255,0.72), transparent)',
          }}
        />
      </div>

      {theme === 'light' ? (
        <>
          <SakuraIcon className="absolute right-16 top-20 size-5 rotate-[12deg] opacity-80" />
          <SnowCrystalIcon className="absolute size-7 opacity-80 -top-9 -right-[18.5rem] sm:-right-[68rem] sm:-top-[3.75rem]" />
        </>
      ) : (
        <>
          <StarfishIcon variant="pink" className="absolute right-4 top-12 size-8 rotate-[18deg] opacity-70 sm:size-10 sm:top-7" />
        </>
      )}

      <div className="relative z-10 -mt-10 grid gap-8 sm:-mt-12 lg:-mt-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <div>
          <div
            className="relative z-10 inline-flex items-start gap-2 rounded-full border px-4 py-2 text-xs font-semibold sm:text-sm"
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
            <div className="max-w-[18.5rem] leading-[1.35] sm:max-w-none">
              <div className="sm:hidden">
                {profileBadgeRoles[0]} · {profileBadgeRoles[1]} ·
                <br />
                {profileBadgeRoles[2]}
              </div>
              <div className="hidden sm:block">{profile.badge}</div>
            </div>
          </div>

          <div className="relative mt-6 max-w-3xl">
            {theme === 'light' ? (
              <SakuraIcon className="absolute -left-2 -top-[4rem] z-0 size-7 rotate-[-18deg] opacity-90 sm:-left-4" />
            ) : (
              <JellyfishIcon className="absolute right-2 top-[-3.2rem] z-0 size-8 -rotate-[16deg] text-cyan-300/65 sm:left-[24.5rem]" />
            )}
            <h1 className="relative z-10 font-display text-4xl font-bold leading-[0.98] tracking-[-0.06em] text-[var(--color-text)] sm:text-5xl lg:text-[4.3rem]">
              {profile.headline}
            </h1>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
            {profile.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={profile.primaryCta.href}
              className="home-hero-cta inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold shadow-soft"
              style={getPrimaryCtaStyle(theme)}
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
