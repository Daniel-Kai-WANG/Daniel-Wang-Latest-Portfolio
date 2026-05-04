import { motion, useReducedMotion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'
import { SunLowIcon, TablerMoonIcon } from '../common/Icons'

type ThemeShiftBackdropProps = {
  variant?: 'section' | 'card'
}

function getTravelFrames(lightToDark: boolean) {
  if (lightToDark) {
    return {
      sunLeft: ['72%', '49%', '22%'],
      sunTop: ['16%', '40%', '82%'],
      moonLeft: ['88%', '80%', '68%'],
      moonTop: ['80%', '44%', '16%'],
    }
  }

  return {
    sunLeft: ['22%', '46%', '72%'],
    sunTop: ['82%', '42%', '16%'],
    moonLeft: ['68%', '80%', '88%'],
    moonTop: ['16%', '44%', '80%'],
  }
}

export function ThemeShiftBackdrop({ variant = 'section' }: ThemeShiftBackdropProps) {
  const { theme, isThemeShifting, themeShiftDirection, themeShiftKey } = useTheme()
  const reduceMotion = useReducedMotion()
  const lightToDark = themeShiftDirection === 'light-to-dark'
  const isCard = variant === 'card'
  const ambientSize = isCard ? 48 : 78
  const shiftSunSize = isCard ? 84 : 128
  const shiftMoonSize = isCard ? 76 : 116
  const overlayOpacity = isCard ? 0.26 : 0.4
  const travelEase: [number, number, number, number] = [0.22, 1, 0.36, 1]
  const travelFrames = getTravelFrames(lightToDark)

  const ambientBody = (
    <motion.div
      className="absolute"
      animate={{ opacity: isThemeShifting ? 0.22 : theme === 'light' ? 0.76 : 0.54 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.42, ease: 'easeOut' }}
      style={{
        right: isCard ? '10%' : '7%',
        top: isCard ? '10%' : '8%',
        width: `${ambientSize}px`,
        height: `${ambientSize}px`,
      }}
    >
      {theme === 'light' ? (
        <>
          <div
            className="absolute inset-0 rounded-full blur-2xl"
            style={{
              background:
                'radial-gradient(circle, rgba(255,229,148,0.66), rgba(255,217,122,0.4), transparent 74%)',
            }}
          />
          <div
            className="absolute inset-[16%] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(255,240,192,0.98), rgba(255,214,120,0.88), rgba(255,190,90,0.74))',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <SunLowIcon className="size-[46%] text-amber-100/80" />
          </div>
        </>
      ) : (
        <>
          <div
            className="absolute inset-0 rounded-full blur-2xl"
            style={{
              background:
                'radial-gradient(circle, rgba(191,219,254,0.28), rgba(129,140,248,0.18), transparent 78%)',
            }}
          />
          <div
            className="absolute inset-[18%] rounded-full"
            style={{
              background:
                'radial-gradient(circle at 32% 28%, rgba(255,255,255,0.98), rgba(216,224,255,0.92), rgba(183,195,255,0.72))',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <TablerMoonIcon className="size-[44%] text-slate-700/78" />
          </div>
        </>
      )}
    </motion.div>
  )

  if (!isThemeShifting || !themeShiftDirection) {
    return <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">{ambientBody}</div>
  }

  if (reduceMotion) {
    return (
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        {ambientBody}
        <div
          className="absolute inset-0"
          style={{
            background: lightToDark
              ? 'linear-gradient(180deg, rgba(255,214,148,0.14), rgba(125,211,252,0.08), rgba(12,18,36,0.14))'
              : 'linear-gradient(180deg, rgba(148,163,184,0.1), rgba(255,235,169,0.18), rgba(196,232,255,0.14))',
          }}
        />
      </div>
    )
  }

  return (
    <div key={themeShiftKey} className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      {ambientBody}

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, overlayOpacity, 0] }}
        transition={{ duration: 1.1, ease: 'easeInOut' }}
        style={{
          background: lightToDark
            ? 'linear-gradient(180deg, rgba(255,228,183,0.14), rgba(41,26,66,0.14), rgba(125,211,252,0.1))'
            : 'linear-gradient(180deg, rgba(94,114,228,0.1), rgba(255,229,176,0.16), rgba(196,232,255,0.14))',
        }}
      />

      <motion.div
        className="absolute inset-x-0 h-[44%] blur-3xl"
        initial={{ opacity: 0, top: lightToDark ? '60%' : '38%' }}
        animate={{
          top: lightToDark ? ['60%', '54%', '48%'] : ['38%', '48%', '56%'],
          opacity: [0, isCard ? 0.18 : 0.26, 0],
        }}
        transition={{ duration: 1.08, ease: 'easeInOut' }}
        style={{
          background: lightToDark
            ? 'linear-gradient(180deg, rgba(255,205,122,0.22), rgba(33,29,60,0))'
            : 'linear-gradient(180deg, rgba(196,232,255,0), rgba(255,222,150,0.18))',
        }}
      />

      <motion.div
        className="absolute inset-x-0 h-px"
        initial={{ opacity: 0, top: lightToDark ? '72%' : '34%' }}
        animate={{
          top: lightToDark ? ['72%', '60%', '46%'] : ['34%', '46%', '58%'],
          opacity: [0, isCard ? 0.38 : 0.54, 0],
        }}
        transition={{ duration: 1.04, ease: 'easeInOut' }}
        style={{
          background: lightToDark
            ? 'linear-gradient(90deg, transparent, rgba(255,214,148,0.72), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(214,234,255,0.72), transparent)',
        }}
      />

      <motion.div
        className="absolute rounded-full blur-2xl"
        initial={{
          left: travelFrames.sunLeft[0],
          top: travelFrames.sunTop[0],
          opacity: 0,
          scale: 0.82,
        }}
        animate={{
          left: travelFrames.sunLeft,
          top: travelFrames.sunTop,
          opacity: [0, 0.78, 0],
          scale: [0.84, 1, 0.88],
        }}
        transition={{ duration: 1.12, ease: travelEase }}
        style={{
          width: `${shiftSunSize}px`,
          height: `${shiftSunSize}px`,
          background:
            'radial-gradient(circle, rgba(255,229,148,0.88), rgba(255,185,82,0.52), transparent 74%)',
        }}
      />
      <motion.div
        className="absolute flex items-center justify-center rounded-full"
        initial={{
          left: travelFrames.sunLeft[0],
          top: travelFrames.sunTop[0],
          opacity: 0,
          scale: 0.82,
        }}
        animate={{
          left: travelFrames.sunLeft,
          top: travelFrames.sunTop,
          opacity: [0, 0.96, 0],
          scale: [0.82, 1, 0.92],
        }}
        transition={{ duration: 1.12, ease: travelEase }}
        style={{ width: `${shiftSunSize}px`, height: `${shiftSunSize}px` }}
      >
        <SunLowIcon className="size-8 text-amber-50/90" />
      </motion.div>

      <motion.div
        className="absolute rounded-full blur-2xl"
        initial={{
          left: travelFrames.moonLeft[0],
          top: travelFrames.moonTop[0],
          opacity: 0,
          scale: 0.74,
        }}
        animate={{
          left: travelFrames.moonLeft,
          top: travelFrames.moonTop,
          opacity: [0, 0.72, 0],
          scale: [0.74, 0.98, 0.9],
        }}
        transition={{ duration: 1.12, ease: travelEase }}
        style={{
          width: `${shiftMoonSize}px`,
          height: `${shiftMoonSize}px`,
          background:
            'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.82), rgba(197,203,255,0.48), transparent 74%)',
        }}
      />
      <motion.div
        className="absolute flex items-center justify-center rounded-full"
        initial={{
          left: travelFrames.moonLeft[0],
          top: travelFrames.moonTop[0],
          opacity: 0,
          scale: 0.82,
        }}
        animate={{
          left: travelFrames.moonLeft,
          top: travelFrames.moonTop,
          opacity: [0, 0.92, 0],
          scale: [0.82, 1, 0.94],
        }}
        transition={{ duration: 1.12, ease: travelEase }}
        style={{ width: `${shiftMoonSize}px`, height: `${shiftMoonSize}px` }}
      >
        <TablerMoonIcon className="size-7 text-slate-50" />
      </motion.div>
    </div>
  )
}
