import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'
import { JellyfishIcon, SnowCrystalIcon, SunLowIcon, TablerMoonIcon } from '../common/Icons'

const ringSpring = {
  type: 'spring',
  stiffness: 220,
  damping: 18,
  mass: 0.84,
} as const

const ICON_DELAY_MS = 1000

export function ThemeToggle() {
  const { theme, toggleTheme, themeShiftKey } = useTheme()
  const reduceMotion = useReducedMotion()
  const isLight = theme === 'light'
  const transition = reduceMotion ? { duration: 0 } : ringSpring
  const [centerTheme, setCenterTheme] = useState(theme)

  useEffect(() => {
    if (reduceMotion) {
      setCenterTheme(theme)
      return
    }

    const timer = window.setTimeout(() => {
      setCenterTheme(theme)
    }, ICON_DELAY_MS)

    return () => window.clearTimeout(timer)
  }, [theme, reduceMotion])

  const orbAngle = isLight ? 0 : 180
  const orbTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.84, delay: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }

  return (
    <div className="flex items-center gap-3">
      <div className="hidden xl:block">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-muted)]">
          Orbit theme
        </p>
        <p className="mt-1 max-w-[7.5rem] text-xs leading-5 text-[var(--color-muted)]">
          Flip the ring and move the sky from light into midnight.
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
            ? 'linear-gradient(135deg, rgba(255,255,255,0.94), rgba(239,247,255,0.96), rgba(255,244,232,0.94))'
            : 'linear-gradient(135deg, rgba(9,14,27,0.98), rgba(19,16,38,0.98), rgba(10,21,40,0.96))',
          boxShadow: isLight
            ? '0 20px 40px rgba(37,99,235,0.12)'
            : '0 18px 42px rgba(2,6,23,0.48)',
        }}
      >
        <motion.div
          className="absolute inset-[4px] rounded-full"
          animate={{ rotate: isLight ? 12 : 192 }}
          transition={transition}
          style={{
            background: isLight
              ? 'conic-gradient(from 180deg, rgba(255,255,255,0.2), rgba(255,220,173,0.76), rgba(197,232,255,0.88), rgba(245,214,230,0.64), rgba(255,255,255,0.1))'
              : 'conic-gradient(from 180deg, rgba(255,255,255,0.05), rgba(105,95,190,0.82), rgba(65,175,244,0.78), rgba(224,114,198,0.62), rgba(255,255,255,0.03))',
          }}
        />

        <div
          className="absolute inset-[9px] rounded-full border"
          style={{
            borderColor: isLight ? 'rgba(255,255,255,0.82)' : 'rgba(255,255,255,0.08)',
            background: isLight
              ? 'linear-gradient(180deg, rgba(222,242,255,0.84), rgba(255,233,186,0.8))'
              : 'linear-gradient(180deg, rgba(7,13,26,0.98), rgba(14,28,60,0.92))',
          }}
        >
          <div
            className="absolute inset-[6px] rounded-full border"
            style={{
              borderColor: isLight ? 'rgba(170,214,255,0.56)' : 'rgba(255,255,255,0.08)',
              boxShadow: isLight
                ? 'inset 0 0 20px rgba(255,255,255,0.2)'
                : 'inset 0 0 20px rgba(129,140,248,0.08)',
            }}
          />

          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{ opacity: isLight ? 0.2 : 0.28 }}
            transition={transition}
            style={{
              background:
                'radial-gradient(circle at 32% 28%, rgba(255,255,255,0.56), transparent 26%), radial-gradient(circle at 66% 74%, rgba(255,255,255,0.12), transparent 34%)',
            }}
          />

          <motion.div
            key={`${theme}-${themeShiftKey}`}
            className="absolute inset-0"
            initial={false}
            animate={{ rotate: orbAngle }}
            transition={orbTransition}
            style={{ transformOrigin: '50% 50%' }}
          >
            <motion.div
              className="absolute left-[73%] top-1/2 flex size-[18px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border sm:size-[20px]"
              animate={{
                scale: reduceMotion ? 1 : [0.98, 1.06, 0.98],
                y: reduceMotion ? '-50%' : ['-50%', '-58%', '-50%'],
              }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
              }
              style={{
                borderColor: isLight ? 'rgba(191,219,254,0.98)' : 'rgba(125,211,252,0.22)',
                background: isLight
                  ? 'linear-gradient(180deg, rgba(235,245,255,0.98), rgba(195,223,255,0.94))'
                  : 'linear-gradient(180deg, rgba(17,31,56,0.98), rgba(18,44,74,0.96))',
                boxShadow: isLight
                  ? '0 8px 18px rgba(96,165,250,0.2)'
                  : '0 8px 18px rgba(34,211,238,0.18)',
              }}
            >
              {isLight ? (
                <SnowCrystalIcon className="size-[15px] sm:size-4" />
              ) : (
                <JellyfishIcon className="size-[13px] text-cyan-100 sm:size-[14px]" />
              )}
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute left-1/2 top-1/2 z-10 flex size-[30px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border sm:size-[34px]"
            animate={{ scale: isLight ? 1 : 0.98 }}
            transition={transition}
            style={{
              borderColor: isLight ? 'rgba(255,224,156,0.95)' : 'rgba(191,219,254,0.24)',
              background: isLight
                ? 'radial-gradient(circle, rgba(255,239,177,1), rgba(255,186,77,0.96))'
                : 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.96), rgba(206,214,255,0.9))',
              boxShadow: isLight
                ? '0 0 18px rgba(255,186,77,0.36)'
                : '0 0 14px rgba(129,140,248,0.22)',
            }}
          >
            {centerTheme === 'light' ? (
              <div className="relative">
                <SunLowIcon className="size-[18px] text-amber-600 sm:size-5" />
                <motion.div
                  className="absolute inset-[-6px] rounded-full"
                  animate={{ opacity: [0.28, 0.54, 0.28], scale: [0.92, 1.06, 0.92] }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { duration: 2.8, repeat: Infinity, ease: 'easeInOut' }
                  }
                  style={{ border: '1px solid rgba(255,214,120,0.42)' }}
                />
              </div>
            ) : (
              <div className="relative">
                <TablerMoonIcon className="size-[18px] text-slate-700 sm:size-5" />
                <motion.div
                  className="absolute inset-[-5px] rounded-full"
                  animate={{ opacity: [0.18, 0.4, 0.18], scale: [0.94, 1.04, 0.94] }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { duration: 2.8, repeat: Infinity, ease: 'easeInOut' }
                  }
                  style={{ border: '1px solid rgba(191,219,254,0.22)' }}
                />
              </div>
            )}
          </motion.div>
        </div>
      </button>
    </div>
  )
}
