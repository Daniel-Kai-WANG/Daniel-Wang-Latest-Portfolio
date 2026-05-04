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
  const sunSize = isCard ? 80 : 132
  const moonSize = isCard ? 70 : 116
  const overlayOpacity = isCard ? 0.3 : 0.44
  const travelEase: [number, number, number, number] = [0.22, 1, 0.36, 1]
  const sunLeft = isCard ? '72%' : '70%'
  const moonLeft = isCard ? '24%' : '22%'
  const sunStartTop = lightToDark ? '-8%' : '80%'
  const sunMidTop = lightToDark ? '32%' : '48%'
  const sunEndTop = lightToDark ? '108%' : '8%'
  const moonStartTop = lightToDark ? '104%' : '10%'
  const moonMidTop = lightToDark ? '56%' : '42%'
  const moonEndTop = lightToDark ? '8%' : '108%'

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
        animate={{ opacity: [0, overlayOpacity, 0] }}
        transition={{ duration: 1.12, ease: 'easeInOut' }}
        style={{
          background: lightToDark
            ? 'linear-gradient(180deg, rgba(255,221,167,0.16), rgba(46,24,76,0.16), rgba(34,211,238,0.1))'
            : 'linear-gradient(180deg, rgba(122,92,255,0.1), rgba(255,228,239,0.18), rgba(196,232,255,0.14))',
        }}
      />

      <motion.div
        className="absolute inset-x-0 h-[42%] blur-3xl"
        initial={{ opacity: 0, top: lightToDark ? '62%' : '40%' }}
        animate={{
          top: lightToDark ? ['62%', '56%', '48%'] : ['40%', '48%', '58%'],
          opacity: [0, isCard ? 0.2 : 0.3, 0],
        }}
        transition={{ duration: 1.12, ease: 'easeInOut' }}
        style={{
          background: lightToDark
            ? 'linear-gradient(180deg, rgba(255,186,77,0.24), rgba(33,29,60,0))'
            : 'linear-gradient(180deg, rgba(196,232,255,0), rgba(255,214,148,0.18))',
        }}
      />

      <motion.div
        className="absolute inset-x-0 h-px"
        initial={{ opacity: 0, top: lightToDark ? '72%' : '34%' }}
        animate={{
          top: lightToDark ? ['72%', '58%', '46%'] : ['34%', '46%', '58%'],
          opacity: [0, isCard ? 0.42 : 0.58, 0],
        }}
        transition={{ duration: 1.06, ease: 'easeInOut' }}
        style={{
          background: lightToDark
            ? 'linear-gradient(90deg, transparent, rgba(255,214,148,0.72), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(214,234,255,0.72), transparent)',
        }}
      />

      <motion.div
        className="absolute rounded-full blur-2xl"
        initial={{
          left: sunLeft,
          top: sunStartTop,
          opacity: 0,
          scale: 0.78,
        }}
        animate={{
          left: [sunLeft, `calc(${sunLeft} - 2%)`, `calc(${sunLeft} - 4%)`],
          top: [sunStartTop, sunMidTop, sunEndTop],
          opacity: [0, 0.72, 0],
          scale: [0.8, 1, 0.86],
        }}
        transition={{ duration: 1.14, ease: travelEase }}
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
          left: sunLeft,
          top: sunStartTop,
          opacity: 0,
          scale: 0.82,
        }}
        animate={{
          left: [sunLeft, `calc(${sunLeft} - 2%)`, `calc(${sunLeft} - 4%)`],
          top: [sunStartTop, sunMidTop, sunEndTop],
          opacity: [0, 0.95, 0],
          scale: [0.82, 1, 0.94],
        }}
        transition={{ duration: 1.14, ease: travelEase }}
        style={{ width: `${sunSize}px`, height: `${sunSize}px` }}
      >
        <SunIcon className="size-7 text-amber-50" />
      </motion.div>

      <motion.div
        className="absolute rounded-full blur-2xl"
        initial={{
          left: moonLeft,
          top: moonStartTop,
          opacity: 0,
          scale: 0.72,
        }}
        animate={{
          left: [moonLeft, `calc(${moonLeft} + 2%)`, `calc(${moonLeft} + 4%)`],
          top: [moonStartTop, moonMidTop, moonEndTop],
          opacity: [0, 0.7, 0],
          scale: [0.72, 0.96, 0.88],
        }}
        transition={{ duration: 1.14, ease: travelEase }}
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
          left: moonLeft,
          top: moonStartTop,
          opacity: 0,
          scale: 0.82,
        }}
        animate={{
          left: [moonLeft, `calc(${moonLeft} + 2%)`, `calc(${moonLeft} + 4%)`],
          top: [moonStartTop, moonMidTop, moonEndTop],
          opacity: [0, 0.92, 0],
          scale: [0.82, 1, 0.94],
        }}
        transition={{ duration: 1.14, ease: travelEase }}
        style={{ width: `${moonSize}px`, height: `${moonSize}px` }}
      >
        <MoonIcon className="size-6 text-slate-50" />
      </motion.div>
    </div>
  )
}
