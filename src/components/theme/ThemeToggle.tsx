import { motion, useReducedMotion } from 'framer-motion'
import { jellyfishGif } from '../../assets/experience'
import { useTheme } from '../../hooks/useTheme'
import { SakuraIcon } from '../common/Icons'
import { ThemeModeTransition } from './ThemeModeTransition'

const LIGHT_DRIFT = {
  x: [-10, 8, -4, 10, -8, -10],
  y: [7, -8, 4, -9, 6, 7],
  rotate: [-14, 16, -8, 12, -10, -14],
  scale: [0.96, 1.08, 0.98, 1.05, 0.98, 0.96],
}

const DARK_DRIFT = {
  x: [-5, 8, -4, 7, -6, -5],
  y: [7, -8, 2, -7, 5, 7],
  rotate: [-6, 6, -3, 5, -5, -6],
  scale: [0.97, 1.05, 0.99, 1.03, 0.99, 0.97],
}

const DRIFT_TIMES = [0, 0.18, 0.38, 0.6, 0.82, 1]

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
          Sakura by day, jelly drift by night.
        </p>
      </div>

      <button
        type="button"
        aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
        aria-pressed={theme === 'dark'}
        onClick={toggleTheme}
        className="group relative inline-flex size-[66px] shrink-0 items-center justify-center rounded-full border backdrop-blur-xl transition-[transform,background,border-color,box-shadow] duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 sm:size-[70px]"
        style={{
          borderColor: 'var(--color-border)',
          background: isLight
            ? 'linear-gradient(180deg, rgba(244,250,255,0.98), rgba(235,246,255,0.98), rgba(246,241,249,0.96))'
            : 'linear-gradient(180deg, rgba(8,14,31,0.98), rgba(10,19,42,0.98), rgba(13,19,44,0.98))',
          boxShadow: isLight
            ? '0 16px 34px rgba(122,175,231,0.16)'
            : '0 20px 44px rgba(2,8,24,0.56)',
        }}
      >
        <div
          className="absolute inset-[4px] rounded-full border transition-[background,border-color,box-shadow] duration-300"
          style={{
            borderColor: isLight ? 'rgba(182,220,250,0.94)' : 'rgba(163,178,255,0.3)',
            background: isLight
              ? 'conic-gradient(from 180deg, rgba(255,255,255,0.12), rgba(220,239,255,0.84), rgba(246,203,227,0.58), rgba(194,230,255,0.9), rgba(255,255,255,0.08))'
              : 'linear-gradient(180deg, rgba(20,38,82,0.92), rgba(11,23,52,0.94))',
            boxShadow: isLight
              ? '0 0 0 1px rgba(217,239,255,0.84) inset'
              : '0 0 0 1px rgba(82,100,164,0.28) inset, 0 10px 18px rgba(6,10,30,0.22) inset',
          }}
        />

        <div
          className="absolute inset-[9px] rounded-full p-[5px] transition-[background] duration-300"
          style={{
            background: isLight
              ? 'conic-gradient(from 180deg, rgba(255,255,255,0.18), rgba(215,238,255,0.86), rgba(244,208,229,0.62), rgba(202,232,255,0.9), rgba(235,247,255,0.16))'
              : 'linear-gradient(180deg, rgba(23,44,92,0.84), rgba(11,24,53,0.92))',
          }}
        >
          <div
            className="relative h-full w-full overflow-hidden rounded-full transition-[background] duration-300"
            style={{
              background: isLight
                ? 'radial-gradient(circle at 30% 24%, rgba(250,253,255,0.96), rgba(230,244,255,0.9) 46%, rgba(233,239,252,0.84) 100%)'
                : 'radial-gradient(circle at 52% 22%, rgba(166,188,255,0.16), transparent 22%), radial-gradient(circle at 48% 76%, rgba(95,166,255,0.1), transparent 24%), linear-gradient(180deg, rgba(18,34,72,0.96), rgba(10,20,45,0.98) 58%, rgba(11,18,40,0.99))',
            }}
          >
            <div
              className="absolute inset-0 rounded-full transition-[background] duration-300"
              style={{
                background: isLight
                  ? 'radial-gradient(circle at 22% 42%, rgba(196,232,255,0.24), transparent 24%), radial-gradient(circle at 74% 70%, rgba(255,214,233,0.16), transparent 28%), radial-gradient(circle at 64% 28%, rgba(255,255,255,0.24), transparent 18%)'
                  : 'radial-gradient(circle at 50% 20%, rgba(223,234,255,0.08), transparent 16%), radial-gradient(circle at 50% 82%, rgba(118,182,255,0.08), transparent 20%), radial-gradient(circle at 28% 34%, rgba(255,255,255,0.04), transparent 12%)',
              }}
            />

            <motion.div
              className="absolute left-1/2 top-1/2 z-[2]"
              animate={
                reduceMotion
                  ? isLight
                    ? { x: -10, y: 7, rotate: -14, scale: 0.96 }
                    : { x: -6, y: 8, rotate: -8, scale: 0.95 }
                  : isLight
                    ? LIGHT_DRIFT
                    : DARK_DRIFT
              }
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      duration: isLight ? 4.6 : 4.2,
                      ease: 'easeInOut',
                      repeat: Infinity,
                      times: DRIFT_TIMES,
                    }
              }
            >
              <ThemeModeTransition
                className="-translate-x-1/2 -translate-y-1/2"
                light={
                  <SakuraIcon className="block size-[18px] drop-shadow-[0_6px_12px_rgba(244,114,182,0.24)] sm:size-[20px]" />
                }
                dark={
                  <div
                    className="flex h-[34px] w-[28px] items-center justify-center overflow-visible rounded-full"
                    style={{
                      background:
                        'radial-gradient(circle at 50% 24%, rgba(203,225,255,0.05), transparent 34%), radial-gradient(circle at 50% 82%, rgba(72,142,230,0.04), transparent 30%)',
                    }}
                  >
                    <img
                      src={jellyfishGif}
                      alt=""
                      aria-hidden="true"
                      className="block h-[30px] w-[24px] object-contain [backface-visibility:hidden] [transform:translateZ(0)] [will-change:transform]"
                      style={{
                        filter: 'drop-shadow(0 8px 18px rgba(96,165,250,0.22))',
                      }}
                    />
                  </div>
                }
              />
            </motion.div>
          </div>
        </div>
      </button>
    </div>
  )
}
