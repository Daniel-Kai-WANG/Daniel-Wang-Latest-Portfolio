import { motion, useReducedMotion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'
import { MoonIcon, SunIcon } from '../common/Icons'

type ThemeShiftBackdropProps = {
  variant?: 'section' | 'card'
}

export function ThemeShiftBackdrop({ variant = 'section' }: ThemeShiftBackdropProps) {
  const { isThemeShifting, themeShiftDirection, themeShiftKey } = useTheme()
  const reduceMotion = useReducedMotion()

  if (!isThemeShifting || !themeShiftDirection) {
    return null
  }

  const lightToDark = themeShiftDirection === 'light-to-dark'
  const isCard = variant === 'card'
  const sunSize = isCard ? 72 : 118
  const moonSize = isCard ? 62 : 102

  if (reduceMotion) {
    return (
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: lightToDark
            ? 'linear-gradient(180deg, rgba(255,191,102,0.12), rgba(34,211,238,0.12))'
            : 'linear-gradient(180deg, rgba(148,163,184,0.1), rgba(255,214,235,0.16))',
        }}
      />
    )
  }

  return (
    <div key={themeShiftKey} className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 1.05, ease: 'easeInOut' }}
        style={{
          background: lightToDark
            ? 'linear-gradient(180deg, rgba(255,214,148,0.18), rgba(123,92,255,0.12), rgba(34,211,238,0.12))'
            : 'linear-gradient(180deg, rgba(122,92,255,0.12), rgba(255,228,239,0.18), rgba(196,232,255,0.16))',
        }}
      />

      <motion.div
        className="absolute rounded-full blur-2xl"
        initial={{
          left: lightToDark ? '-10%' : '64%',
          top: lightToDark ? '68%' : '6%',
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          left: lightToDark ? ['-10%', '18%', '42%'] : ['64%', '42%', '14%'],
          top: lightToDark ? ['68%', '34%', '82%'] : ['6%', '30%', '74%'],
          opacity: [0, 0.7, 0],
          scale: [0.74, 1, 0.9],
        }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: `${sunSize}px`,
          height: `${sunSize}px`,
          background:
            'radial-gradient(circle, rgba(255,214,120,0.88), rgba(255,166,66,0.55), transparent 72%)',
        }}
      />
      <motion.div
        className="absolute flex items-center justify-center rounded-full"
        initial={{
          left: lightToDark ? '-7%' : '68%',
          top: lightToDark ? '69%' : '8%',
          opacity: 0,
          scale: 0.82,
        }}
        animate={{
          left: lightToDark ? ['-7%', '20%', '44%'] : ['68%', '44%', '16%'],
          top: lightToDark ? ['69%', '35%', '83%'] : ['8%', '31%', '75%'],
          opacity: [0, 0.95, 0],
          scale: [0.82, 1, 0.94],
        }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: `${sunSize}px`, height: `${sunSize}px` }}
      >
        <SunIcon className="size-7 text-amber-50" />
      </motion.div>

      <motion.div
        className="absolute rounded-full blur-2xl"
        initial={{
          left: lightToDark ? '72%' : '-12%',
          top: lightToDark ? '8%' : '76%',
          opacity: 0,
          scale: 0.72,
        }}
        animate={{
          left: lightToDark ? ['72%', '48%', '20%'] : ['-12%', '18%', '46%'],
          top: lightToDark ? ['8%', '30%', '76%'] : ['76%', '36%', '6%'],
          opacity: [0, 0.7, 0],
          scale: [0.72, 0.96, 0.88],
        }}
        transition={{ duration: 1.12, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: `${moonSize}px`,
          height: `${moonSize}px`,
          background:
            'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.82), rgba(197,203,255,0.48), transparent 74%)',
        }}
      />
      <motion.div
        className="absolute flex items-center justify-center rounded-full"
        initial={{
          left: lightToDark ? '74%' : '-9%',
          top: lightToDark ? '10%' : '77%',
          opacity: 0,
          scale: 0.82,
        }}
        animate={{
          left: lightToDark ? ['74%', '50%', '22%'] : ['-9%', '20%', '48%'],
          top: lightToDark ? ['10%', '31%', '77%'] : ['77%', '37%', '8%'],
          opacity: [0, 0.92, 0],
          scale: [0.82, 1, 0.94],
        }}
        transition={{ duration: 1.12, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: `${moonSize}px`, height: `${moonSize}px` }}
      >
        <MoonIcon className="size-6 text-slate-50" />
      </motion.div>
    </div>
  )
}
