import { projects } from '../../data/projects'
import { useTheme } from '../../hooks/useTheme'
import { Reveal } from '../animation/Reveal'
import { ArrowUpRightIcon } from '../common/Icons'
import { SectionHeading } from '../common/SectionHeading'

export function ProjectsSection() {
  const { theme } = useTheme()

  return (
    <Reveal>
      <section id="projects" className="section-frame px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
        <SectionHeading
          title="Featured projects"
          description="Selected delivery stories that show how product thinking, implementation detail, and workflow structure come together in production work."
        />

        <div className="mt-8 grid gap-5 xl:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="relative overflow-hidden rounded-[2rem] border p-6"
              style={{
                borderColor: 'var(--color-border)',
                background:
                  theme === 'light'
                    ? 'linear-gradient(180deg, rgba(255,255,255,0.92), rgba(240,249,255,0.86))'
                    : 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(34,211,238,0.04))',
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{
                  background:
                    theme === 'light'
                      ? 'linear-gradient(90deg, #38BDF8, #2563EB)'
                      : 'linear-gradient(90deg, #FF4FD8, #7C5CFF, #22D3EE)',
                }}
              />

              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-3">
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
                  <span className="text-sm font-semibold text-[var(--color-muted)]">
                    {project.status}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-[1.95rem] font-bold leading-tight tracking-[-0.05em] text-[var(--color-text)]">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {project.description}
                </p>

                <ul className="mt-5 space-y-2 text-sm leading-6 text-[var(--color-muted)]">
                  {project.highlights.map((highlight) => (
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
                  {project.tech.map((tech) => (
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

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={project.ctaHref}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white"
                    style={{
                      background:
                        theme === 'light'
                          ? 'linear-gradient(135deg, #38BDF8, #2563EB)'
                          : 'linear-gradient(135deg, #FF4FD8, #7C5CFF)',
                    }}
                  >
                    {project.ctaLabel}
                    <ArrowUpRightIcon className="size-4" />
                  </a>
                  <span className="text-sm text-[var(--color-muted)]">
                    Public links intentionally withheld where work is private.
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  )
}
