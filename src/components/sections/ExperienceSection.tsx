import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { experiences } from '../../data/experience'
import { useTheme } from '../../hooks/useTheme'
import { Reveal } from '../animation/Reveal'
import { ThemeShiftBackdrop } from '../animation/ThemeShiftBackdrop'
import {
  JellyfishIcon,
  PetalIcon,
  SakuraIcon,
  SnowCrystalIcon,
  StarSparkIcon,
} from '../common/Icons'
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
    top: '13%',
    left: '13%',
    panelClassName: 'left-0 top-[2%]',
    branchPath: 'M214 346 C205 286 182 240 148 198 C132 178 118 164 96 150',
  },
  {
    top: '6%',
    left: '40%',
    panelClassName: 'left-[20%] top-0',
    branchPath: 'M214 346 C214 280 214 226 222 182 C228 150 236 120 244 92',
  },
  {
    top: '14%',
    left: '73%',
    panelClassName: 'right-0 top-[4%]',
    branchPath: 'M214 346 C230 278 254 228 286 192 C304 172 322 158 346 148',
  },
  {
    top: '46%',
    left: '72%',
    panelClassName: 'right-[3%] top-[34%]',
    branchPath: 'M214 346 C234 312 258 286 288 268 C312 254 334 244 352 230',
  },
  {
    top: '50%',
    left: '18%',
    panelClassName: 'left-[2%] top-[40%]',
    branchPath: 'M214 346 C192 316 168 292 138 274 C118 262 100 248 86 230',
  },
]

function getFruitLabel(role: string, company: string) {
  const roleMark = roleMarks[role] ?? role
  const companyMark = companyMarks[company] ?? company

  return `${roleMark} · ${companyMark}`
}

