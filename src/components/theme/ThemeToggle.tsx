import type { ComponentType, SVGProps } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'
import {
  JellyfishIcon,
  MusicOrbitIcon,
  SakuraIcon,
  SnowCrystalIcon,
  SunLowIcon,
  TablerMoonIcon,
} from '../common/Icons'

const ringSpring = {
  type: 'spring',
  stiffness: 220,
  damping: 18,
  mass: 0.84,
} as const

type OrbitVisual = {
  id: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
  iconClassName: string
  orbClassName: string
  orbStyle: {
    background: string
    boxShadow: string
    borderColor: string
  }
}

const lightOrbitVisuals: OrbitVisual[] = [
  {
    id: 'snow',
    Icon: SnowCrystalIcon,
    iconClassName: 'size-4.5 text-sky-100 sm:size-[19px]',
    orbClassName: '-top-0.5 left-[74%]',
    orbStyle: {
      background: 'linear-gradient(180deg, rgba(231,243,255,0.98), rgba(190,220,255,0.94))',
      boxShadow: '0 8px 18px rgba(96,165,250,0.22)',
      borderColor: 'rgba(191,219,254,0.98)',
    },
  },
  {
    id: 'sakura',
    Icon: SakuraIcon,
    iconClassName: 'size-[18px] text-rose-300 sm:size-5',
    orbClassName: 'top-[60%] left-[74%]',
    orbStyle: {
      background: 'linear-gradient(180deg, rgba(255,242,247,0.98), rgba(252,214,227,0.94))',
      boxShadow: '0 8px 18px rgba(244,114,182,0.18)',
      borderColor: 'rgba(251,207,232,0.96)',
    },
  },
]

const darkOrbitVisuals: OrbitVisual[] = [
  {
    id: 'jellyfish',
    Icon: JellyfishIcon,
    iconClassName: 'size-[15px] text-cyan-100 sm:size-4',
    orbClassName: '-top-0.5 left-[74%]',
    orbStyle: {
      background: 'linear-gradient(180deg, rgba(17,31,56,0.98), rgba(18,44,74,0.96))',
      boxShadow: '0 8px 18px rgba(34,211,238,0.22)',
      borderColor: 'rgba(125,211,252,0.2)',
    },
  },
  {
    id: 'music',
    Icon: MusicOrbitIcon,
    iconClassName: 'size-[15px] text-violet-100 sm:size-4',
    orbClassName: 'top-[60%] left-[74%]',
    orbStyle: {
      background: 'linear-gradient(180deg, rgba(30,24,56,0.98), rgba(48,29,86,0.96))',
      boxShadow: '0 8px 18px rgba(167,139,250,0.22)',
      borderColor: 'rgba(196,181,253,0.2)',
    },
  },
]

function getOrbitMotion(theme: 'light' | 'dark', direction: 'light-to-dark' | 'dark-to-light' | null) {
  if (direction === 'light-to-dark') {
    return {
      initial: { rotate: 0 },
      animate: { rotate: 180 },
    }
  }

  if (direction === 'dark-to-light') {
    return {
      initial: { rotate: 180 },
      animate: { rotate: 360 },
    }
  }

  return {
    initial: false,
    animate: { rotate: theme === 'light' ? 0 : 180 },
  }
}

