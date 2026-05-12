import type { ReactNode, CSSProperties } from 'react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { LeafBudIcon, MoonIcon, SakuraIcon, StarfishIcon } from '../../common/Icons'

type WorkflowFloatingMotifsProps = {
  reduceMotion: boolean
  theme: 'light' | 'dark'
}

type FloatingMotifProps = {
  children: ReactNode
  distanceKeyframes: string[]
  path: string
  rotateKeyframes: number[]
  times: number[]
  duration: number
}

type MotionPathStyle = CSSProperties & {
  WebkitOffsetPath?: string
  WebkitOffsetRotate?: string
}

function FloatingMotif({
  children,
  distanceKeyframes,
  path,
  rotateKeyframes,
  times,
  duration,
}: FloatingMotifProps) {
  const motionPathStyle = {
    offsetPath: `path('${path}')`,
    WebkitOffsetPath: `path('${path}')`,
    offsetRotate: '0deg',
    WebkitOffsetRotate: '0deg',
  } satisfies MotionPathStyle

  return (
    <motion.div
      className="pointer-events-none absolute left-0 top-0"
      style={motionPathStyle}
      animate={{
        offsetDistance: distanceKeyframes,
        rotate: rotateKeyframes,
      }}
      transition={{
        duration,
        ease: 'easeInOut',
        times,
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  )
}

export function WorkflowFloatingMotifs({
  reduceMotion,
  theme,
}: WorkflowFloatingMotifsProps) {
  const [isCompactMobile, setIsCompactMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 640 : false
  )

  useEffect(() => {
    const updateCompactMobile = () => {
      setIsCompactMobile(window.innerWidth < 640)
    }

    updateCompactMobile()
    window.addEventListener('resize', updateCompactMobile)

    return () => {
      window.removeEventListener('resize', updateCompactMobile)
    }
  }, [])

  if (reduceMotion) {
    return null
  }

  const lightLeafPath = isCompactMobile
    ? 'M 248 16 C 238 38, 232 78, 236 128 C 244 198, 252 286, 236 396'
    : 'M 364 16 C 356 38, 350 78, 354 128 C 360 206, 374 312, 348 438'
  const darkMoonPath = isCompactMobile
    ? 'M 252 16 C 262 44, 266 92, 256 154 C 244 232, 232 330, 244 432'
    : 'M 368 16 C 378 44, 382 92, 372 154 C 356 246, 342 366, 356 492'

  if (theme === 'light') {
    return (
      <>
        <FloatingMotif
          path="M 32 12 C 44 34, 50 76, 40 126 C 28 176, 24 228, 40 284"
          distanceKeyframes={['0%', '100%', '0%']}
          rotateKeyframes={[-10, 8, -10]}
          times={[0, 0.4, 1]}
          duration={9}
        >
          <SakuraIcon className="size-4" />
        </FloatingMotif>

        <FloatingMotif
          path={lightLeafPath}
          distanceKeyframes={['0%', '100%', '54%', '80%', '0%']}
          rotateKeyframes={[16, 10, 13, 11, 16]}
          times={[0, 0.4, 0.66, 0.84, 1]}
          duration={12.2}
        >
          <LeafBudIcon className="size-4 opacity-90" />
        </FloatingMotif>
      </>
    )
  }

  return (
    <>
      <FloatingMotif
        path="M 32 12 C 44 30, 48 64, 40 108 C 28 164, 24 226, 38 284"
        distanceKeyframes={['0%', '100%', '0%']}
        rotateKeyframes={[14, 18, 14]}
        times={[0, 0.42, 1]}
        duration={10.6}
      >
        <StarfishIcon variant="light" className="size-4 rotate-[14deg]" />
      </FloatingMotif>

      <FloatingMotif
        path={darkMoonPath}
        distanceKeyframes={['0%', '100%', '54%', '80%', '0%']}
        rotateKeyframes={[-8, -5, -7, -5, -8]}
        times={[0, 0.42, 0.68, 0.85, 1]}
        duration={11.2}
      >
        <MoonIcon className="size-[1.6rem] text-slate-100/88" />
      </FloatingMotif>
    </>
  )
}
