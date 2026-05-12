import { motion } from 'framer-motion'
import { leafBud } from '../../assets/experience'
import type { ExperienceItem, ThemeMode } from '../../types/content'
import { ThemeShiftBackdrop } from '../animation/ThemeShiftBackdrop'
import { SakuraIcon } from '../common/Icons'
import { CoralDecorPair } from './CoralDecorPair'

type ExperienceDetailCardProps = {
  experience: ExperienceItem
  formatRange: (date: string) => string
  isLight: boolean
  phaseLabel: string
  reduceMotion: boolean
  theme: ThemeMode
  sticky?: boolean
}

export function ExperienceDetailCard({
  experience,
  formatRange,
  isLight,
  phaseLabel,
  reduceMotion,
  theme,
  sticky = false,
}: ExperienceDetailCardProps) {
  return (
    <motion.article
      key={`${experience.company}-${theme}`}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.28, ease: 'easeOut' }}
      className={`relative overflow-hidden rounded-[2rem] border p-6 sm:p-7 ${sticky ? 'xl:sticky xl:top-28' : ''}`}
      style={{
        borderColor: 'var(--color-border)',
        background: isLight
          ? 'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(240,248,255,0.96), rgba(255,242,249,0.97))'
          : 'linear-gradient(180deg, rgba(12,18,39,0.98), rgba(10,22,48,0.97), rgba(15,18,43,0.98))',
        boxShadow: 'var(--surface-shadow)',
      }}
    >
      <ThemeShiftBackdrop variant="card" />

      <div
        className="absolute inset-x-0 top-0 h-32"
        style={{
          background: isLight
            ? 'radial-gradient(circle at top left, rgba(244, 186, 218, 0.22), transparent 56%), radial-gradient(circle at top right, rgba(165, 220, 255, 0.24), transparent 58%)'
            : 'radial-gradient(circle at top left, rgba(122, 185, 255, 0.16), transparent 50%), radial-gradient(circle at top right, rgba(132, 117, 255, 0.16), transparent 58%)',
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              {isLight ? 'Orchard detail' : 'Coral detail'}
            </p>
            <p className="mt-3 text-sm font-semibold text-[var(--color-muted)]">
              {formatRange(experience.date)}
            </p>
          </div>

          {isLight ? (
            <div className="flex items-center gap-2">
              <SakuraIcon className="size-7" />
              <img
                src={leafBud}
                alt=""
                aria-hidden="true"
                className="block size-7 object-contain -rotate-[10deg]"
                style={{
                  filter: 'drop-shadow(0 2px 7px rgba(170, 214, 98, 0.16))',
                }}
              />
            </div>
          ) : (
            <CoralDecorPair starfishVariant="light" />
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span
            className="inline-flex rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]"
            style={{
              borderColor: 'var(--pill-border)',
              background: 'var(--pill-background)',
              color: 'var(--pill-text)',
            }}
          >
            {phaseLabel}
          </span>
          <span className="text-sm font-semibold text-[var(--color-muted)]">
            {experience.location}
          </span>
        </div>

        <h3 className="mt-6 font-display text-[clamp(1.72rem,7vw,2rem)] font-bold leading-[1.05] tracking-[-0.06em] text-[var(--color-text)] sm:text-[2.35rem]">
          {experience.role}
        </h3>
        <p className="mt-3 text-lg font-semibold text-[var(--color-text)]">
          {experience.company}
        </p>

        <div
          className="mt-6 rounded-[1.35rem] border px-4 py-4 text-sm font-semibold leading-7"
          style={{
            borderColor: 'var(--pill-border)',
            background: isLight
              ? 'linear-gradient(180deg, rgba(249,252,255,0.94), rgba(255,241,248,0.92))'
              : 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(23,34,68,0.42))',
            color: 'var(--pill-text)',
          }}
        >
          {experience.metric}
        </div>

        <div className="mt-6 space-y-3">
          {experience.highlights.map((highlight) => (
            <div key={highlight} className="flex gap-3 text-sm leading-7 text-[var(--color-muted)]">
              <span
                className="mt-2 size-2.5 shrink-0 rounded-full"
                style={{
                  background: isLight
                    ? 'linear-gradient(90deg, rgba(255, 236, 132, 0.92) 0%, rgba(215, 243, 194, 0.92) 48%, rgba(170, 238, 255, 0.94) 100%)'
                    : 'linear-gradient(135deg, #7ab9ff, #8275ff)',
                }}
              />
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {experience.tech.map((tech) => (
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
      </div>
    </motion.article>
  )
}
