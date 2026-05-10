import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import type { TechStackCategory } from '../../../data/techStack'
import { ThemeShiftBackdrop } from '../../animation/ThemeShiftBackdrop'
import { StateIconBlock } from '../../common/StateIconBlock'
import { ChevronRightIcon } from '../SectionIcons'
import { TechCategoryIcon } from './TechCategoryIcon'

type TechCategoryListProps = {
  activeCategoryId: string
  categories: TechStackCategory[]
  onChange: (categoryId: string) => void
}

const easeOut = [0.22, 1, 0.36, 1] as const

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 28,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.52,
      ease: easeOut,
    },
  },
}

export function TechCategoryList({
  activeCategoryId,
  categories,
  onChange,
}: TechCategoryListProps) {
  return (
    <motion.div
      className="grid gap-3 sm:gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={listVariants}
    >
      {categories.map((category) => {
        const isActive = category.id === activeCategoryId

        return (
          <motion.button
            key={category.id}
            type="button"
            onClick={() => onChange(category.id)}
            className="group relative overflow-hidden rounded-[1.75rem] border px-5 py-4 text-left transition-[transform,border-color,box-shadow] duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] will-change-transform sm:px-6 sm:py-5"
            variants={itemVariants}
            whileHover={{ y: -2, transition: { duration: 0.2, ease: 'easeOut' } }}
            style={{
              borderColor:
                isActive
                ? 'color-mix(in srgb, var(--color-primary) 52%, var(--color-border))'
                : 'var(--color-border)',
              background: 'color-mix(in srgb, var(--color-surface) 86%, transparent)',
              boxShadow: isActive ? 'var(--surface-shadow)' : '0 0 0 rgba(0, 0, 0, 0)',
            }}
            aria-pressed={isActive}
          >
            <div
              className="pointer-events-none absolute inset-0 transition-opacity duration-300 ease-out"
              style={{
                opacity: isActive ? 1 : 0,
                background:
                  'linear-gradient(180deg, color-mix(in srgb, var(--color-surface) 96%, white 4%), color-mix(in srgb, var(--color-surface-muted) 64%, transparent))',
              }}
            />
            <ThemeShiftBackdrop variant="card" />
            <div className="relative z-10 flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <StateIconBlock
                  active={isActive}
                  className="size-11 rounded-2xl"
                  icon={(props) => <TechCategoryIcon icon={category.icon} {...props} />}
                />
                <span className="font-display text-[1.3rem] font-semibold tracking-[-0.04em] text-[var(--color-text)]">
                  {category.label}
                </span>
              </div>

              <motion.span
                className="flex size-10 shrink-0 items-center justify-center rounded-full"
                animate={{
                  x: isActive ? 0 : -4,
                  opacity: isActive ? 1 : 0.5,
                }}
                transition={{ duration: 0.28, ease: easeOut }}
                style={{
                  color: isActive ? 'var(--color-primary)' : 'var(--color-muted)',
                }}
              >
                <ChevronRightIcon className="size-5" />
              </motion.span>
            </div>
          </motion.button>
        )
      })}
    </motion.div>
  )
}
