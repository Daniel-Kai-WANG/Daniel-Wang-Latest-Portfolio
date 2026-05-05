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
                'radial-gradient(circle, rgba(255,224,236,0.72), rgba(190,233,255,0.44), transparent 74%)',
            }}
          />
          <div
            className="absolute inset-[16%] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(255,244,248,0.98), rgba(255,214,231,0.88), rgba(182,228,255,0.74))',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <SunLowIcon className="size-[46%] text-rose-100/82" />
          </div>
        </>
      ) : (
        <>
          <div
            className="absolute inset-0 rounded-full blur-2xl"
            style={{
              background:
                'radial-gradient(circle, rgba(216,244,255,0.24), rgba(57,195,220,0.18), transparent 78%)',
            }}
          />
          <div
            className="absolute inset-[18%] rounded-full"
            style={{
              background:
                'radial-gradient(circle at 32% 28%, rgba(255,255,255,0.98), rgba(223,244,255,0.92), rgba(145,226,239,0.72))',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <TablerMoonIcon className="size-[44%] text-cyan-950/78" />
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
              ? 'linear-gradient(180deg, rgba(255,210,197,0.14), rgba(109,225,243,0.1), rgba(7,19,26,0.14))'
              : 'linear-gradient(180deg, rgba(255,210,226,0.12), rgba(196,232,255,0.18), rgba(255,244,250,0.12))',
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
            ? 'linear-gradient(180deg, rgba(255,208,192,0.14), rgba(13,57,67,0.14), rgba(109,225,243,0.1))'
            : 'linear-gradient(180deg, rgba(255,206,224,0.1), rgba(234,244,255,0.16), rgba(196,232,255,0.14))',
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
            ? 'linear-gradient(180deg, rgba(255,167,138,0.22), rgba(16,55,64,0))'
            : 'linear-gradient(180deg, rgba(250,225,238,0), rgba(196,232,255,0.18))',
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
            ? 'linear-gradient(90deg, transparent, rgba(255,185,155,0.72), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(222,236,255,0.72), transparent)',
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
            'radial-gradient(circle, rgba(255,226,238,0.88), rgba(255,197,214,0.52), transparent 74%)',
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
        <SunLowIcon className="size-8 text-rose-50/92" />
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
            'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.82), rgba(191,241,248,0.48), transparent 74%)',
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
        <TablerMoonIcon className="size-7 text-cyan-50" />
      </motion.div>
    </div>
  )
}
