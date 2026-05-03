import { motion } from 'framer-motion'
import { experiences } from '../../data/experience'
import { useTheme } from '../../hooks/useTheme'
import { Reveal } from '../animation/Reveal'
import { ThemeShiftBackdrop } from '../animation/ThemeShiftBackdrop'
import { JellyfishIcon, MusicNoteIcon, PetalIcon, SnowflakeIcon } from '../common/Icons'
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
        <SectionHeading
          title="Experience journey"
          description="A hands-on path through web products, mobile releases, legacy upgrades, CMS implementation, and workflow-heavy delivery."
        />

        <div className="relative z-10 mt-8 grid gap-5 lg:grid-cols-2">
          {experiences.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.date}`}
              className="relative overflow-hidden rounded-[2rem] border px-5 py-5 sm:px-6"
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
              <motion.div
                className="absolute inset-y-0 left-[-32%] w-1/3 -skew-x-12"
                animate={{ x: ['-140%', '300%'] }}
                transition={{
                  duration: theme === 'light' ? 7.4 : 5.8,
                  ease: 'linear',
                  repeat: Infinity,
                  repeatDelay: theme === 'light' ? 4 : 3,
                }}
                style={{
                  background:
                    theme === 'light'
                      ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.36), transparent)'
                      : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  borderColor: 'var(--color-border)',
                  background:
                    theme === 'light'
                      ? 'linear-gradient(180deg, rgba(255,255,255,0.92), rgba(240,249,255,0.9))'
                      : 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(124,92,255,0.06))',
                }}
              />
              <div
                className="absolute right-4 top-4 h-20 w-20 rounded-full blur-2xl"
                style={{
                  background:
                    theme === 'light'
                      ? index % 2 === 0
                        ? 'rgba(56,189,248,0.18)'
                        : 'rgba(253,186,116,0.2)'
                      : index % 2 === 0
                        ? 'rgba(255,79,216,0.18)'
                        : 'rgba(34,211,238,0.16)',
                }}
              />
              {theme === 'light' ? (
                <div className="absolute right-6 top-6 flex items-start gap-2 opacity-80">
                  <PetalIcon className="size-5 rotate-[-14deg] text-rose-300/80" />
                  <SnowflakeIcon className="mt-1 size-5 text-sky-200/70" />
                  <PetalIcon className="size-4 rotate-[12deg] text-pink-200/70" />
                </div>
              ) : (
                <div className="absolute right-5 top-5 flex items-start gap-2">
                  <MusicNoteIcon className="size-5 rotate-[10deg] text-fuchsia-200/55" />
                  <JellyfishIcon className="size-8 text-cyan-200/40" />
                </div>
              )}

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
                    className="inline-flex max-w-[14rem] rounded-full border px-3 py-1 text-right text-xs font-semibold leading-5"
                    style={{
                      borderColor: 'var(--color-border)',
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
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </Reveal>
  )
}
