import { motion, useReducedMotion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

type ThemeShiftBackdropProps = {
  variant?: 'section' | 'card'
}

function getTravelFrames(lightToDark: boolean) {
  if (lightToDark) {
    return {
      sunLeft: ['12%', '22%', '34%'],
      sunTop: ['18%', '44%', '78%'],
      moonLeft: ['66%', '72%', '78%'],
      moonTop: ['96%', '58%', '20%'],
    }
  }

  return {
    sunLeft: ['34%', '22%', '12%'],
    sunTop: ['78%', '44%', '18%'],
    moonLeft: ['78%', '72%', '66%'],
    moonTop: ['20%', '58%', '96%'],
  }
}

export function ThemeShiftBackdrop({ variant = 'section' }: ThemeShiftBackdropProps) {
  const { theme, isThemeShifting, themeShiftDirection, themeShiftKey } = useTheme()
  const reduceMotion = useReducedMotion()
  const lightToDark = themeShiftDirection === 'light-to-dark'
  const isCard = variant === 'card'
  const ambientGlowSize = isCard ? 124 : 220
  const shiftSunSize = isCard ? 92 : 148
  const shiftMoonSize = isCard ? 82 : 132
  const ambientOpacity = isCard ? 0.24 : 0.3
  const overlayOpacity = isCard ? 0.34 : 0.46
  const travelEase: [number, number, number, number] = [0.22, 1, 0.36, 1]
  const travelFrames = getTravelFrames(lightToDark)

  const ambientBody = (
    <div
      className="absolute"
      style={{
        right: isCard ? '9%' : '7%',
        top: isCard ? '12%' : '10%',
        width: `${ambientGlowSize}px`,
        height: `${ambientGlowSize}px`,
        opacity: isThemeShifting ? ambientOpacity * 0.6 : ambientOpacity,
      }}
    >
      {theme === 'light' ? (
        <>
          <div
            className="absolute inset-0 rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(circle, rgba(255,229,148,0.46), rgba(255,217,122,0.24), rgba(255,210,152,0.04) 74%)',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              inset: isCard ? '24px' : '42px',
              background:
                'radial-gradient(circle, rgba(255,248,220,0.72), rgba(255,222,126,0.4), rgba(255,205,122,0.12))',
            }}
          />
          <div
            className="absolute rounded-full border"
            style={{
              inset: isCard ? '12px' : '24px',
              borderColor: 'rgba(255,214,148,0.28)',
            }}
          />
        </>
      ) : (
        <>
          <div
            className="absolute inset-0 rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(circle, rgba(191,219,254,0.24), rgba(129,140,248,0.12), rgba(49,61,122,0.02) 74%)',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              inset: isCard ? '28px' : '48px',
              background:
                'radial-gradient(circle at 34% 30%, rgba(255,255,255,0.7), rgba(214,226,255,0.34), rgba(163,182,255,0.08))',
            }}
          />
          <div
            className="absolute rounded-full border"
            style={{
              inset: isCard ? '14px' : '28px',
              borderColor: 'rgba(182,205,255,0.18)',
            }}
          />
        </>
      )}
    </div>
  )

  if (!isThemeShifting || !themeShiftDirection) {
    return <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">{ambientBody}</div>
  }

  if (reduceMotion) {
    return (
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        {ambientBody}
      </div>
    )
  }

  return (
    <div key={themeShiftKey} className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      {ambientBody}

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, overlayOpacity, overlayOpacity * 0.4, 0] }}
        transition={{ duration: 1.42, ease: 'easeInOut', times: [0, 0.28, 0.72, 1] }}
        style={{
          background: lightToDark
            ? 'linear-gradient(180deg, rgba(255,225,168,0.16), rgba(96,124,196,0.08), rgba(18,22,44,0.18))'
            : 'linear-gradient(180deg, rgba(112,142,224,0.12), rgba(255,229,176,0.18), rgba(196,232,255,0.16))',
        }}
      />

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.24, 0.16, 0] }}
        transition={{ duration: 1.46, ease: 'easeInOut', times: [0, 0.24, 0.68, 1] }}
        style={{
          background: lightToDark
            ? 'radial-gradient(circle at 30% 30%, rgba(255,214,148,0.18), transparent 36%), radial-gradient(circle at 76% 22%, rgba(191,219,254,0.1), transparent 26%)'
            : 'radial-gradient(circle at 72% 24%, rgba(214,232,255,0.16), transparent 30%), radial-gradient(circle at 18% 74%, rgba(255,222,150,0.12), transparent 26%)',
        }}
      />

      <motion.div
        className="absolute rounded-full blur-3xl"
        initial={{
          left: travelFrames.sunLeft[0],
          top: travelFrames.sunTop[0],
          opacity: 0,
          scale: 0.84,
        }}
        animate={{
          left: travelFrames.sunLeft,
          top: travelFrames.sunTop,
          opacity: [0, 0.96, 0.82, 0],
          scale: [0.84, 1.04, 0.98, 0.88],
        }}
        transition={{ duration: 1.46, ease: travelEase, times: [0, 0.28, 0.72, 1] }}
        style={{
          width: `${shiftSunSize}px`,
          height: `${shiftSunSize}px`,
          background:
            'radial-gradient(circle, rgba(255,232,162,0.92), rgba(255,201,96,0.56), rgba(255,184,92,0.06) 76%)',
        }}
      />
      <motion.div
        className="absolute rounded-full border"
        initial={{
          left: travelFrames.sunLeft[0],
          top: travelFrames.sunTop[0],
          opacity: 0,
          scale: 0.88,
        }}
        animate={{
          left: travelFrames.sunLeft,
          top: travelFrames.sunTop,
          opacity: [0, 1, 0.72, 0],
          scale: [0.88, 1, 0.96, 0.9],
        }}
        transition={{ duration: 1.46, ease: travelEase, times: [0, 0.28, 0.72, 1] }}
        style={{
          width: `${shiftSunSize}px`,
          height: `${shiftSunSize}px`,
          borderColor: 'rgba(255,231,186,0.72)',
          boxShadow: '0 0 0 10px rgba(255,217,122,0.12)',
        }}
      />

      <motion.div
        className="absolute rounded-full blur-3xl"
        initial={{
          left: travelFrames.moonLeft[0],
          top: travelFrames.moonTop[0],
          opacity: 0,
          scale: 0.74,
        }}
        animate={{
          left: travelFrames.moonLeft,
          top: travelFrames.moonTop,
          opacity: [0, 0.26, 0.92, 0],
          scale: [0.74, 0.9, 1, 0.92],
        }}
        transition={{ duration: 1.46, ease: travelEase, times: [0, 0.24, 0.72, 1] }}
        style={{
          width: `${shiftMoonSize}px`,
          height: `${shiftMoonSize}px`,
          background:
            'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.9), rgba(206,216,255,0.5), rgba(158,178,255,0.08) 76%)',
        }}
      />
      <motion.div
        className="absolute rounded-full border"
        initial={{
          left: travelFrames.moonLeft[0],
          top: travelFrames.moonTop[0],
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          left: travelFrames.moonLeft,
          top: travelFrames.moonTop,
          opacity: [0, 0.18, 0.84, 0],
          scale: [0.8, 0.9, 1, 0.94],
        }}
        transition={{ duration: 1.46, ease: travelEase, times: [0, 0.24, 0.72, 1] }}
        style={{
          width: `${shiftMoonSize}px`,
          height: `${shiftMoonSize}px`,
          borderColor: 'rgba(219,231,255,0.6)',
          boxShadow: '0 0 0 8px rgba(191,219,254,0.08)',
        }}
      />
    </div>
  )
}
