import { motion } from 'framer-motion'
import type { TechStackCategory } from '../../../data/techStack'
import { ThemeShiftBackdrop } from '../../animation/ThemeShiftBackdrop'
import { ChevronRightIcon } from '../SectionIcons'
import { TechCategoryIcon } from './TechCategoryIcon'

type TechCategoryListProps = {
  activeCategoryId: string
  categories: TechStackCategory[]
  onChange: (categoryId: string) => void
}

export function TechCategoryList({
  activeCategoryId,
  categories,
  onChange,
}: TechCategoryListProps) {
  return (
    <div className="grid gap-3 sm:gap-4">
      {categories.map((category, index) => {
        const isActive = category.id === activeCategoryId

        return (
          <motion.button
            key={category.id}
            type="button"
            onClick={() => onChange(category.id)}
            className="group relative overflow-hidden rounded-[1.75rem] border px-5 py-4 text-left transition-transform sm:px-6 sm:py-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            whileHover={{ y: -2 }}
            style={{
              borderColor: isActive
                ? 'color-mix(in srgb, var(--color-primary) 52%, var(--color-border))'
                : 'var(--color-border)',
              background: isActive
                ? 'linear-gradient(180deg, color-mix(in srgb, var(--color-surface) 96%, white 4%), color-mix(in srgb, var(--color-surface-muted) 64%, transparent))'
                : 'color-mix(in srgb, var(--color-surface) 86%, transparent)',
              boxShadow: isActive ? 'var(--surface-shadow)' : 'none',
            }}
            aria-pressed={isActive}
          >
            <ThemeShiftBackdrop variant="card" />
            <div className="relative z-10 flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <div
                  className="flex size-11 shrink-0 items-center justify-center rounded-2xl"
                  style={{
                    background: isActive
                      ? 'color-mix(in srgb, var(--color-primary) 16%, var(--color-surface))'
                      : 'var(--soft-accent)',
                    color: 'var(--color-text)',
                  }}
                >
                  <TechCategoryIcon icon={category.icon} className="size-5" />
                </div>
                <span className="font-display text-xl font-bold tracking-[-0.04em] text-[var(--color-text)] sm:text-[1.75rem]">
                  {category.label}
                </span>
              </div>

              <span
                className="flex size-10 shrink-0 items-center justify-center rounded-full transition-all"
                style={{
                  color: isActive ? 'var(--color-primary)' : 'var(--color-muted)',
                  opacity: isActive ? 1 : 0.5,
                  transform: isActive ? 'translateX(0)' : 'translateX(-4px)',
                }}
              >
                <ChevronRightIcon className="size-5" />
              </span>
            </div>
          </motion.button>
        )
      })}
    </div>
  )
}
