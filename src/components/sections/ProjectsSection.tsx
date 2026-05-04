import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import { useTheme } from '../../hooks/useTheme'
import { Reveal } from '../animation/Reveal'
import { ThemeShiftBackdrop } from '../animation/ThemeShiftBackdrop'
import { ArrowUpRightIcon, JellyfishIcon, SnowflakeIcon, StarSparkIcon } from '../common/Icons'
import { SectionHeading } from '../common/SectionHeading'

export function ProjectsSection() {
  const { theme } = useTheme()
  const [featured, ...secondaryProjects] = projects

  return (
    <Reveal>
      <section
        id="projects"
        className="section-frame relative overflow-hidden px-5 py-8 sm:px-8 sm:py-10 lg:px-10"
      >
        <ThemeShiftBackdrop />

        <div className="relative z-10">
          <SectionHeading
            title="Featured projects"
            description="A more editorial case-study layout showing one headline build and a supporting stack of delivery stories instead of four identical project cards."
          />

          <div className="mt-8 grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
            <motion.article
              className="relative overflow-hidden rounded-[2.2rem] border p-6 sm:p-7"
              whileHover={{
                y: -8,
                scale: 1.008,
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
                      ? 'linear-gradient(135deg, rgba(255,255,255,0.94), rgba(245,251,255,0.9), rgba(255,244,248,0.82))'
                      : 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(34,211,238,0.05), rgba(124,92,255,0.08))',
                }}
              />
              <div
                className="sheen-pass"
                style={{
                  animationDuration: theme === 'light' ? '7.4s' : '6.2s',
                  background:
                    theme === 'light'
                      ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), rgba(214,244,255,0.3), transparent)'
                      : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.16), rgba(124,92,255,0.12), transparent)',
                }}
              />

              <div className="relative z-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="flex flex-col justify-between gap-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className="inline-flex rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]"
                        style={{
                          borderColor: 'var(--pill-border)',
                          background: 'var(--pill-background)',
                          color: 'var(--pill-text)',
                        }}
                      >
                        {featured.tag}
                      </span>
                      <span className="text-sm font-semibold text-[var(--color-muted)]">
                        {featured.status}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-[2.2rem] font-bold leading-tight tracking-[-0.05em] text-[var(--color-text)] sm:text-[2.6rem]">
                      {featured.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                      {featured.description}
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      { value: '01', label: 'headline case' },
                      { value: '3', label: 'core wins' },
                      { value: '5', label: 'tooling layers' },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[1.3rem] border px-3 py-4"
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
                </div>

                <div className="rounded-[1.8rem] border p-5" style={{ borderColor: 'var(--pill-border)', background: 'color-mix(in srgb, var(--color-surface) 86%, transparent)' }}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      Delivery highlights
                    </div>
                    {theme === 'light' ? (
                      <SnowflakeIcon className="size-5 text-sky-300/70" />
                    ) : (
                      <div className="flex items-center gap-2">
                        <StarSparkIcon className="size-4 text-fuchsia-200/65" />
                        <JellyfishIcon className="size-5 text-cyan-200/50" />
                      </div>
                    )}
                  </div>

                  <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
                    {featured.highlights.map((highlight) => (
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
                    {featured.tech.map((tech) => (
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

                  <div className="mt-6">
                    <a
                      href={featured.ctaHref}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white"
                      style={{
                        background:
                          theme === 'light'
                            ? 'linear-gradient(135deg, #38BDF8, #2563EB)'
                            : 'linear-gradient(135deg, #FF4FD8, #7C5CFF)',
                      }}
                    >
                      {featured.ctaLabel}
                      <ArrowUpRightIcon className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>

            <div className="grid gap-4">
              {secondaryProjects.map((project, index) => (
                <motion.article
                  key={project.title}
                  className="relative overflow-hidden rounded-[1.9rem] border p-5"
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
                          ? 'linear-gradient(180deg, rgba(255,255,255,0.92), rgba(240,249,255,0.88))'
                          : 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(34,211,238,0.04))',
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                          Case {index + 2}
                        </div>
                        <h3 className="mt-3 font-display text-[1.7rem] font-bold leading-tight tracking-[-0.05em] text-[var(--color-text)]">
                          {project.title}
                        </h3>
                      </div>
                      <span
                        className="inline-flex rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]"
                        style={{
                          borderColor: 'var(--pill-border)',
                          background: 'var(--pill-background)',
                          color: 'var(--pill-text)',
                        }}
                      >
                        {project.tag}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                      {project.description}
                    </p>

                    <div className="mt-5 grid gap-2 sm:grid-cols-2">
                      {project.highlights.slice(0, 2).map((highlight) => (
                        <div
                          key={highlight}
                          className="rounded-[1.2rem] border px-4 py-3 text-sm leading-6 text-[var(--color-muted)]"
                          style={{
                            borderColor: 'var(--pill-border)',
                            background: 'color-mix(in srgb, var(--color-surface) 82%, transparent)',
                          }}
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 4).map((tech) => (
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
                      <a
                        href={project.ctaHref}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]"
                      >
                        {project.ctaLabel}
                        <ArrowUpRightIcon className="size-4" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  )
}
