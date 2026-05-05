import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { experiences } from '../../data/experience'
import { useTheme } from '../../hooks/useTheme'
import { Reveal } from '../animation/Reveal'
import { JellyfishIcon, SakuraIcon } from '../common/Icons'
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

const fruitNodes = [
  {
    x: 104,
    y: 118,
    lightPath: 'M178 254 C168 220 148 172 104 118',
    darkPath: 'M178 250 C160 230 142 198 132 170 C126 150 118 132 104 118',
  },
  {
    x: 214,
    y: 84,
    lightPath: 'M182 248 C194 208 206 152 214 84',
    darkPath: 'M192 248 C208 214 218 164 218 116 C218 102 218 92 214 84',
  },
  {
    x: 328,
    y: 126,
    lightPath: 'M188 246 C230 214 272 170 328 126',
    darkPath: 'M198 252 C236 222 272 184 304 150 C314 138 320 132 328 126',
  },
  {
    x: 292,
    y: 312,
    lightPath: 'M186 300 C226 286 260 292 292 312',
    darkPath: 'M198 298 C226 302 252 312 274 326 C282 330 288 324 292 312',
  },
  {
    x: 126,
    y: 334,
    lightPath: 'M182 316 C164 320 146 326 126 334',
    darkPath: 'M190 308 C170 314 152 324 138 338 C132 344 128 340 126 334',
  },
] as const

const lightRootPaths = [
  'M188 382 C152 362 120 352 86 346',
  'M188 382 C228 360 270 348 326 340',
]

const darkCoralPaths = [
  'M198 382 C202 328 202 292 194 246 C186 200 174 152 158 108',
  'M160 126 C150 142 142 156 138 172',
  'M210 168 C222 152 236 132 246 112',
  'M238 232 C262 204 286 174 314 146',
  'M226 286 C244 294 260 306 274 324',
  'M186 306 C168 314 152 326 138 340',
]

function getFruitLabel(role: string, company: string) {
  const roleMark = roleMarks[role] ?? role
  const companyMark = companyMarks[company] ?? company

  return `${roleMark} · ${companyMark}`
}

