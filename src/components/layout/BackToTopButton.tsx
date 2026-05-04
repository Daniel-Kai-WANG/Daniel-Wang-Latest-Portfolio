import { startTransition, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'
import { SunLowIcon, TablerMoonIcon } from '../common/Icons'

const SHOW_AFTER_Y = 720

export function BackToTopButton() {
  const { theme } = useTheme()
  const reduceMotion = useReducedMotion()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let frame = 0

    const updateVisibility = () => {
      const nextVisible = window.scrollY > SHOW_AFTER_Y

      startTransition(() => {
        setIsVisible((value) => (value === nextVisible ? value : nextVisible))
      })
    }

    const handleScroll = () => {
      if (frame !== 0) {
        return
      }

      frame = window.requestAnimationFrame(() => {
        updateVisibility()
        frame = 0
      })
    }

    updateVisibility()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)

      if (frame !== 0) {
        window.cancelAnimationFrame(frame)
      }
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          type="button"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 18, scale: 0.82 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.86 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.32, ease: [0.22, 1, 0.36, 1] }
          }
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: reduceMotion ? 'auto' : 'smooth',
            })
          }
          className="fixed bottom-6 right-4 z-50 inline-flex h-[54px] items-center gap-3 rounded-[1.35rem] border px-4 backdrop-blur-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 sm:bottom-8 sm:right-8"
          style={{
            borderColor: 'var(--color-border)',
            background:
              theme === 'light'
                ? 'linear-gradient(135deg, rgba(255,255,255,0.96), rgba(236,246,255,0.94), rgba(255,239,223,0.92))'
                : 'linear-gradient(135deg, rgba(14,18,31,0.98), rgba(23,18,45,0.96), rgba(11,25,42,0.94))',
            boxShadow:
              theme === 'light'
                ? '0 18px 42px rgba(37,99,235,0.14)'
                : '0 18px 42px rgba(2,6,23,0.52)',
          }}
        >
          <motion.div
            className="absolute inset-[4px] rounded-[1.1rem]"
            animate={{ rotate: theme === 'light' ? 18 : 194 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.7, ease: 'easeOut' }}
            style={{
              background:
                theme === 'light'
                  ? 'conic-gradient(from 180deg, rgba(255,255,255,0.18), rgba(255,209,153,0.72), rgba(190,229,255,0.82), rgba(255,229,236,0.64), rgba(255,255,255,0.12))'
                  : 'conic-gradient(from 180deg, rgba(255,255,255,0.05), rgba(124,92,255,0.76), rgba(34,211,238,0.72), rgba(255,79,216,0.58), rgba(255,255,255,0.03))',
            }}
          />

          <div
            className="absolute inset-[8px] rounded-[1rem] border"
            style={{
              borderColor: theme === 'light' ? 'rgba(255,255,255,0.82)' : 'rgba(255,255,255,0.08)',
              background:
                theme === 'light'
                  ? 'linear-gradient(180deg, rgba(218,240,255,0.8), rgba(255,228,176,0.78))'
                  : 'linear-gradient(180deg, rgba(8,14,28,0.98), rgba(16,30,60,0.92))',
            }}
          />

          <motion.div
            className="relative z-10 flex items-center gap-2"
            animate={{
              y: reduceMotion ? 0 : [0, -2.4, 0],
              opacity: [0.95, 1, 0.95],
            }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }
            }
          >
            {theme === 'light' ? (
              <div className="relative">
                <SunLowIcon className="size-6 text-amber-600" />
                <span className="absolute left-1/2 top-[-9px] h-2 w-px -translate-x-1/2 rounded-full bg-amber-500/70" />
              </div>
            ) : (
              <div className="relative">
                <TablerMoonIcon className="size-6 text-slate-100" />
                <span className="absolute left-1/2 top-[-10px] h-2 w-px -translate-x-1/2 rounded-full bg-cyan-100/70" />
              </div>
            )}
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text)]">
              Top
            </span>
          </motion.div>
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}
