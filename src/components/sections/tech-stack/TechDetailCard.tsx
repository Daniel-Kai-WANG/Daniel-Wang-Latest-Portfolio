import type { TechStackCategory } from '../../../data/techStack'
import { ThemeShiftBackdrop } from '../../animation/ThemeShiftBackdrop'
import { TechCategoryIcon } from './TechCategoryIcon'
import { TechLogoCarousel } from './TechLogoCarousel'

type TechDetailCardProps = {
  category: TechStackCategory
}

export function TechDetailCard({ category }: TechDetailCardProps) {
  return (
    <article
      className="relative flex h-full min-h-[28rem] flex-col overflow-hidden rounded-[2rem] border p-5 sm:p-6"
      style={{
        borderColor: 'var(--color-border)',
        background:
          'linear-gradient(180deg, color-mix(in srgb, var(--color-surface) 94%, white 6%), color-mix(in srgb, var(--color-surface-muted) 58%, transparent), color-mix(in srgb, var(--color-surface) 92%, transparent))',
      }}
    >
      <ThemeShiftBackdrop variant="card" />
      <div
        className="sheen-pass"
        style={{
          animationDuration: '7.4s',
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.48), rgba(214,244,255,0.22), transparent)',
        }}
      />
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center gap-4">
          <div
            className="flex size-14 shrink-0 items-center justify-center rounded-[1.4rem]"
            style={{
              background: 'color-mix(in srgb, var(--color-primary) 16%, var(--color-surface))',
              color: 'var(--color-text)',
            }}
          >
            <TechCategoryIcon icon={category.icon} className="size-6" />
          </div>

          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Active category
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.05em] text-[var(--color-text)] sm:text-[2rem]">
              {category.label}
            </h3>
          </div>
        </div>

        <div className="mt-5 border-t pt-5" style={{ borderColor: 'var(--pill-border)' }}>
          <p className="text-sm leading-7 text-[var(--color-muted)]">{category.description}</p>
        </div>

        <div
          className="mt-6 flex min-h-0 flex-1 flex-col border-t pt-5"
          style={{ borderColor: 'var(--pill-border)' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Capability logos
          </p>
          <div className="mt-4 min-h-0 flex-1 overflow-hidden">
            <TechLogoCarousel key={category.id} activeKey={category.id} logos={category.logos} />
          </div>
        </div>
      </div>
    </article>
  )
}
