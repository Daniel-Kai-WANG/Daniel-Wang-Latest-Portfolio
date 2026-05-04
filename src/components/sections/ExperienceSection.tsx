import { motion } from 'framer-motion'
import { experiences } from '../../data/experience'
import { useTheme } from '../../hooks/useTheme'
import { Reveal } from '../animation/Reveal'
import { ThemeShiftBackdrop } from '../animation/ThemeShiftBackdrop'
import { JellyfishIcon, PetalIcon, SnowflakeIcon, StarSparkIcon } from '../common/Icons'
import { SectionHeading } from '../common/SectionHeading'

export function ExperienceSection() {
  const { theme } = useTheme()

  return (
    <Reveal>
      <section
        id="experience"
        className="section-frame relative overflow-hidden px-5 py-8 sm:px-8 sm:py-10 lg:px-10"
      >
        <ThemeShiftBackdrop />

        <div className="relative z-10 grid gap-8 xl:grid-cols-[0.36fr_0.64fr] xl:items-start">
          <div className="xl:sticky xl:top-32">
            <SectionHeading
              title="Experience journey"
              description="A narrative timeline through product UI, mobile release work, CMS implementation, backend services, and workflow-heavy delivery."
            />

            <div
              className="mt-6 overflow-hidden rounded-[1.8rem] border p-5"
              style={{
                borderColor: 'var(--color-border)',
                background:
                  theme === 'light'
                    ? 'linear-gradient(180deg, rgba(255,255,255,0.88), rgba(242,249,255,0.86))'
                    : 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(124,92,255,0.05))',
              }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Delivery span
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { value: '5', label: 'roles' },
                  { value: '3', label: 'product modes' },
                  { value: '2', label: 'app stores' },
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
                The shape of the work changes from role to role, but the pattern stays the same:
                structure the brief, make the interface trustworthy, and keep shipping momentum.
              </p>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute bottom-0 left-4 top-0 w-px xl:left-1/2 xl:-translate-x-1/2"
              style={{
                background:
                  theme === 'light'
                    ? 'linear-gradient(180deg, rgba(246,168,200,0.18), rgba(37,99,235,0.28), rgba(186,230,253,0.08))'
                    : 'linear-gradient(180deg, rgba(255,79,216,0.18), rgba(34,211,238,0.28), rgba(124,92,255,0.08))',
              }}
            />

            <div className="space-y-6">
              {experiences.map((item, index) => {
                const isLeft = index % 2 === 0

                return (
                  <motion.article
                    key={`${item.company}-${item.date}`}
                    className="relative xl:grid xl:grid-cols-2 xl:gap-8"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: index * 0.08 }}
                  >
                    <div className={isLeft ? 'xl:pr-10' : 'xl:col-start-2 xl:pl-10'}>
                      <motion.div
                        className="group relative overflow-hidden rounded-[2rem] border px-5 py-5 sm:px-6"
                        whileHover={{
                          y: -8,
                          scale: 1.01,
                          rotateX: theme === 'light' ? 2 : 3,
                          rotateY: theme === 'light' ? -2 : 2,
                        }}
                        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <ThemeShiftBackdrop variant="card" />
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              theme === 'light'
                                ? 'linear-gradient(180deg, rgba(255,255,255,0.93), rgba(240,249,255,0.9))'
                                : 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(124,92,255,0.06))',
                          }}
                        />
                        <div
                          className="sheen-pass"
                          style={{
                            animationDuration: theme === 'light' ? '8s' : '6.4s',
                            animationDelay: `${index * 0.28}s`,
                            background:
                              theme === 'light'
                                ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.58), rgba(255,228,239,0.36), transparent)'
                                : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.16), rgba(34,211,238,0.1), transparent)',
                          }}
                        />

                        <div className="relative z-10">
                          <div className="flex flex-wrap items-start justify-between gap-3">
                            <div>
                              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                                {item.date}
                              </p>
                              <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.04em] text-[var(--color-text)]">
                                {item.role}
                              </h3>
                              <p className="mt-1 text-base font-semibold text-[var(--color-text)]">
                                {item.company}
                              </p>
                              <p className="mt-1 text-sm text-[var(--color-muted)]">{item.location}</p>
                            </div>

                            <span
                              className="inline-flex max-w-[15rem] rounded-full border px-3 py-1 text-right text-xs font-semibold leading-5"
                              style={{
                                borderColor: 'var(--pill-border)',
                                background: 'var(--pill-background)',
                                color: 'var(--pill-text)',
                              }}
                            >
                              {item.metric}
                            </span>
                          </div>

                          <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
                            {item.highlights.map((highlight) => (
                              <li key={highlight} className="flex gap-3">
                                <span
                                  className="mt-2 size-2.5 shrink-0 rounded-full"
                                  style={{
                                    background:
                                      theme === 'light'
                                        ? 'linear-gradient(135deg, #38BDF8, #2563EB)'
                                        : 'linear-gradient(135deg, #FF4FD8, #22D3EE)',
                                  }}
                                />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {item.tech.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border px-3 py-1.5 text-xs font-semibold"
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

                          <div className="mt-5 flex items-center gap-2 text-sm text-[var(--color-muted)]">
                            {theme === 'light' ? (
                              <>
                                <PetalIcon className="size-4 text-rose-300" />
                                <SnowflakeIcon className="size-4 text-sky-300" />
                                Seasonal clarity, practical delivery.
                              </>
                            ) : (
                              <>
                                <StarSparkIcon className="size-4 text-fuchsia-200" />
                                <JellyfishIcon className="size-4 text-cyan-200" />
                                Midnight-stage focus, calm shipping glow.
                              </>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <div className="pointer-events-none absolute left-4 top-8 xl:left-1/2 xl:-translate-x-1/2">
                      <div
                        className="flex size-8 items-center justify-center rounded-full border"
                        style={{
                          borderColor: 'var(--color-border)',
                          background:
                            theme === 'light'
                              ? 'rgba(255,255,255,0.96)'
                              : 'rgba(17,18,31,0.96)',
                          boxShadow:
                            theme === 'light'
                              ? '0 0 0 6px rgba(246,168,200,0.12)'
                              : '0 0 0 6px rgba(34,211,238,0.08)',
                        }}
                      >
                        <span className="text-[11px] font-bold text-[var(--color-text)]">
                          0{index + 1}
                        </span>
                      </div>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  )
}
