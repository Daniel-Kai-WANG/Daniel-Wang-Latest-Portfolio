import { motion, useReducedMotion } from 'framer-motion'
import { MoonIcon, SnowflakeIcon, SunIcon } from '../common/Icons'
import { useTheme } from '../../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const reduceMotion = useReducedMotion()
  const isLight = theme === 'light'

  return (
    <div className="flex items-center gap-3">
      <div className="hidden xl:block">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-muted)]">
          Orbit theme
        </p>
        <p className="mt-1 max-w-[7rem] text-xs leading-5 text-[var(--color-muted)]">
          Tap the ring to rotate day into night.
        </p>
      </div>

      <button
        type="button"
        aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
        aria-pressed={theme === 'dark'}
        onClick={toggleTheme}
        className="group relative inline-flex size-[60px] shrink-0 items-center justify-center rounded-full border backdrop-blur-xl transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 sm:size-[64px]"
        style={{
          borderColor: 'var(--color-border)',
          background: isLight
            ? 'linear-gradient(135deg, rgba(255,255,255,0.92), rgba(250,240,246,0.96), rgba(236,248,255,0.94))'
            : 'linear-gradient(135deg, rgba(15,18,29,0.96), rgba(24,17,40,0.94), rgba(10,21,37,0.92))',
          boxShadow: isLight
            ? '0 18px 36px rgba(37,99,235,0.12)'
            : '0 18px 42px rgba(2,6,23,0.42)',
        }}
      >
        <motion.div
          className="absolute inset-[5px] rounded-full"
          animate={{ rotate: isLight ? 0 : 180 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { type: 'spring', stiffness: 220, damping: 20, mass: 0.8 }
          }
          style={{
            background: isLight
              ? 'conic-gradient(from 210deg, rgba(255,255,255,0.24), rgba(246,168,200,0.84), rgba(186,230,253,0.82), rgba(255,255,255,0.26))'
              : 'conic-gradient(from 210deg, rgba(255,255,255,0.1), rgba(255,79,216,0.82), rgba(34,211,238,0.74), rgba(255,255,255,0.08))',
          }}
        />

        <div
          className="absolute inset-[9px] rounded-full border"
          style={{
            borderColor: isLight ? 'rgba(255,255,255,0.82)' : 'rgba(255,255,255,0.08)',
            background: isLight
              ? 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.98), rgba(255,246,250,0.94), rgba(235,246,255,0.92))'
              : 'radial-gradient(circle at 35% 35%, rgba(36,37,49,0.95), rgba(23,20,37,0.96), rgba(10,20,32,0.94))',
          }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 h-[38px] w-[38px] sm:h-[40px] sm:w-[40px]"
          animate={{ rotate: isLight ? 0 : 180 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { type: 'spring', stiffness: 220, damping: 20, mass: 0.8 }
          }
        >
          <motion.div
            className="absolute left-1/2 top-0 flex size-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border sm:size-[17px]"
            animate={{
              scale: isLight ? 1 : 0.94,
              opacity: isLight ? 1 : 0.92,
            }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{
              borderColor: isLight ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.18)',
              background: isLight
                ? 'radial-gradient(circle, rgba(255,214,120,1), rgba(255,166,66,0.92))'
                : 'radial-gradient(circle, rgba(255,255,255,0.9), rgba(200,210,255,0.9))',
              boxShadow: isLight
                ? '0 0 16px rgba(255,192,87,0.42)'
                : '0 0 14px rgba(148,163,255,0.34)',
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
          className="relative z-10 flex items-center justify-center rounded-full"
          animate={{
            rotate: isLight ? 0 : -180,
            scale: isLight ? 1 : 0.98,
          }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { type: 'spring', stiffness: 210, damping: 19, mass: 0.85 }
          }
        >
          {isLight ? (
            <SunIcon className="size-5 text-amber-500 sm:size-6" />
          ) : (
            <MoonIcon className="size-5 text-slate-50 sm:size-6" />
          )}
        </motion.div>

        <motion.div
          className="absolute bottom-[11px] right-[11px] rounded-full"
          animate={{
            opacity: isLight ? 0.84 : 0.78,
            scale: isLight ? 1 : 1.04,
          }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.55, ease: 'easeOut' }}
        >
          <SnowflakeIcon
            className={isLight ? 'size-3.5 text-sky-300/90' : 'size-3.5 text-fuchsia-200/65'}
          />
        </motion.div>
      </button>
    </div>
  )
}
