import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { experiences } from '../../data/experience'
import { useTheme } from '../../hooks/useTheme'
import { Reveal } from '../animation/Reveal'
import { ThemeShiftBackdrop } from '../animation/ThemeShiftBackdrop'
import { JellyfishIcon, SakuraIcon, StarfishIcon } from '../common/Icons'
import { SectionHeading } from '../common/SectionHeading'

const roleMarks: Record<string, string> = {
  'Full Stack Developer': 'FSD',
  'Mobile App Developer Freelancer': 'MADF',
  'IT Developer Intern': 'IDI',
  'Front End Developer Intern': 'FEDI',
}

const companyMarks: Record<string, string> = {
  Actualisation: 'ACT',
  'Golf Wizard Co.': 'GW',
  'Digital 8': 'D8',
  'Easy Skill': 'ES',
  Phonely: 'PH',
}

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const experienceNodes = [
  {
    x: 104,
    y: 118,
    lightPath: 'M178 254 C168 220 148 172 104 118',
    darkPath: 'M178 246 C164 220 146 190 134 156 C126 140 118 128 104 118',
  },
  {
    x: 214,
    y: 84,
    lightPath: 'M182 248 C194 208 206 152 214 84',
    darkPath: 'M198 238 C206 208 212 170 216 132 C218 112 218 96 214 84',
  },
  {
    x: 324,
    y: 128,
    lightPath: 'M188 246 C230 214 272 170 328 126',
    darkPath: 'M210 238 C236 216 264 190 290 162 C304 148 314 136 324 128',
  },
  {
    x: 292,
    y: 258,
    lightPath: 'M186 300 C226 286 260 292 292 312',
    darkPath: 'M220 250 C242 248 260 250 274 256 C284 260 288 260 292 258',
  },
  {
    x: 132,
    y: 234,
    lightPath: 'M182 316 C164 320 146 326 126 334',
    darkPath: 'M178 248 C160 234 146 226 132 234',
  },
] as const

const lightRootPaths = [
  'M188 382 C152 362 120 352 86 346',
  'M188 382 C228 360 270 348 326 340',
]

const darkCoralPaths = [
  { path: 'M204 366 C210 328 210 288 204 248 C198 212 186 172 170 128', width: 16, opacity: 0.98 },
  { path: 'M172 182 C158 170 146 154 138 138', width: 8, opacity: 0.84 },
  { path: 'M148 158 C138 148 126 136 118 126', width: 6, opacity: 0.8 },
  { path: 'M206 206 C216 184 224 160 232 132', width: 8, opacity: 0.82 },
  { path: 'M216 224 C240 208 264 188 286 162 C300 146 312 134 324 128', width: 9, opacity: 0.88 },
  { path: 'M266 178 C278 168 292 152 302 136', width: 6, opacity: 0.78 },
  { path: 'M228 246 C248 246 266 250 280 260', width: 7, opacity: 0.8 },
  { path: 'M190 220 C176 216 162 220 150 228', width: 6, opacity: 0.74 },
  { path: 'M206 290 C222 300 238 314 252 332', width: 7, opacity: 0.78 },
  { path: 'M194 296 C180 304 168 316 158 330', width: 7, opacity: 0.74 },
] as const

