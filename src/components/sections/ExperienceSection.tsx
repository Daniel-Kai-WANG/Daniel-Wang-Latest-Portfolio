import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { experiences } from '../../data/experience'
import { useTheme } from '../../hooks/useTheme'
import { Reveal } from '../animation/Reveal'
import { ThemeShiftBackdrop } from '../animation/ThemeShiftBackdrop'
import { SakuraIcon } from '../common/Icons'
import { CoralDecorPair } from './CoralDecorPair'
import { ExperienceJourneyGraph } from './ExperienceJourneyGraph'

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function formatExperienceRange(date: string) {
  const [startRaw, endRaw] = date.split('–').map((value) => value.trim())

  const formatPart = (value: string) => {
    if (/current/i.test(value)) {
      return 'Current'
    }

    const [month, year] = value.split('/')
    if (!month || !year) {
      return value
    }

    const monthLabel = monthNames[Number(month) - 1]
    return monthLabel ? `${monthLabel} ${year}` : value
  }

  return `${formatPart(startRaw)} - ${formatPart(endRaw)}`
}

function getExperiencePhase(date: string) {
  return /current/i.test(date) ? 'Current' : 'Completed'
}

export function ExperienceSection() {
  const { theme } = useTheme()
  const reduceMotion = useReducedMotion() ?? false
  const [activeFruit, setActiveFruit] = useState(0)
  const activeExperience = experiences[activeFruit]
  const isLight = theme === 'light'

  return (
    <Reveal>
      <section
        id="experience"
        className="section-frame relative overflow-visible px-5 py-8 sm:px-8 sm:py-10 lg:px-10"
      >
        <ThemeShiftBackdrop />

        <div className="relative z-10">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-[var(--color-text)] sm:text-4xl">
              Experience journey
            </h2>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(19rem,0.9fr)_minmax(0,1.1fr)] xl:items-start">
            <motion.article
              key={`${activeExperience.company}-${theme}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.28, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[2rem] border p-6 sm:p-7 xl:sticky xl:top-28"
              style={{
                borderColor: 'var(--color-border)',
                background: isLight
                  ? 'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(240,248,255,0.96), rgba(255,242,249,0.97))'
                  : 'linear-gradient(180deg, rgba(12,18,39,0.98), rgba(10,22,48,0.97), rgba(15,18,43,0.98))',
                boxShadow: 'var(--surface-shadow)',
              }}
            >
              <ThemeShiftBackdrop variant="card" />

              <div
                className="absolute inset-x-0 top-0 h-32"
                style={{
                  background: isLight
                    ? 'radial-gradient(circle at top left, rgba(244, 186, 218, 0.22), transparent 56%), radial-gradient(circle at top right, rgba(165, 220, 255, 0.24), transparent 58%)'
                    : 'radial-gradient(circle at top left, rgba(122, 185, 255, 0.16), transparent 50%), radial-gradient(circle at top right, rgba(132, 117, 255, 0.16), transparent 58%)',
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      {isLight ? 'Orchard detail' : 'Coral detail'}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-[var(--color-muted)]">
                      {formatExperienceRange(activeExperience.date)}
                    </p>
                  </div>

                  {isLight ? (
                    <div className="flex items-center gap-2">
                      <SakuraIcon className="size-7" />
                      <SakuraIcon className="size-5 opacity-80" />
                    </div>
                  ) : (
                    <CoralDecorPair starfishVariant="light" />
                  )}
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span
                    className="inline-flex rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]"
                    style={{
                      borderColor: 'var(--pill-border)',
                      background: 'var(--pill-background)',
                      color: 'var(--pill-text)',
                    }}
                  >
                    {getExperiencePhase(activeExperience.date)}
                  </span>
                  <span className="text-sm font-semibold text-[var(--color-muted)]">
                    {activeExperience.location}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-[2rem] font-bold leading-[1.02] tracking-[-0.06em] text-[var(--color-text)] sm:text-[2.35rem]">
                  {activeExperience.role}
                </h3>
                <p className="mt-3 text-lg font-semibold text-[var(--color-text)]">
                  {activeExperience.company}
                </p>

                <div
                  className="mt-6 rounded-[1.35rem] border px-4 py-4 text-sm font-semibold leading-7"
                  style={{
                    borderColor: 'var(--pill-border)',
                    background: isLight
                      ? 'linear-gradient(180deg, rgba(249,252,255,0.94), rgba(255,241,248,0.92))'
                      : 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(23,34,68,0.42))',
                    color: 'var(--pill-text)',
                  }}
                >
                  {activeExperience.metric}
                </div>

                <div className="mt-6 space-y-3">
                  {activeExperience.highlights.map((highlight) => (
                    <div key={highlight} className="flex gap-3 text-sm leading-7 text-[var(--color-muted)]">
                      <span
                        className="mt-2 size-2.5 shrink-0 rounded-full"
                        style={{
                          background: isLight
                            ? 'linear-gradient(135deg, #ee9fc8, #60b2f3)'
                            : 'linear-gradient(135deg, #7ab9ff, #8275ff)',
                        }}
                      />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {activeExperience.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border px-2.5 py-1 text-[11px] font-semibold"
                      style={{
                        borderColor: 'var(--pill-border)',
                        background: 'var(--pill-background)',
                        color: 'var(--pill-text)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-7 text-[var(--color-muted)]">
                  Use the journey map on the right to move through each role story while the left panel stays fixed.
                </p>
              </div>
            </motion.article>

            <div
              className="relative overflow-hidden rounded-[2rem] border px-4 py-5 sm:px-6 sm:py-6"
              style={{
                borderColor: 'var(--color-border)',
                background: isLight
                  ? 'linear-gradient(180deg, rgba(247,252,255,0.97), rgba(232,245,255,0.95), rgba(255,245,250,0.98))'
                  : 'linear-gradient(180deg, rgba(10,18,40,0.98), rgba(8,20,44,0.97), rgba(14,16,36,0.98))',
                boxShadow: 'var(--surface-shadow)',
              }}
            >
              <ThemeShiftBackdrop variant="card" />

              <div
                className="absolute inset-x-0 top-0 h-40"
                style={{
                  background: isLight
                    ? 'radial-gradient(circle at top, rgba(143, 214, 255, 0.28), transparent 64%)'
                    : 'radial-gradient(circle at top, rgba(106, 183, 255, 0.18), transparent 64%)',
                }}
              />

              <div className="relative z-10">
                <ExperienceJourneyGraph
                  activeIndex={activeFruit}
                  onSelect={setActiveFruit}
                  reduceMotion={reduceMotion}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  )
}