function formatExperienceRange(date: string) {
  const [startRaw, endRaw] = date.split('–').map((value) => value.trim())

  const formatPart = (value: string) => {
    if (/current/i.test(value)) {
      return '至今'
    }

    const [month, year] = value.split('/')
    if (!month || !year) {
      return value
    }

    return `${year} 年 ${Number(month)} 月`
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
        <div className="relative z-10">
          <SectionHeading
            title="Experience journey"
            description="Hover on desktop or tap on mobile to switch the active delivery path. The left panel holds the full time span and role story, while the right side becomes a seasonal growth structure."
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
                  ? 'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(242,249,255,0.96), rgba(255,244,249,0.97))'
                  : 'linear-gradient(180deg, rgba(14,18,35,0.98), rgba(10,22,42,0.96), rgba(11,17,30,0.98))',
                boxShadow: 'var(--surface-shadow)',
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-32"
                style={{
                  background: isLight
                    ? 'radial-gradient(circle at top left, rgba(244, 186, 218, 0.2), transparent 56%), radial-gradient(circle at top right, rgba(165, 220, 255, 0.24), transparent 58%)'
                    : 'radial-gradient(circle at top left, rgba(48, 189, 255, 0.16), transparent 50%), radial-gradient(circle at top right, rgba(104, 122, 255, 0.14), transparent 58%)',
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
                      <JellyfishIcon className="size-6 text-cyan-200" />
                      <div className="size-2 rounded-full bg-cyan-200/70" />
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
                      ? 'linear-gradient(180deg, rgba(249,252,255,0.94), rgba(255,243,248,0.9))'
                      : 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(20,34,56,0.42))',
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
                            ? 'linear-gradient(135deg, #fb7185, #f472b6)'
                            : 'linear-gradient(135deg, #7dd3fc, #22d3ee)',
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
                    ? 'Pick a blossom on the right to change the active path and read another delivery span.'
                    : 'Pick a coral pod on the right to move through the underwater delivery timeline.'}
                </p>
              </div>
            </motion.article>

            <div
              className="relative overflow-hidden rounded-[2rem] border px-4 py-5 sm:px-6 sm:py-6"
              style={{
                borderColor: 'var(--color-border)',
                background: isLight
                  ? 'linear-gradient(180deg, rgba(247,252,255,0.97), rgba(232,245,255,0.95), rgba(248,252,255,0.98))'
                  : 'linear-gradient(180deg, rgba(10,18,35,0.98), rgba(8,20,38,0.96), rgba(12,15,29,0.98))',
                boxShadow: 'var(--surface-shadow)',
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-40"
                style={{
                  background: isLight
                    ? 'radial-gradient(circle at top, rgba(143, 214, 255, 0.3), transparent 64%)'
                    : 'radial-gradient(circle at top, rgba(74, 174, 255, 0.16), transparent 64%)',
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
                        ? 'The right side keeps the growth structure only. Hover or tap any blossom pod to load the full role story on the left.'
                        : 'The night version swaps the branch logic for a coral skeleton, but the interaction stays the same.'}
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
                        <JellyfishIcon className="size-5 text-cyan-200/80" />
                        <div className="size-2.5 rounded-full bg-cyan-200/60" />
                      </>
                    )}
                  </div>
                </div>

                <div className="relative mt-6 h-[39rem] sm:h-[41rem]">
                  <svg
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
                        <stop offset="0%" stopColor="#88d3ff" stopOpacity="0.9" />
                        <stop offset="55%" stopColor="#57b3ff" stopOpacity="0.84" />
                        <stop offset="100%" stopColor="#4674ff" stopOpacity="0.74" />
                      </linearGradient>
                    </defs>

                    {isLight ? (
                      <>
                        <path
                          d="M188 382 C188 334 186 294 180 252 C172 206 160 162 144 118"
                          fill="none"
                          stroke="url(#experience-light-trunk)"
                          strokeLinecap="round"
                          strokeWidth="18"
                        />

                        {lightRootPaths.map((path, index) => (
                          <path
                            key={path}
                            d={path}
                            fill="none"
                            stroke={index === 0 ? 'rgba(145, 105, 75, 0.82)' : 'rgba(155, 112, 82, 0.76)'}
                            strokeLinecap="round"
                            strokeWidth="10"
                          />
                        ))}
                      </>
                    ) : (
                      darkCoralPaths.map((path, index) => (
                        <path
                          key={path}
                          d={path}
                          fill="none"
                          stroke="url(#experience-dark-coral)"
                          strokeLinecap="round"
                          strokeWidth={index === 0 ? 15 : 8}
                          opacity={index === 0 ? 0.98 : 0.84}
                        />
                      ))
                    )}

                    {fruitNodes.map((node, index) => (
                      <path
                        key={`${theme}-${node.x}-${node.y}`}
                        d={isLight ? node.lightPath : node.darkPath}
                        fill="none"
                        stroke={
                          activeFruit === index
                            ? isLight
                              ? 'rgba(213,95,146,0.94)'
                              : 'rgba(129, 228, 255, 0.98)'
                            : isLight
                              ? 'rgba(143, 100, 66, 0.8)'
                              : 'rgba(110, 170, 230, 0.68)'
                        }
                        strokeLinecap="round"
                        strokeWidth={activeFruit === index ? 10 : 8}
                      />
                    ))}
                  </svg>

                  <div
                    className="absolute bottom-[7%] left-1/2 h-14 w-52 -translate-x-1/2 rounded-full blur-2xl"
                    style={{
                      background: isLight
                        ? 'rgba(163, 224, 134, 0.3)'
                        : 'rgba(46, 145, 190, 0.2)',
                    }}
                  />

                  {experiences.map((item, index) => {
                    const node = fruitNodes[index]
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
                          className="relative z-10 flex min-h-[74px] w-[112px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[1.6rem] border px-3 py-2 text-center sm:min-h-[92px] sm:w-[152px] sm:rounded-[2rem] sm:px-4 sm:py-3"
                          initial={false}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={reduceMotion ? { duration: 0 } : { duration: 0.28, ease: 'easeOut' }}
                          whileHover={reduceMotion ? undefined : { y: -3, scale: 1.03 }}
                          style={{
                            borderColor: isActive
                              ? isLight
                                ? 'rgba(246,168,200,0.76)'
                                : 'rgba(135,225,255,0.7)'
                              : 'var(--pill-border)',
                            background: isLight
                              ? isActive
                                ? 'linear-gradient(180deg, rgba(255,232,242,1), rgba(247,190,214,0.98))'
                                : 'linear-gradient(180deg, rgba(255,242,247,0.96), rgba(250,214,228,0.95))'
                              : isActive
                                ? 'linear-gradient(180deg, rgba(28,76,122,0.98), rgba(12,30,54,0.98))'
                                : 'linear-gradient(180deg, rgba(18,52,84,0.92), rgba(10,24,44,0.95))',
                            boxShadow: isActive
                              ? isLight
                                ? '0 18px 34px rgba(244,114,182,0.24)'
                                : '0 18px 34px rgba(56,189,248,0.24)'
                              : isLight
                                ? '0 14px 30px rgba(244,114,182,0.12)'
                                : '0 14px 30px rgba(8,18,34,0.3)',
                            opacity: activeFruit !== index ? 0.92 : 1,
                          }}
                        >
                          <motion.div
                            className="absolute inset-[-8px] rounded-[999px]"
                            animate={{
                              opacity: isActive ? 1 : 0,
                              scale: isActive ? 1.05 : 0.88,
                            }}
                            transition={reduceMotion ? { duration: 0 } : { duration: 0.28 }}
                            style={{
                              background: isLight
                                ? 'radial-gradient(circle, rgba(251,207,232,0.56), transparent 64%)'
                                : 'radial-gradient(circle, rgba(125,211,252,0.26), transparent 64%)',
                            }}
                          />

                          <div className="relative z-10">
                            {isLight ? (
                              <SakuraIcon className="mx-auto size-5 sm:size-7" />
                            ) : (
                              <JellyfishIcon className="mx-auto size-4 text-cyan-200 sm:size-6" />
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
                      <JellyfishIcon className="size-4 text-cyan-200" />
                      <div className="size-2 rounded-full bg-cyan-200/70" />
                      Coral shorthand on the right, full delivery span on the left.
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