function getFruitLabel(role: string, company: string) {
  const roleMark = roleMarks[role] ?? role
  const companyMark = companyMarks[company] ?? company

  return `${roleMark} · ${companyMark}`
}

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
  const reduceMotion = useReducedMotion()
  const [activeFruit, setActiveFruit] = useState(2)
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
          <SectionHeading
            title="Experience journey"
            description={
              isLight
                ? 'Hover on desktop or tap on mobile to switch the active blossom. The left panel carries the full role story while the right side keeps the orchard structure readable.'
                : 'Hover on desktop or tap on mobile to switch the active coral pod. The left panel carries the full role story while the right side keeps the reef skeleton readable.'
            }
          />

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
                    <div className="flex items-center gap-2">
                      <JellyfishIcon className="size-6 text-sky-200" />
                      <StarfishIcon variant="light" className="size-5 rotate-[10deg]" />
                    </div>
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
                  {isLight
                    ? 'Pick another blossom on the right to move through the orchard and load a new role story.'
                    : 'Pick another coral pod on the right to travel across the reef and load a new role story.'}
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
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      {isLight ? 'Orchard mode' : 'Coral mode'}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                      {isLight
                        ? 'The blossoms stay attached to a single trunk and branch rhythm, while the full delivery story stays anchored on the left.'
                        : 'The night version shifts to a staghorn coral layout with secondary forks, tight pod labels, and a branch-first reveal.'}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-[var(--color-muted)]">
                    {isLight ? (
                      <>
                        <SakuraIcon className="size-5" />
                        <SakuraIcon className="size-4 opacity-75" />
                      </>
                    ) : (
                      <>
                        <JellyfishIcon className="size-5 text-sky-200/80" />
                        <div className="size-2.5 rounded-full bg-violet-300/60" />
                      </>
                    )}
                  </div>
                </div>

                <div className="relative mt-6 h-[37rem] sm:h-[39rem]">
                  <svg
                    key={`experience-journey-${theme}`}
                    viewBox="0 0 420 420"
                    className="absolute inset-0 z-0 h-full w-full"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="experience-light-trunk" x1="0%" x2="0%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#916343" stopOpacity="0.92" />
                        <stop offset="100%" stopColor="#6d482f" stopOpacity="0.98" />
                      </linearGradient>
                      <linearGradient id="experience-dark-coral" x1="0%" x2="100%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#90d4ff" stopOpacity="0.92" />
                        <stop offset="58%" stopColor="#6eb8ff" stopOpacity="0.86" />
                        <stop offset="100%" stopColor="#8a7aff" stopOpacity="0.78" />
                      </linearGradient>
                    </defs>

                    {isLight ? (
                      <>
                        <motion.path
                          d="M188 382 C188 334 186 294 180 252 C172 206 160 162 144 118"
                          fill="none"
                          stroke="url(#experience-light-trunk)"
                          strokeLinecap="round"
                          strokeWidth="18"
                          initial={{ pathLength: 0, opacity: 0.38 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={reduceMotion ? { duration: 0 } : { duration: 0.96, ease: 'easeOut' }}
                        />

                        {lightRootPaths.map((path, index) => (
                          <motion.path
                            key={path}
                            d={path}
                            fill="none"
                            stroke={index === 0 ? 'rgba(145, 105, 75, 0.82)' : 'rgba(155, 112, 82, 0.76)'}
                            strokeLinecap="round"
                            strokeWidth="10"
                            initial={{ pathLength: 0, opacity: 0.22 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={
                              reduceMotion
                                ? { duration: 0 }
                                : { duration: 0.68, delay: 0.18 + index * 0.08, ease: 'easeOut' }
                            }
                          />
                        ))}
                      </>
                    ) : (
                      darkCoralPaths.map((segment, index) => (
                        <motion.path
                          key={segment.path}
                          d={segment.path}
                          fill="none"
                          stroke="url(#experience-dark-coral)"
                          strokeLinecap="round"
                          strokeWidth={segment.width}
                          opacity={segment.opacity}
                          initial={{ pathLength: 0, opacity: segment.opacity * 0.4 }}
                          whileInView={{ pathLength: 1, opacity: segment.opacity }}
                          viewport={{ once: true, amount: 0.35 }}
                          transition={
                            reduceMotion
                              ? { duration: 0 }
                              : { duration: 0.62, delay: index * 0.08, ease: 'easeOut' }
                          }
                        />
                      ))
                    )}

                    {experienceNodes.map((node, index) => (
                      <motion.path
                        key={`${theme}-${node.x}-${node.y}`}
                        d={isLight ? node.lightPath : node.darkPath}
                        fill="none"
                        stroke={
                          activeFruit === index
                            ? isLight
                              ? 'rgba(221, 96, 150, 0.94)'
                              : 'rgba(164, 210, 255, 0.98)'
                            : isLight
                              ? 'rgba(143, 100, 66, 0.8)'
                              : 'rgba(112, 159, 236, 0.72)'
                        }
                        strokeLinecap="round"
                        strokeWidth={activeFruit === index ? (isLight ? 10 : 8) : isLight ? 8 : 7}
                        initial={{ pathLength: 0, opacity: 0.32 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={
                          reduceMotion
                            ? { duration: 0 }
                            : { duration: 0.52, delay: isLight ? 0.34 + index * 0.08 : 0.82 + index * 0.06, ease: 'easeOut' }
                        }
                      />
                    ))}
                  </svg>

                  <div
                    className="absolute bottom-[9%] left-1/2 h-14 w-52 -translate-x-1/2 rounded-full blur-2xl"
                    style={{
                      background: isLight
                        ? 'rgba(170, 220, 152, 0.28)'
                        : 'rgba(100, 126, 255, 0.18)',
                    }}
                  />

                  {experiences.map((item, index) => {
                    const node = experienceNodes[index]
                    const isActive = activeFruit === index

                    return (
                      <div
                        key={`${item.company}-${item.date}`}
                        className="absolute"
                        style={{
                          top: `${(node.y / 420) * 100}%`,
                          left: `${(node.x / 420) * 100}%`,
                        }}
                      >
                        <motion.button
                          type="button"
                          aria-pressed={isActive}
                          onMouseEnter={() => setActiveFruit(index)}
                          onFocus={() => setActiveFruit(index)}
                          onClick={() => setActiveFruit(index)}
                          className={`relative z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center border px-3 py-2 text-center ${
                            isLight
                              ? 'min-h-[74px] w-[112px] rounded-[1.6rem] sm:min-h-[92px] sm:w-[152px] sm:rounded-[2rem] sm:px-4 sm:py-3'
                              : 'min-h-[62px] w-[92px] rounded-[1.35rem] sm:min-h-[72px] sm:w-[112px] sm:rounded-[1.55rem]'
                          }`}
                          initial={{ opacity: 0, scale: 0.72, y: 10 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={
                            reduceMotion
                              ? { duration: 0 }
                              : {
                                  type: 'spring',
                                  stiffness: 220,
                                  damping: 18,
                                  delay: isLight ? 0.86 + index * 0.08 : 1.22 + index * 0.06,
                                }
                          }
                          whileHover={reduceMotion ? undefined : { y: -3, scale: 1.03 }}
                          style={{
                            borderColor: isActive
                              ? isLight
                                ? 'rgba(246, 168, 200, 0.76)'
                                : 'rgba(164, 210, 255, 0.72)'
                              : 'var(--pill-border)',
                            background: isLight
                              ? isActive
                                ? 'linear-gradient(180deg, rgba(255,232,242,1), rgba(247,190,214,0.98))'
                                : 'linear-gradient(180deg, rgba(255,242,247,0.96), rgba(250,214,228,0.95))'
                              : isActive
                                ? 'linear-gradient(180deg, rgba(34,82,146,0.98), rgba(18,30,68,0.98))'
                                : 'linear-gradient(180deg, rgba(18,40,82,0.94), rgba(11,22,46,0.97))',
                            boxShadow: isActive
                              ? isLight
                                ? '0 18px 34px rgba(244,114,182,0.24)'
                                : '0 18px 34px rgba(104,142,255,0.24)'
                              : isLight
                                ? '0 14px 30px rgba(244,114,182,0.12)'
                                : '0 14px 30px rgba(8,18,34,0.3)',
                            opacity: isLight || isActive ? 1 : 0.94,
                          }}
                        >
                          <motion.div
                            className={`absolute inset-[-8px] ${isLight ? 'rounded-[999px]' : 'rounded-[1.5rem]'}`}
                            animate={{
                              opacity: isActive ? 1 : 0,
                              scale: isActive ? 1.05 : 0.9,
                            }}
                            transition={reduceMotion ? { duration: 0 } : { duration: 0.28 }}
                            style={{
                              background: isLight
                                ? 'radial-gradient(circle, rgba(251,207,232,0.56), transparent 64%)'
                                : 'radial-gradient(circle, rgba(123,184,255,0.24), rgba(132,117,255,0.12), transparent 68%)',
                            }}
                          />

                          <div className="relative z-10">
                            {isLight ? (
                              <SakuraIcon className="mx-auto size-5 sm:size-7" />
                            ) : (
                              <StarfishIcon
                                variant={index % 2 === 0 ? 'pink' : 'light'}
                                className="mx-auto size-5 rotate-[10deg] sm:size-6"
                              />
                            )}
                            <span className="mt-2 block text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--color-text)] sm:mt-3 sm:text-[11px] sm:tracking-[0.18em]">
                              {getFruitLabel(item.role, item.company)}
                            </span>
                          </div>
                        </motion.button>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-[var(--color-muted)]">
                  {isLight ? (
                    <>
                      <SakuraIcon className="size-4" />
                      <SakuraIcon className="size-3 opacity-75" />
                      Blossom shorthand on the right, full delivery span on the left.
                    </>
                  ) : (
                    <>
                      <StarfishIcon variant="pink" className="size-4 rotate-[10deg]" />
                      <div className="size-2 rounded-full bg-violet-300/70" />
                      Staghorn coral shorthand on the right, full delivery span on the left.
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  )
}
