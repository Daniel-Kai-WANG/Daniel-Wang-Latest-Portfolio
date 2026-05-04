import { motion, useReducedMotion } from 'framer-motion'
import { MoonIcon, SnowflakeIcon, SunIcon } from '../common/Icons'
import { useTheme } from '../../hooks/useTheme'

const ringSpring = {
  type: 'spring',
  stiffness: 220,
  damping: 18,
  mass: 0.84,
} as const

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const reduceMotion = useReducedMotion()
  const isLight = theme === 'light'
  const transition = reduceMotion ? { duration: 0 } : ringSpring

  return (
    <div className="flex items-center gap-3">
      <div className="hidden xl:block">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-muted)]">
          Orbit theme
        </p>
        <p className="mt-1 max-w-[7.5rem] text-xs leading-5 text-[var(--color-muted)]">
          Tap the ring to tip the sky from day to night.
        </p>
      </div>

      <button
        type="button"
        aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
        aria-pressed={theme === 'dark'}
        onClick={toggleTheme}
        className="group relative inline-flex size-[66px] shrink-0 items-center justify-center rounded-full border backdrop-blur-xl transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 sm:size-[70px]"
        style={{
          borderColor: 'var(--color-border)',
          background: isLight
            ? 'linear-gradient(135deg, rgba(255,255,255,0.92), rgba(251,243,248,0.96), rgba(235,246,255,0.94))'
            : 'linear-gradient(135deg, rgba(12,16,28,0.96), rgba(20,16,36,0.96), rgba(10,19,34,0.94))',
          boxShadow: isLight
            ? '0 20px 40px rgba(37,99,235,0.12)'
            : '0 18px 42px rgba(2,6,23,0.46)',
        }}
      >
        <motion.div
          className="absolute inset-[5px] rounded-full"
          animate={{ rotate: isLight ? 22 : 202 }}
          transition={transition}
          style={{
            background: isLight
              ? 'conic-gradient(from 180deg, rgba(255,255,255,0.18), rgba(246,168,200,0.82), rgba(255,222,158,0.7), rgba(186,230,253,0.8), rgba(255,255,255,0.14))'
              : 'conic-gradient(from 180deg, rgba(255,255,255,0.06), rgba(124,92,255,0.74), rgba(34,211,238,0.76), rgba(255,79,216,0.66), rgba(255,255,255,0.04))',
          }}
        />

        <div
          className="absolute inset-[10px] rounded-full border"
          style={{
            borderColor: isLight ? 'rgba(255,255,255,0.84)' : 'rgba(255,255,255,0.08)',
            background: isLight
              ? 'linear-gradient(180deg, rgba(136,206,255,0.58), rgba(255,217,145,0.74))'
              : 'linear-gradient(180deg, rgba(6,12,24,0.98), rgba(14,28,60,0.92))',
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{ opacity: isLight ? 0.18 : 0.34 }}
            transition={transition}
            style={{
              background:
                'radial-gradient(circle at 30% 26%, rgba(255,255,255,0.58), transparent 28%), radial-gradient(circle at 68% 74%, rgba(255,255,255,0.14), transparent 32%)',
            }}
          />

          <motion.div
            className="absolute left-1/2 top-1/2 h-[38px] w-[38px] sm:h-[42px] sm:w-[42px]"
            animate={{ rotate: isLight ? -20 : 160 }}
            transition={transition}
          >
            <motion.div
              className="absolute left-1/2 top-0 flex size-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border sm:size-[18px]"
              animate={{
                scale: isLight ? 1 : 0.96,
                opacity: isLight ? 1 : 0.92,
              }}
              transition={transition}
              style={{
                borderColor: isLight ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.16)',
                background: isLight
                  ? 'radial-gradient(circle, rgba(255,229,148,1), rgba(255,167,76,0.94))'
                  : 'radial-gradient(circle, rgba(255,255,255,0.94), rgba(198,210,255,0.9))',
                boxShadow: isLight
                  ? '0 0 18px rgba(255,192,87,0.48)'
                  : '0 0 14px rgba(148,163,255,0.32)',
              }}
            >
              {isLight ? (
                <SunIcon className="size-2.5 text-amber-50 sm:size-3" />
              ) : (
                <MoonIcon className="size-2.5 text-slate-700 sm:size-3" />
              )}
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute inset-[9px] rounded-full border border-white/10"
            animate={{ rotate: isLight ? -8 : -188 }}
            transition={transition}
          >
            <motion.div
              className="absolute left-[18%] top-[20%] size-1 rounded-full bg-white"
              animate={{ opacity: isLight ? 0 : 0.82, scale: isLight ? 0.5 : 1 }}
              transition={transition}
            />
            <motion.div
              className="absolute right-[20%] top-[30%] size-[3px] rounded-full bg-white"
              animate={{ opacity: isLight ? 0 : 0.76, scale: isLight ? 0.4 : 1 }}
              transition={transition}
            />
            <motion.div
              className="absolute right-[28%] bottom-[18%] size-[2px] rounded-full bg-white"
              animate={{ opacity: isLight ? 0 : 0.58, scale: isLight ? 0.4 : 1 }}
              transition={transition}
            />
          </motion.div>

          <motion.div
            className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
            animate={{
              scale: isLight ? 1 : 0.98,
              rotate: isLight ? 0 : -16,
            }}
            transition={transition}
          >
            {isLight ? (
              <div className="relative">
                <SunIcon className="size-6 text-amber-500 sm:size-7" />
                <motion.div
                  className="absolute inset-[-6px] rounded-full"
                  animate={{ opacity: [0.35, 0.6, 0.35], scale: [0.92, 1.06, 0.92] }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { duration: 2.8, repeat: Infinity, ease: 'easeInOut' }
                  }
                  style={{
                    border: '1px solid rgba(255,214,120,0.42)',
                  }}
                />
              </div>
            ) : (
              <div className="relative">
                <MoonIcon className="size-6 text-slate-50 sm:size-7" />
                <motion.div
                  className="absolute bottom-[-4px] right-[-5px]"
                  animate={{ opacity: [0.54, 0.82, 0.54], y: [0, -1.5, 0] }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { duration: 2.6, repeat: Infinity, ease: 'easeInOut' }
                  }
                >
                  <SnowflakeIcon className="size-3 text-cyan-100/80" />
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </button>
    </div>
  )
}
