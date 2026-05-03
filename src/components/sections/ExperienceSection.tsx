import { experiences } from '../../data/experience'
import { useTheme } from '../../hooks/useTheme'
import { Reveal } from '../animation/Reveal'
import { SectionHeading } from '../common/SectionHeading'

export function ExperienceSection() {
  const { theme } = useTheme()

  return (
    <Reveal>
      <section id="experience" className="section-frame px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
        <SectionHeading
          title="Experience journey"
          description="A hands-on path through web products, mobile releases, legacy upgrades, CMS implementation, and workflow-heavy delivery."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {experiences.map((item, index) => (
            <article
              key={`${item.company}-${item.date}`}
              className="relative overflow-hidden rounded-[2rem] border px-5 py-5 sm:px-6"
              style={{
                borderColor: 'var(--color-border)',
                background:
                  theme === 'light'
                    ? 'linear-gradient(180deg, rgba(255,255,255,0.92), rgba(240,249,255,0.9))'
                    : 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(124,92,255,0.06))',
              }}
            >
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
                <div className="absolute right-6 top-6 flex gap-2 opacity-80">
                  <div className="size-5 rounded-full bg-white/90" />
                  <div className="mt-2 size-7 rounded-full bg-sky-100/90" />
                  <div className="size-4 rounded-full bg-white/80" />
                </div>
              ) : (
                <div className="absolute right-5 top-5 h-24 w-24 rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-fuchsia-400/15 via-transparent to-cyan-300/10" />
              )}

              <div className="relative">
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
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  )
}