export function ThemeToggle() {
  const { theme, toggleTheme, themeShiftDirection, themeShiftKey } = useTheme()
  const reduceMotion = useReducedMotion()
  const isLight = theme === 'light'
  const transition = reduceMotion ? { duration: 0 } : ringSpring
  const orbitMotion = getOrbitMotion(theme, themeShiftDirection)
  const orbitVisuals = isLight ? lightOrbitVisuals : darkOrbitVisuals

  return (
    <div className="flex items-center gap-3">
      <div className="hidden xl:block">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-muted)]">
          Orbit theme
        </p>
        <p className="mt-1 max-w-[7.5rem] text-xs leading-5 text-[var(--color-muted)]">
          Tip the ring to bring the sky from blossom-light to midnight.
        </p>
      </div>

      <button
        type="button"
        aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
        aria-pressed={theme === 'dark'}
        onClick={toggleTheme}
        className="group relative inline-flex size-[68px] shrink-0 items-center justify-center rounded-full border backdrop-blur-xl transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 sm:size-[72px]"
        style={{
          borderColor: 'var(--color-border)',
          background: isLight
            ? 'linear-gradient(135deg, rgba(255,255,255,0.94), rgba(251,241,246,0.96), rgba(233,246,255,0.96))'
            : 'linear-gradient(135deg, rgba(10,15,28,0.98), rgba(22,17,42,0.98), rgba(10,21,40,0.96))',
          boxShadow: isLight
            ? '0 20px 44px rgba(37,99,235,0.12)'
            : '0 18px 44px rgba(2,6,23,0.5)',
        }}
      >
        <motion.div
          className="absolute inset-[4px] rounded-full"
          animate={{ rotate: isLight ? 16 : 198 }}
          transition={transition}
          style={{
            background: isLight
              ? 'conic-gradient(from 180deg, rgba(255,255,255,0.2), rgba(255,203,143,0.72), rgba(190,229,255,0.88), rgba(255,214,229,0.84), rgba(255,255,255,0.12))'
              : 'conic-gradient(from 180deg, rgba(255,255,255,0.06), rgba(89,80,168,0.82), rgba(55,184,255,0.76), rgba(235,110,208,0.66), rgba(255,255,255,0.04))',
          }}
        />

        <div
          className="absolute inset-[9px] rounded-full border"
          style={{
            borderColor: isLight ? 'rgba(255,255,255,0.82)' : 'rgba(255,255,255,0.08)',
            background: isLight
              ? 'linear-gradient(180deg, rgba(214,239,255,0.78), rgba(255,225,175,0.76))'
              : 'linear-gradient(180deg, rgba(8,14,28,0.98), rgba(14,27,58,0.92))',
          }}
        >
          <motion.div
            className="absolute inset-[6px] rounded-full border"
            animate={{ rotate: isLight ? -8 : -188 }}
            transition={transition}
            style={{
              borderColor: isLight ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.08)',
              boxShadow: isLight
                ? 'inset 0 0 20px rgba(255,255,255,0.2)'
                : 'inset 0 0 24px rgba(125,211,252,0.08)',
            }}
          />

          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{ opacity: isLight ? 0.2 : 0.28 }}
            transition={transition}
            style={{
              background:
                'radial-gradient(circle at 30% 26%, rgba(255,255,255,0.6), transparent 28%), radial-gradient(circle at 68% 74%, rgba(255,255,255,0.14), transparent 34%)',
            }}
          />

          <motion.div
            key={`${theme}-${themeShiftKey}`}
            className="absolute inset-0"
            initial={orbitMotion.initial}
            animate={orbitMotion.animate}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.96, ease: [0.22, 1, 0.36, 1] }}
          >
            {orbitVisuals.map(({ id, Icon, iconClassName, orbClassName, orbStyle }) => (
              <motion.div
                key={id}
                className={`absolute flex size-[16px] items-center justify-center rounded-full border sm:size-[18px] ${orbClassName}`}
                animate={{
                  scale: reduceMotion ? 1 : [0.96, 1.05, 0.98],
                  y: reduceMotion ? 0 : [0, -1.2, 0],
                }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: id === 'snow' || id === 'jellyfish' ? 0 : 0.35 }
                }
                style={orbStyle}
              >
                <Icon className={iconClassName} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="absolute left-1/2 top-1/2 z-10 flex size-[32px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border sm:size-[36px]"
            animate={{
              scale: isLight ? 1 : 0.98,
              rotate: isLight ? 0 : -14,
            }}
            transition={transition}
            style={{
              borderColor: isLight ? 'rgba(255,229,179,0.95)' : 'rgba(191,219,254,0.22)',
              background: isLight
                ? 'radial-gradient(circle, rgba(255,239,177,1), rgba(255,183,77,0.95))'
                : 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.95), rgba(203,213,255,0.9))',
              boxShadow: isLight
                ? '0 0 20px rgba(255,186,77,0.4)'
                : '0 0 16px rgba(129,140,248,0.24)',
            }}
          >
            {isLight ? (
              <div className="relative">
                <SunLowIcon className="size-[18px] text-amber-600 sm:size-5" />
                <motion.div
                  className="absolute inset-[-6px] rounded-full"
                  animate={{ opacity: [0.32, 0.58, 0.32], scale: [0.92, 1.06, 0.92] }}
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
                <TablerMoonIcon className="size-[18px] text-slate-700 sm:size-5" />
                <motion.div
                  className="absolute inset-[-5px] rounded-full"
                  animate={{ opacity: [0.2, 0.42, 0.2], scale: [0.94, 1.04, 0.94] }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { duration: 2.8, repeat: Infinity, ease: 'easeInOut' }
                  }
                  style={{
                    border: '1px solid rgba(191,219,254,0.22)',
                  }}
                />
              </div>
            )}
          </motion.div>
        </div>
      </button>
    </div>
  )
}
