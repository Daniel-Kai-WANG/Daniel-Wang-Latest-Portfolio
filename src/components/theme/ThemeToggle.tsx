import { motion, useReducedMotion } from 'framer-motion'
import {
  JellyfishIcon,
  MoonIcon,
  MusicNoteIcon,
  PetalIcon,
  SnowflakeIcon,
  SunIcon,
} from '../common/Icons'
import { useTheme } from '../../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const reduceMotion = useReducedMotion()
  const isLight = theme === 'light'

  return (
    <div className="flex items-center gap-3">
      <div className="hidden xl:block">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-muted)]">
          Spin the sky
        </p>
        <p className="mt-1 max-w-[8rem] text-xs leading-5 text-[var(--color-muted)]">
          Tap the capsule to flip the world in 3D.
        </p>
      </div>

      <button
        type="button"
        aria-label="Toggle portfolio theme"
        aria-pressed={theme === 'dark'}
        onClick={toggleTheme}
        className="group relative inline-flex h-[66px] w-[138px] items-center rounded-full border px-2 shadow-[0_18px_44px_rgba(15,23,42,0.18)] backdrop-blur-xl"
        style={{
          borderColor: 'var(--color-border)',
          background: isLight
            ? 'linear-gradient(135deg, rgba(255,255,255,0.88), rgba(248,239,246,0.94), rgba(235,246,255,0.92))'
            : 'linear-gradient(135deg, rgba(17,18,29,0.94), rgba(24,17,37,0.96), rgba(12,23,42,0.9))',
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
      >
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.24),transparent_55%)]" />

        <div className="relative flex w-full items-center justify-between px-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-muted)]">
          <span className="inline-flex items-center gap-1.5">
            <PetalIcon className="size-3.5 text-rose-300" />
            Dawn
          </span>
          <span className="inline-flex items-center gap-1.5">
            Midnight
            <MusicNoteIcon className="size-3.5 text-fuchsia-200" />
          </span>
        </div>

        <motion.div
          className="absolute left-2 top-2 flex h-[50px] w-[62px] items-center justify-center rounded-full border"
          animate={{
            x: isLight ? 0 : 62,
            rotateY: isLight ? 0 : 180,
            rotateX: isLight ? -6 : 8,
          }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { type: 'spring', stiffness: 260, damping: 20, mass: 0.8 }
          }
          style={{
            transformStyle: 'preserve-3d',
            borderColor: isLight ? 'rgba(246,168,200,0.26)' : 'rgba(255,255,255,0.1)',
            background: isLight
              ? 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(255,232,241,0.96))'
              : 'linear-gradient(135deg, rgba(255,89,219,0.94), rgba(124,92,255,0.96), rgba(34,211,238,0.86))',
            boxShadow: isLight
              ? '0 14px 28px rgba(246,168,200,0.24)'
              : '0 16px 30px rgba(2,6,23,0.4)',
          }}
        >
          <motion.div
            className="absolute inset-1 rounded-full"
            animate={{
              rotateY: isLight ? 0 : 180,
            }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            style={{
              transformStyle: 'preserve-3d',
              background: isLight
                ? 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.96), rgba(255,239,245,0.96), rgba(235,246,255,0.92))'
                : 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.16), rgba(255,79,216,0.46), rgba(34,211,238,0.22))',
            }}
          />

          <motion.div
            className="relative z-10 flex items-center justify-center"
            animate={{ rotateY: isLight ? 0 : 180 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {isLight ? (
              <div className="flex items-center gap-1.5">
                <SunIcon className="size-5 text-amber-500" />
                <div className="flex items-center gap-1">
                  <PetalIcon className="size-3.5 text-rose-400" />
                  <SnowflakeIcon className="size-3.5 text-sky-300" />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <MoonIcon className="size-5 text-slate-50" />
                <div className="flex items-center gap-1">
                  <MusicNoteIcon className="size-3.5 text-fuchsia-100" />
                  <JellyfishIcon className="size-4 text-cyan-100" />
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </button>
    </div>
  )
}
