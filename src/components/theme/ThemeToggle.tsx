import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import type { PanInfo } from 'framer-motion'
import { MoonIcon, PetalIcon, SnowflakeIcon, SunIcon } from '../common/Icons'
import { cn } from '../../lib/cn'
import { useTheme } from '../../hooks/useTheme'

const PULL_THRESHOLD = 34
const MAX_PULL = 58

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const reduceMotion = useReducedMotion()
  const [dragDistance, setDragDistance] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const baseProgress = theme === 'light' ? 1 : 0
  const previewProgress = isDragging
    ? Math.min(
        1,
        Math.max(0, theme === 'light' ? 1 - dragDistance / MAX_PULL : dragDistance / MAX_PULL),
      )
    : baseProgress

  const handleDrag = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setDragDistance(Math.max(0, Math.min(MAX_PULL, info.offset.y)))
  }

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const shouldToggle = info.offset.y > PULL_THRESHOLD || info.velocity.y > 260
    setIsDragging(false)
    setDragDistance(0)

    if (shouldToggle) {
      toggleTheme()
    }
  }

  return (
    <div className="flex items-center gap-3">
      <div className="hidden xl:block">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-muted)]">
          Pull the charm
        </p>
        <p className="mt-1 max-w-[7rem] text-xs leading-5 text-[var(--color-muted)]">
          Let the moon fall and the sun rise.
        </p>
      </div>

      <button
        type="button"
        aria-label="Toggle portfolio theme"
        aria-pressed={theme === 'dark'}
        onClick={() => {
          if (!isDragging) {
            toggleTheme()
          }
        }}
        className={cn(
          'relative inline-flex h-[104px] w-[92px] items-end justify-center overflow-hidden rounded-[30px] border px-3 pb-3 pt-2 text-left backdrop-blur-xl',
          theme === 'light'
            ? 'bg-white/82 text-sky-700 shadow-[0_18px_40px_rgba(56,189,248,0.14)]'
            : 'bg-black/28 text-fuchsia-200 shadow-[0_18px_46px_rgba(124,92,255,0.22)]',
        )}
        style={{
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
          <div className="h-4 w-px bg-[var(--color-border)]" />
        </div>

        <motion.div
          drag={reduceMotion ? false : 'y'}
          dragConstraints={{ top: 0, bottom: MAX_PULL }}
          dragElastic={0.06}
          onDragStart={() => setIsDragging(true)}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={{ y: isDragging ? dragDistance : 0 }}
          transition={{ duration: 0.14, ease: 'easeOut' }}
          className="absolute left-1/2 top-2 z-20 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border"
          style={{
            borderColor: 'var(--color-border)',
            background:
              theme === 'light'
                ? 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(255,223,236,0.92))'
                : 'linear-gradient(135deg, rgba(255,79,216,0.96), rgba(124,92,255,0.94))',
          }}
        >
          <div
            className="absolute left-1/2 top-full h-7 w-px -translate-x-1/2"
            style={{
              background:
                theme === 'light'
                  ? 'linear-gradient(180deg, rgba(246,168,200,0.72), transparent)'
                  : 'linear-gradient(180deg, rgba(255,255,255,0.34), transparent)',
            }}
          />
          {theme === 'light' ? (
            <PetalIcon className="size-4 text-rose-400" />
          ) : (
            <SnowflakeIcon className="size-4 text-white" />
          )}
        </motion.div>

        <div
          className="relative h-full w-full overflow-hidden rounded-[22px] border"
          style={{
            borderColor:
              theme === 'light'
                ? 'rgba(246,168,200,0.24)'
                : 'rgba(255,255,255,0.12)',
            background:
              theme === 'light'
                ? 'linear-gradient(180deg, rgba(255,249,252,0.98), rgba(236,248,255,0.95))'
                : 'linear-gradient(180deg, rgba(16,16,24,0.98), rgba(23,16,38,0.94), rgba(12,21,39,0.92))',
          }}
        >
          <div
            className="absolute inset-x-2 top-2 h-8 rounded-full blur-xl"
            style={{
              opacity: theme === 'light' ? 0.35 : 0.4,
              background:
                theme === 'light'
                  ? 'rgba(255,214,235,0.72)'
                  : 'rgba(255,79,216,0.46)',
            }}
          />

          <motion.div
            className="absolute left-1/2 z-10 flex size-10 -translate-x-1/2 items-center justify-center rounded-full"
            animate={{
              y: 50 - previewProgress * 42,
              opacity: 0.35 + previewProgress * 0.65,
              scale: 0.82 + previewProgress * 0.18,
            }}
            transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background:
                'radial-gradient(circle, rgba(255,211,102,1), rgba(255,186,75,0.86), transparent 70%)',
              boxShadow: '0 0 20px rgba(255,192,87,0.42)',
            }}
          >
            <SunIcon className="size-5 text-amber-50" />
          </motion.div>

          <motion.div
            className="absolute left-1/2 z-10 flex size-9 -translate-x-1/2 items-center justify-center rounded-full"
            animate={{
              y: 8 + previewProgress * 44,
              opacity: 1 - previewProgress * 0.7,
              scale: 1 - previewProgress * 0.16,
            }}
            transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background:
                'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.86), rgba(197,203,255,0.78), rgba(124,92,255,0.7))',
              boxShadow: '0 0 22px rgba(124,92,255,0.22)',
            }}
          >
            <MoonIcon className="size-4 text-slate-50" />
          </motion.div>

          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/25 to-transparent dark:from-black/20" />
          <div
            className="absolute inset-x-3 bottom-3 rounded-full px-2 py-1 text-center text-[10px] font-bold uppercase tracking-[0.24em]"
            style={{
              background:
                theme === 'light'
                  ? 'rgba(255,255,255,0.72)'
                  : 'rgba(255,255,255,0.07)',
              color: 'var(--color-muted)',
            }}
          >
            {theme === 'light' ? 'Dawn' : 'Stage'}
          </div>
        </div>
      </button>
    </div>
  )
}