export function ExperienceSection() {
  const { theme } = useTheme()
  const reduceMotion = useReducedMotion()
  const [activeFruit, setActiveFruit] = useState<number | null>(null)

  return (
    <Reveal>
      <section
        id="experience"
        className="section-frame relative overflow-hidden px-5 py-8 sm:px-8 sm:py-10 lg:px-10"
      >
        <ThemeShiftBackdrop />

        <div className="relative z-10 grid gap-8 xl:grid-cols-[0.34fr_0.66fr] xl:items-start">
          <div className="xl:sticky xl:top-32">
            <SectionHeading
              title="Experience journey"
              description="The timeline becomes a growth scene: the trunk rises first, the branches stretch out, and each fruit opens into a role-and-company story when you hover or tap."
            />

            <div
              className="mt-6 overflow-hidden rounded-[1.8rem] border p-5"
              style={{
                borderColor: 'var(--color-border)',
                background:
                  theme === 'light'
                    ? 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(238,248,255,0.86))'
                    : 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(124,92,255,0.05))',
              }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Growth notes
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { value: `${experiences.length}`, label: 'fruits' },
                  { value: '2', label: 'store fronts' },
                  { value: '1', label: 'workflow trunk' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.2rem] border px-3 py-4 text-center"
                    style={{
                      borderColor: 'var(--pill-border)',
                      background: 'var(--pill-background)',
                    }}
                  >
                    <div className="font-display text-2xl font-bold tracking-[-0.05em] text-[var(--color-text)]">
                      {item.value}
                    </div>
                    <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                Each fruit starts as a shorthand role-and-company mark, then blooms open into the
                delivery detail behind it.
              </p>
            </div>
          </div>

          <div className="relative">
            <div
              className="relative overflow-hidden rounded-[2rem] border px-4 py-5 sm:px-6 sm:py-6"
              style={{
                borderColor: 'var(--color-border)',
                background:
                  theme === 'light'
                    ? 'linear-gradient(180deg, rgba(255,255,255,0.94), rgba(237,247,255,0.92), rgba(248,252,255,0.95))'
                    : 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(17,25,43,0.9), rgba(18,18,33,0.96))',
                boxShadow: 'var(--surface-shadow)',
              }}
            >
              <ThemeShiftBackdrop variant="card" />

              <div
                className="absolute inset-x-0 top-0 h-1/2"
                style={{
                  background:
                    theme === 'light'
                      ? 'radial-gradient(circle at top, rgba(186,230,253,0.36), transparent 64%)'
                      : 'radial-gradient(circle at top, rgba(124,92,255,0.18), transparent 64%)',
                }}
              />

              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      Orchard mode
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                      Hover on desktop or tap on mobile to let each resume fruit bloom.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-[var(--color-muted)]">
                    {theme === 'light' ? (
                      <>
                        <SakuraIcon className="size-5" />
                        <SnowCrystalIcon className="size-5" />
                      </>
                    ) : (
                      <>
                        <StarSparkIcon className="size-4 text-fuchsia-200/70" />
                        <JellyfishIcon className="size-5 text-cyan-200/70" />
                      </>
                    )}
                  </div>
                </div>

                <div className="relative mt-6 h-[35rem] sm:h-[38rem]">
                  <svg
                    viewBox="0 0 420 390"
                    className="absolute inset-0 h-full w-full"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="experience-trunk" x1="0%" x2="0%" y1="0%" y2="100%">
                        <stop
                          offset="0%"
                          stopColor={theme === 'light' ? '#8B5E3C' : '#A67356'}
                          stopOpacity="0.88"
                        />
                        <stop
                          offset="100%"
                          stopColor={theme === 'light' ? '#6D472D' : '#5A3A2A'}
                          stopOpacity="0.98"
                        />
                      </linearGradient>
                    </defs>

                    <motion.path
                      d="M214 366 C216 306 214 252 206 204 C201 174 194 145 187 112"
                      fill="none"
                      stroke="url(#experience-trunk)"
                      strokeLinecap="round"
                      strokeWidth="18"
                      initial={{ pathLength: 0, opacity: 0.4 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={reduceMotion ? { duration: 0 } : { duration: 1.15, ease: 'easeOut' }}
                    />

                    <motion.path
                      d="M208 364 C198 332 180 310 152 292 C134 280 116 270 94 264"
                      fill="none"
                      stroke={theme === 'light' ? 'rgba(125,83,54,0.72)' : 'rgba(126,91,70,0.72)'}
                      strokeLinecap="round"
                      strokeWidth="10"
                      initial={{ pathLength: 0, opacity: 0.35 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={reduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.35, ease: 'easeOut' }}
                    />

                    {fruitNodes.map((node, index) => (
                      <motion.path
                        key={node.branchPath}
                        d={node.branchPath}
                        fill="none"
                        stroke={theme === 'light' ? 'rgba(139,94,60,0.82)' : 'rgba(154,113,89,0.82)'}
                        strokeLinecap="round"
                        strokeWidth={index === 1 ? 10 : 9}
                        initial={{ pathLength: 0, opacity: 0.35 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={
                          reduceMotion
                            ? { duration: 0 }
                            : { duration: 0.78, delay: 0.52 + index * 0.12, ease: 'easeOut' }
                        }
                      />
                    ))}
                  </svg>

                  <div
                    className="absolute bottom-[6%] left-1/2 h-12 w-44 -translate-x-1/2 rounded-full blur-2xl"
                    style={{
                      background:
                        theme === 'light'
                          ? 'rgba(156, 221, 124, 0.34)'
                          : 'rgba(35, 85, 54, 0.42)',
                    }}
                  />

                  {experiences.map((item, index) => {
                    const node = fruitNodes[index]
                    const isActive = activeFruit === index

                    return (
                      <div
                        key={`${item.company}-${item.date}`}
                        className="absolute"
                        style={{ top: node.top, left: node.left }}
                      >
                        <motion.button
                          type="button"
                          className="relative flex min-h-[72px] w-[106px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[999px] border px-3 py-2 text-center"
                          initial={{ opacity: 0, scale: 0.7, y: 12 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={
                            reduceMotion
                              ? { duration: 0 }
                              : {
                                  type: 'spring',
                                  stiffness: 220,
                                  damping: 18,
                                  delay: 0.95 + index * 0.1,
                                }
                          }
                          whileHover={{ y: -4, scale: 1.03 }}
                          onMouseEnter={() => setActiveFruit(index)}
                          onMouseLeave={() => setActiveFruit(null)}
                          onClick={() => setActiveFruit((value) => (value === index ? null : index))}
                          style={{
                            borderColor: isActive ? 'rgba(246,168,200,0.66)' : 'var(--pill-border)',
                            background:
                              theme === 'light'
                                ? 'linear-gradient(180deg, rgba(255,239,245,0.98), rgba(248,198,217,0.96))'
                                : 'linear-gradient(180deg, rgba(43,22,60,0.94), rgba(20,29,52,0.96))',
                            boxShadow: isActive
                              ? theme === 'light'
                                ? '0 18px 34px rgba(244,114,182,0.2)'
                                : '0 18px 34px rgba(124,92,255,0.18)'
                              : '0 14px 30px rgba(15,23,42,0.08)',
                          }}
                        >
                          <motion.div
                            className="absolute inset-[-8px] rounded-[999px]"
                            animate={{
                              opacity: isActive ? 1 : 0,
                              scale: isActive ? 1.05 : 0.86,
                            }}
                            transition={reduceMotion ? { duration: 0 } : { duration: 0.35 }}
                            style={{
                              background:
                                theme === 'light'
                                  ? 'radial-gradient(circle, rgba(251,207,232,0.56), transparent 64%)'
                                  : 'radial-gradient(circle, rgba(168,85,247,0.28), transparent 64%)',
                            }}
                          />
                          <div className="relative z-10">
                            <SakuraIcon className="mx-auto size-7" />
                            <span className="mt-1 block text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-text)]">
                              {getFruitLabel(item.role, item.company)}
                            </span>
                          </div>
                        </motion.button>

                        <div className={`pointer-events-none absolute hidden w-[16.5rem] lg:block ${node.panelClassName}`}>
                          <AnimatePresence>
                            {isActive ? (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.86, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.92, y: 6 }}
                                transition={reduceMotion ? { duration: 0 } : { duration: 0.28, ease: 'easeOut' }}
                                className="overflow-hidden rounded-[1.6rem] border p-4"
                                style={{
                                  borderColor: 'var(--pill-border)',
                                  background:
                                    theme === 'light'
                                      ? 'linear-gradient(180deg, rgba(255,255,255,0.97), rgba(255,241,246,0.95))'
                                      : 'linear-gradient(180deg, rgba(21,19,36,0.98), rgba(17,26,43,0.96))',
                                  boxShadow: '0 18px 44px rgba(15,23,42,0.18)',
                                }}
                              >
                                <div className="flex items-start justify-between gap-3">
                                  <div>
                                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                                      {item.date}
                                    </p>
                                    <h3 className="mt-2 font-display text-xl font-bold tracking-[-0.04em] text-[var(--color-text)]">
                                      {item.role}
                                    </h3>
                                    <p className="mt-1 text-sm font-semibold text-[var(--color-text)]">
                                      {item.company}
                                    </p>
                                  </div>
                                  <PetalIcon className="size-5 text-rose-300" />
                                </div>
                                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                                  {item.highlights[0]}
                                </p>
                                <div className="mt-3 rounded-[1rem] border px-3 py-2 text-xs font-semibold leading-5 text-[var(--pill-text)]" style={{ borderColor: 'var(--pill-border)', background: 'var(--pill-background)' }}>
                                  {item.metric}
                                </div>
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {item.tech.slice(0, 3).map((tech) => (
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
                              </motion.div>
                            ) : null}
                          </AnimatePresence>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-4 lg:hidden">
                  <AnimatePresence mode="wait">
                    {activeFruit !== null ? (
                      <motion.article
                        key={experiences[activeFruit].company}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={reduceMotion ? { duration: 0 } : { duration: 0.26, ease: 'easeOut' }}
                        className="rounded-[1.6rem] border p-4"
                        style={{
                          borderColor: 'var(--pill-border)',
                          background:
                            theme === 'light'
                              ? 'linear-gradient(180deg, rgba(255,255,255,0.97), rgba(255,241,246,0.95))'
                              : 'linear-gradient(180deg, rgba(21,19,36,0.98), rgba(17,26,43,0.96))',
                        }}
                      >
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                          {experiences[activeFruit].date}
                        </p>
                        <h3 className="mt-2 font-display text-xl font-bold tracking-[-0.04em] text-[var(--color-text)]">
                          {experiences[activeFruit].role}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-[var(--color-text)]">
                          {experiences[activeFruit].company}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                          {experiences[activeFruit].highlights[0]}
                        </p>
                      </motion.article>
                    ) : (
                      <motion.div
                        key="experience-hint"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="rounded-[1.6rem] border border-dashed px-4 py-5 text-sm leading-6 text-[var(--color-muted)]"
                        style={{ borderColor: 'var(--pill-border)' }}
                      >
                        Tap a fruit to open the role bloom.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-[var(--color-muted)]">
                  {theme === 'light' ? (
                    <>
                      <PetalIcon className="size-4 text-rose-300" />
                      <SnowCrystalIcon className="size-4 text-sky-300" />
                      Blossom shorthand outside, delivery detail inside.
                    </>
                  ) : (
                    <>
                      <StarSparkIcon className="size-4 text-fuchsia-200" />
                      <JellyfishIcon className="size-4 text-cyan-200" />
                      Night-bloom focus, same delivery roots.
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
