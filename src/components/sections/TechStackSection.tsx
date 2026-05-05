import { motion } from 'framer-motion'
import { skillCategories } from '../../data/skills'
import { useTheme } from '../../hooks/useTheme'
import { Reveal } from '../animation/Reveal'
import { ThemeShiftBackdrop } from '../animation/ThemeShiftBackdrop'
import { JellyfishIcon, SakuraIcon, SnowCrystalIcon, StarfishIcon, TablerMoonIcon } from '../common/Icons'
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

        <div className="relative z-10 grid gap-8 xl:grid-cols-[0.38fr_0.62fr]">
          <div>
            <SectionHeading
              title="Tech stack system"
              description="This section now behaves more like a capability spectrum: one anchored control panel and a series of long-form skill rails instead of six matching cards."
            />

            <div
              className="mt-6 overflow-hidden rounded-[2rem] border p-5"
              style={{
                borderColor: 'var(--color-border)',
                background:
                  theme === 'light'
                    ? 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(242,249,255,0.86))'
                    : 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(57,195,220,0.06), rgba(255,143,115,0.05))',
              }}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    Capability core
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.05em] text-[var(--color-text)]">
                    6 system layers
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  {theme === 'light' ? (
                    <>
                      <SakuraIcon className="size-5" />
                      <SnowCrystalIcon className="size-5" />
                    </>
                  ) : (
                    <>
                      <TablerMoonIcon className="size-5 text-cyan-50/80" />
                      <StarfishIcon variant="pink" className="size-5 rotate-[10deg]" />
                      <JellyfishIcon className="size-6 text-cyan-200/60" />
                    </>
                  )}
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                The toolkit is organised by the kind of responsibility it carries: interface work,
                services, data, infrastructure, collaboration tooling, and AI workflow thinking.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  'frontend surfaces',
                  'backend logic',
                  'data models',
                  'deployment touchpoints',
                ].map((label) => (
                  <div
                    key={label}
                    className="rounded-[1.2rem] border px-3 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]"
                    style={{
                      borderColor: 'var(--pill-border)',
                      background: 'var(--pill-background)',
                    }}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {skillCategories.map((category, index) => (
              <motion.article
                key={category.title}
                className="relative overflow-hidden rounded-[1.9rem] border p-5 sm:p-6"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.62, delay: index * 0.06 }}
                style={{
                  borderColor: 'var(--color-border)',
                  background:
                    theme === 'light'
                      ? 'linear-gradient(180deg, rgba(255,255,255,0.92), rgba(239,249,255,0.88))'
                      : 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(57,195,220,0.05), rgba(255,143,115,0.04))',
                  marginLeft: index % 2 === 0 ? '0' : '0',
                }}
              >
                <ThemeShiftBackdrop variant="card" />
                <div
                  className="absolute left-0 top-0 h-full w-1.5"
                  style={{
                    background:
                      theme === 'light'
                        ? 'linear-gradient(180deg, rgba(246,168,200,0.86), rgba(37,99,235,0.72))'
                        : 'linear-gradient(180deg, rgba(255,143,115,0.82), rgba(57,195,220,0.78))',
                  }}
                />

                <div className="relative z-10 grid gap-4 lg:grid-cols-[0.28fr_0.72fr] lg:items-start">
                  <div className="lg:pr-4">
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
                  </div>

                  <div>
                    <p className="text-sm leading-7 text-[var(--color-muted)]">{category.summary}</p>
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
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  )
}
