import { skillCategories } from '../../data/skills'
import { useTheme } from '../../hooks/useTheme'
import { Reveal } from '../animation/Reveal'
import { ThemeShiftBackdrop } from '../animation/ThemeShiftBackdrop'
import { JellyfishIcon, MusicNoteIcon, PetalIcon, SnowflakeIcon } from '../common/Icons'
import { SectionHeading } from '../common/SectionHeading'

export function TechStackSection() {
  const { theme } = useTheme()

  return (
    <Reveal>
      <section
        id="stack"
        className="section-frame relative overflow-hidden px-5 py-8 sm:px-8 sm:py-10 lg:px-10"
      >
        <ThemeShiftBackdrop />
        <SectionHeading
          title="Tech stack system"
          description="A grouped toolkit covering product surfaces, backend delivery, infrastructure touchpoints, and workflow thinking that keeps AI-assisted builds grounded."
        />

        <div className="relative z-10 mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <article
              key={category.title}
              className="relative overflow-hidden rounded-[1.8rem] border p-5"
              style={{
                borderColor: 'var(--color-border)',
                background:
                  theme === 'light'
                    ? 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(239,249,255,0.88))'
                    : 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(124,92,255,0.05))',
              }}
            >
              <ThemeShiftBackdrop variant="card" />
              <div
                className="absolute right-4 top-4 h-16 w-16 rounded-full blur-2xl"
                style={{
                  background:
                    theme === 'light'
                      ? index % 2 === 0
                        ? 'rgba(56,189,248,0.18)'
                        : 'rgba(253,186,116,0.18)'
                      : index % 2 === 0
                        ? 'rgba(124,92,255,0.16)'
                        : 'rgba(255,79,216,0.16)',
                }}
              />

              <div className="relative z-10">
                <div className="absolute right-0 top-0">
                  {theme === 'light' ? (
                    <div className="relative h-14 w-14">
                      <PetalIcon className="absolute left-2 top-1 size-5 rotate-[-20deg] text-rose-300/80" />
                      <SnowflakeIcon className="absolute right-0 top-5 size-4 text-sky-200/70" />
                    </div>
                  ) : (
                    <div className="relative h-14 w-16">
                      <MusicNoteIcon className="absolute right-0 top-2 size-5 rotate-[10deg] text-fuchsia-200/55" />
                      <JellyfishIcon className="absolute left-0 top-2 size-7 text-cyan-100/50" />
                    </div>
                  )}
                </div>

                <div
                  className="inline-flex rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]"
                  style={{
                    borderColor: 'var(--pill-border)',
                    background: 'var(--pill-background)',
                    color: 'var(--pill-text)',
                  }}
                >
                  {theme === 'light' ? category.metaphorLight : category.metaphorDark}
                </div>

                <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.04em] text-[var(--color-text)]">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  {category.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border px-3 py-1.5 text-xs font-semibold"
                      style={{
                        borderColor: 'var(--pill-border)',
                        background: 'var(--pill-background)',
                        color: 'var(--pill-text)',
                      }}
                    >
                      {item}
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
