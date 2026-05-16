import { motion } from 'framer-motion'
import type { ProjectItem, ThemeMode } from '../../../types/content'
import { ThemeShiftBackdrop } from '../../animation/ThemeShiftBackdrop'
import { JellyfishIcon, SnowCrystalIcon, StarfishIcon } from '../../common/Icons'

type ProjectFeatureCardProps = {
  activeIndex: number
  project: ProjectItem
  theme: ThemeMode
}

export function ProjectFeatureCard({
  activeIndex,
  project,
  theme,
}: ProjectFeatureCardProps) {
  return (
    <motion.article
      key={project.title}
      initial={{ opacity: 0, y: 18, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -14, scale: 0.985 }}
      transition={{ duration: 0.36, ease: 'easeOut' }}
      className="relative h-full overflow-hidden rounded-[2.2rem] border p-6 sm:p-7"
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

      <div className="relative z-10 grid h-full gap-6">
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
                {project.tag}
              </span>
              <span className="text-sm font-semibold text-[var(--color-muted)]">
                {project.status}
              </span>
            </div>

            <h3 className="mt-5 font-display text-[clamp(1.72rem,7vw,2rem)] font-bold leading-tight tracking-[-0.05em] text-[var(--color-text)] sm:text-[2.6rem]">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              {project.description}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { value: `0${activeIndex + 1}`, label: 'active case' },
              { value: `${project.highlights.length}`, label: 'core wins' },
              { value: `${project.tech.length}`, label: 'tooling layers' },
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
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span
                  className="mt-2 size-2.5 shrink-0 rounded-full"
                  style={{
                    background:
                      theme === 'light'
                        ? 'linear-gradient(90deg, rgba(255, 236, 132, 0.92) 0%, rgba(215, 243, 194, 0.92) 48%, rgba(170, 238, 255, 0.94) 100%)'
                        : 'linear-gradient(135deg, rgba(255, 155, 122, 0.98), rgba(255, 127, 115, 0.94) 46%, rgba(142, 215, 255, 0.9) 82%, rgba(93, 159, 255, 0.86))',
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
        </div>
      </div>
    </motion.article>
  )
}
