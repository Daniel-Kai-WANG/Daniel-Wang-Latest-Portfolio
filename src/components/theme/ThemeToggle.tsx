import { motion, useReducedMotion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'
import { JellyfishIcon, SnowflakeIcon } from '../common/Icons'

const LIGHT_ELEMENT_ANIMATION = {
  x: [10, 14, 8, 13, 10],
  y: [0, -4, 2, 5, 0],
  scale: [1, 1.03, 0.99, 1.02, 1],
}

const DARK_ELEMENT_ANIMATION = {
  x: [10, 12, 8, 11, 10],
  y: [0, -7, -3, 2, 0],
  scale: [1, 1.04, 0.98, 1.02, 1],
}

const ORB_TIMES = [0, 0.2, 0.46, 0.76, 1]

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
        <p className="mt-1 max-w-[7.5rem] text-xs leading-5 text-[var(--color-muted)]">
          Sakura frost by day, deep-sea bubble glow by night.
        </p>
      </div>

      <button
        type="button"
        aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
        aria-pressed={theme === 'dark'}
        onClick={toggleTheme}
        className="group relative inline-flex size-[66px] shrink-0 items-center justify-center rounded-full border backdrop-blur-xl transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 sm:size-[70px]"
        style={{
          borderColor: 'var(--color-border)',
          background: isLight
            ? 'linear-gradient(180deg, rgba(244,249,255,0.98), rgba(238,246,255,0.98), rgba(248,244,251,0.98))'
            : 'linear-gradient(180deg, rgba(9,13,28,0.98), rgba(12,18,36,0.98), rgba(14,15,33,0.98))',
          boxShadow: isLight
            ? '0 16px 34px rgba(122,175,231,0.18)'
            : '0 20px 44px rgba(3,8,24,0.56)',
        }}
      >
        <div
          className="absolute inset-[4px] rounded-full border"
          style={{
            borderColor: isLight ? 'rgba(145,205,255,0.92)' : 'rgba(92,112,145,0.54)',
            boxShadow: isLight
              ? '0 0 0 1px rgba(207,234,255,0.75) inset'
              : '0 0 0 1px rgba(62,82,120,0.28) inset',
          }}
        />

        <div
          className="absolute inset-[9px] rounded-full p-[5px]"
          style={{
            background: isLight
              ? 'conic-gradient(from 180deg, rgba(255,255,255,0.16), rgba(255,219,239,0.66), rgba(192,228,255,0.94), rgba(240,208,247,0.58), rgba(235,247,255,0.18))'
              : 'conic-gradient(from 180deg, rgba(255,255,255,0.03), rgba(73,93,126,0.32), rgba(107,174,255,0.72), rgba(71,132,220,0.56), rgba(255,255,255,0.03))',
          }}
        >
          <div
            className="relative h-full w-full rounded-full overflow-hidden"
            style={{
              background: isLight
                ? 'radial-gradient(circle at 28% 26%, rgba(255,248,252,0.94), rgba(234,244,255,0.86) 42%, rgba(226,236,248,0.8) 100%)'
                : 'radial-gradient(circle at 76% 24%, rgba(115,156,227,0.24), transparent 24%), radial-gradient(circle at 28% 74%, rgba(99,155,219,0.14), transparent 26%), linear-gradient(180deg, rgba(20,42,78,0.92), rgba(10,23,45,0.97) 54%, rgba(8,17,34,0.99))',
            }}
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: isLight
                  ? 'radial-gradient(circle at 22% 42%, rgba(255,214,233,0.14), transparent 24%), radial-gradient(circle at 76% 74%, rgba(176,224,255,0.18), transparent 28%), radial-gradient(circle at 64% 28%, rgba(255,255,255,0.26), transparent 18%)'
                  : 'radial-gradient(circle at 74% 24%, rgba(177,214,255,0.2), transparent 18%), radial-gradient(circle at 36% 78%, rgba(129,198,255,0.14), transparent 24%), radial-gradient(circle at 26% 28%, rgba(255,255,255,0.06), transparent 14%)',
              }}
            />

            {isLight ? (
              <div className="absolute left-[20%] top-[26%] opacity-70">
                <SnowflakeIcon className="size-[10px] text-sky-300 sm:size-[11px]" />
              </div>
            ) : null}

            <motion.div
              className="absolute left-1/2 top-1/2 z-[2]"
              animate={
                reduceMotion
                  ? { x: 10, y: 0, scale: 1 }
                  : isLight
                    ? LIGHT_ELEMENT_ANIMATION
                    : DARK_ELEMENT_ANIMATION
              }
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      duration: isLight ? 7.8 : 8.8,
                      ease: 'easeInOut',
                      repeat: Infinity,
                      times: ORB_TIMES,
                    }
              }
            >
              {isLight ? (
                <img
                  src="/seasonal/sakura-a.png"
                  alt=""
                  aria-hidden="true"
                  className="block size-[18px] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_6px_12px_rgba(244,114,182,0.3)] sm:size-[20px]"
                />
              ) : (
                <JellyfishIcon className="size-[18px] -translate-x-1/2 -translate-y-1/2 text-sky-300 drop-shadow-[0_8px_18px_rgba(56,189,248,0.4)] sm:size-[20px]" />
              )}
            </motion.div>
          </div>
        </div>
      </button>
    </div>
  )
}
