import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '../../data/projects'
import { useTheme } from '../../hooks/useTheme'
import { Reveal } from '../animation/Reveal'
import { ThemeShiftBackdrop } from '../animation/ThemeShiftBackdrop'
import { ArrowUpRightIcon, JellyfishIcon, SnowCrystalIcon, StarfishIcon } from '../common/Icons'
import { getPrimaryCtaStyle } from '../common/primaryCta'
import { ProjectPreviewAccent } from './projects/ProjectPreviewAccent'

export function ProjectsSection() {
  const { theme } = useTheme()
  const [activeIndex, setActiveIndex] = useState(0)
  const activeProject = projects[activeIndex]
  const previewProjects = projects
    .map((project, index) => ({ project, index }))
    .filter(({ index }) => index !== activeIndex)

  return (
    <Reveal>
      <section
        id="projects"
        className="section-frame relative overflow-hidden px-5 py-8 sm:px-8 sm:py-10 lg:px-10"
      >
        <ThemeShiftBackdrop />

        <div className="relative z-10">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-[var(--color-text)] sm:text-4xl">
              Featured projects
            </h2>
          </div>

          <div className="mt-8 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeProject.title}
                initial={{ opacity: 0, y: 18, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -14, scale: 0.985 }}
                transition={{ duration: 0.36, ease: 'easeOut' }}
                className="relative overflow-hidden rounded-[2.2rem] border p-6 sm:p-7"
                whileHover={{
                  y: -8,
                  scale: 1.008,
                  rotateX: theme === 'light' ? 2 : 3,
                  rotateY: theme === 'light' ? -2 : 2,
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <ThemeShiftBackdrop variant="card" />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      theme === 'light'
                        ? 'linear-gradient(135deg, rgba(249,253,255,0.95), rgba(235,246,255,0.92), rgba(255,241,247,0.88))'
                        : 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(128,199,255,0.08), rgba(133,120,255,0.1))',
                  }}
                />
                <div
                  className="sheen-pass"
                  style={{
                    animationDuration: theme === 'light' ? '7.2s' : '6s',
                    background:
                      theme === 'light'
                        ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.62), rgba(214,244,255,0.28), transparent)'
                        : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.14), rgba(128,199,255,0.12), transparent)',
                    }}
                />

                <div className="relative z-10 grid gap-6">
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
                          {activeProject.tag}
                        </span>
                        <span className="text-sm font-semibold text-[var(--color-muted)]">
                          {activeProject.status}
                        </span>
                      </div>

                      <h3 className="mt-5 font-display text-[2.2rem] font-bold leading-tight tracking-[-0.05em] text-[var(--color-text)] sm:text-[2.6rem]">
                        {activeProject.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                        {activeProject.description}
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {[
                        { value: `0${activeIndex + 1}`, label: 'active case' },
                        { value: `${activeProject.highlights.length}`, label: 'core wins' },
                        { value: `${activeProject.tech.length}`, label: 'tooling layers' },
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

                  <div
                    className="rounded-[1.8rem] border p-5"
                    style={{
                      borderColor: 'var(--pill-border)',
                      background: 'color-mix(in srgb, var(--color-surface) 86%, transparent)',
                    }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div
                        className="text-xs font-bold uppercase tracking-[0.22em]"
                        style={{
                          color:
                            theme === 'light'
                              ? 'color-mix(in srgb, var(--color-text) 54%, #7b95bb)'
                              : 'color-mix(in srgb, var(--color-text) 76%, #9fbde4)',
                        }}
                      >
                        Delivery highlights
                      </div>
                      {theme === 'light' ? (
                        <SnowCrystalIcon className="size-5" />
                      ) : (
                        <div className="flex items-center gap-2">
                          <StarfishIcon variant="pink" className="size-4 rotate-[10deg] opacity-80" />
                          <JellyfishIcon className="size-5 text-cyan-200/50" />
                        </div>
                      )}
                    </div>

                    <ul
                      className="mt-5 space-y-3 text-sm leading-6"
                      style={{
                        color:
                          theme === 'light'
                            ? 'color-mix(in srgb, var(--color-text) 64%, #89a4c8)'
                            : 'color-mix(in srgb, var(--color-text) 82%, #95afd7)',
                      }}
                    >
                      {activeProject.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3">
                          <span
                            className="mt-2 size-2.5 shrink-0 rounded-full"
                            style={{
                              background:
                                theme === 'light'
                                  ? 'linear-gradient(135deg, rgba(255, 216, 165, 0.96), rgba(191, 228, 255, 0.96))'
                                  : 'linear-gradient(135deg, rgba(109, 190, 255, 0.96), rgba(130, 126, 255, 0.9))',
                            }}
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {activeProject.tech.map((tech) => (
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
                        href={activeProject.ctaHref}
                        className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-[background,color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:brightness-[1.03]"
                        style={getPrimaryCtaStyle(theme)}
                      >
                        {activeProject.ctaLabel}
                        <ArrowUpRightIcon className="size-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            <motion.div layout className="grid gap-4">
              {previewProjects.map(({ project, index }) => (
                <motion.button
                  key={project.title}
                  layout
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="relative overflow-hidden rounded-[1.9rem] border p-5 text-left"
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                    rotateX: theme === 'light' ? 2 : 3,
                    rotateY: theme === 'light' ? -2 : 2,
                  }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  style={{
                    transformStyle: 'preserve-3d',
                    borderColor: 'var(--color-border)',
                    background:
                      theme === 'light'
                        ? 'linear-gradient(180deg, rgba(248,252,255,0.95), rgba(235,246,255,0.92))'
                        : 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(128,199,255,0.05), rgba(133,120,255,0.06))',
                  }}
                >
                  <ThemeShiftBackdrop variant="card" />
                  <ProjectPreviewAccent accentIndex={index} />
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                          Click to feature
                        </div>
                        <h3 className="mt-3 font-display text-[1.5rem] font-bold leading-tight tracking-[-0.05em] text-[var(--color-text)]">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
                      {project.highlights[0]}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 2).map((tech) => (
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

                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                        {project.tag}
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </Reveal>
  )
}
