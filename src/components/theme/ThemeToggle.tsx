import { motion, useReducedMotion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'
import { JellyfishIcon, SakuraIcon, SnowflakeIcon, StarfishIcon } from '../common/Icons'

const MOTION_TIMES = [0, 0.16, 0.34, 0.56, 0.78, 1]

const LIGHT_PET_MOTION = {
  x: [-8, 10, -6, 11, -4, -8],
  y: [6, -7, 2, -9, 8, 6],
  rotate: [-16, 18, -10, 14, -12, -16],
  scale: [0.96, 1.08, 0.98, 1.05, 0.98, 0.96],
}

const LIGHT_COMPANION_MOTION = {
  x: [8, -4, 10, -2, 6, 8],
  y: [-6, 5, -3, 7, -5, -6],
  rotate: [0, 22, -16, 12, -8, 0],
  scale: [0.92, 1.04, 0.96, 1.02, 0.94, 0.92],
}

const DARK_PET_MOTION = {
  x: [-6, 12, -4, 10, -8, -6],
  y: [8, -10, 0, -8, 9, 8],
  rotate: [-12, 18, -6, 16, -10, -12],
  scale: [0.97, 1.08, 0.98, 1.05, 0.98, 0.97],
}

const DARK_COMPANION_MOTION = {
  x: [10, -6, 8, -2, 6, 10],
  y: [-4, 9, -1, 7, -5, -4],
  rotate: [-4, 8, -6, 7, -5, -4],
  scale: [0.94, 1.02, 0.96, 1.03, 0.95, 0.94],
}

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
          Sakura frost by day, deep-ocean drift by night.
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
            ? 'linear-gradient(180deg, rgba(247,251,255,0.98), rgba(239,247,255,0.98), rgba(250,241,247,0.98))'
            : 'linear-gradient(180deg, rgba(8,14,31,0.98), rgba(10,20,44,0.98), rgba(15,20,49,0.98))',
          boxShadow: isLight
            ? '0 16px 34px rgba(122,175,231,0.16)'
            : '0 20px 44px rgba(2,8,24,0.56)',
        }}
      >
        <div
          className="absolute inset-[4px] rounded-full border"
          style={{
            borderColor: isLight ? 'rgba(186,220,249,0.92)' : 'rgba(163,178,255,0.32)',
            background: isLight
              ? 'conic-gradient(from 180deg, rgba(255,255,255,0.12), rgba(247,198,222,0.74), rgba(194,230,255,0.84), rgba(234,214,252,0.52), rgba(255,255,255,0.1))'
              : 'conic-gradient(from 180deg, rgba(255,255,255,0.03), rgba(34,74,132,0.62), rgba(104,167,255,0.74), rgba(123,118,255,0.62), rgba(255,255,255,0.03))',
            boxShadow: isLight
              ? '0 0 0 1px rgba(219,239,255,0.84) inset'
              : '0 0 0 1px rgba(82,100,164,0.36) inset',
          }}
        />

        <div
          className="absolute inset-[9px] rounded-full p-[5px]"
          style={{
            background: isLight
              ? 'conic-gradient(from 180deg, rgba(255,255,255,0.16), rgba(248,214,232,0.72), rgba(204,232,255,0.9), rgba(238,221,252,0.58), rgba(235,247,255,0.18))'
              : 'conic-gradient(from 180deg, rgba(255,255,255,0.03), rgba(63,82,134,0.32), rgba(107,174,255,0.68), rgba(120,112,255,0.5), rgba(255,255,255,0.03))',
          }}
        >
          <div
            className="relative h-full w-full overflow-hidden rounded-full"
            style={{
              background: isLight
                ? 'radial-gradient(circle at 28% 24%, rgba(255,249,252,0.96), rgba(232,244,255,0.88) 44%, rgba(228,238,252,0.82) 100%)'
                : 'radial-gradient(circle at 74% 20%, rgba(149,176,255,0.32), transparent 22%), radial-gradient(circle at 24% 74%, rgba(112,188,255,0.16), transparent 26%), linear-gradient(180deg, rgba(19,34,72,0.95), rgba(9,18,41,0.98) 56%, rgba(12,18,44,0.99))',
            }}
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: isLight
                  ? 'radial-gradient(circle at 22% 42%, rgba(255,214,233,0.18), transparent 24%), radial-gradient(circle at 78% 72%, rgba(174,224,255,0.2), transparent 28%), radial-gradient(circle at 64% 28%, rgba(255,255,255,0.24), transparent 18%)'
                  : 'radial-gradient(circle at 74% 24%, rgba(198,220,255,0.2), transparent 18%), radial-gradient(circle at 36% 78%, rgba(131,198,255,0.14), transparent 24%), radial-gradient(circle at 26% 28%, rgba(255,255,255,0.06), transparent 14%)',
              }}
            />

            <div
              className="absolute right-[16%] top-[18%] size-[14px] rounded-full sm:size-[15px]"
              style={{
                background: isLight
                  ? 'radial-gradient(circle, rgba(255,248,252,0.94), rgba(246,199,223,0.84))'
                  : 'radial-gradient(circle at 34% 30%, rgba(248,250,255,0.96), rgba(181,201,255,0.84), rgba(139,128,255,0.54))',
                boxShadow: isLight
                  ? '0 0 12px rgba(245,190,215,0.24)'
                  : '0 0 16px rgba(133,120,255,0.22)',
              }}
            />

            <motion.div
              className="absolute left-1/2 top-1/2 z-[2]"
              animate={
                reduceMotion
                  ? { x: -8, y: 6, rotate: -16, scale: 0.96 }
                  : isLight
                    ? LIGHT_PET_MOTION
                    : DARK_PET_MOTION
              }
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      duration: isLight ? 4.9 : 5.4,
                      ease: 'easeInOut',
                      repeat: Infinity,
                      times: MOTION_TIMES,
                    }
              }
            >
              {isLight ? (
                <SakuraIcon className="block size-[18px] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_6px_12px_rgba(244,114,182,0.24)] sm:size-[20px]" />
              ) : (
                <StarfishIcon
                  variant="pink"
                  className="block size-[18px] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_8px_18px_rgba(128,199,255,0.18)] sm:size-[20px]"
                />
              )}
            </motion.div>

            <motion.div
              className="absolute left-1/2 top-1/2 z-[2]"
              animate={
                reduceMotion
                  ? { x: 8, y: -6, rotate: 0, scale: 0.92 }
                  : isLight
                    ? LIGHT_COMPANION_MOTION
                    : DARK_COMPANION_MOTION
              }
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      duration: isLight ? 4.2 : 4.8,
                      ease: 'easeInOut',
                      repeat: Infinity,
                      times: MOTION_TIMES,
                    }
              }
            >
              {isLight ? (
                <SnowflakeIcon className="size-[10px] -translate-x-1/2 -translate-y-1/2 text-sky-300 drop-shadow-[0_4px_10px_rgba(125,211,252,0.24)] sm:size-[11px]" />
              ) : (
                <JellyfishIcon className="size-[12px] -translate-x-1/2 -translate-y-1/2 text-sky-200/90 drop-shadow-[0_6px_14px_rgba(96,165,250,0.28)] sm:size-[13px]" />
              )}
            </motion.div>
          </div>
        </div>
      </button>
    </div>
  )
}
