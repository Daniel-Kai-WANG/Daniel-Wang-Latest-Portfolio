import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useTheme } from '../../../hooks/useTheme'
import {
  JellyfishIcon,
  LeafBudIcon,
  PearlIcon,
  SakuraIcon,
  SnowflakeAssetIcon,
  StarfishIcon,
  SunIcon,
} from '../../common/Icons'

type FloatingAccentProps = {
  children: ReactNode
  className: string
  duration: number
  rotate?: number
  xDrift?: number
  yDrift?: number
}

function FloatingAccent({
  children,
  className,
  duration,
  rotate = 0,
  xDrift = 0,
  yDrift = 0,
}: FloatingAccentProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return (
      <div className={className} style={{ transform: `rotate(${rotate}deg)` }}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      className={className}
      style={{ rotate }}
      animate={{
        x: [0, xDrift, 0],
        y: [0, yDrift, 0],
      }}
      transition={{
        duration,
        ease: 'easeInOut',
        repeat: Number.POSITIVE_INFINITY,
      }}
    >
      {children}
    </motion.div>
  )
}

export function ContactSectionAccent() {
  const { theme } = useTheme()

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <FloatingAccent
        className="absolute -left-3 top-10 hidden md:block"
        duration={12}
        rotate={-10}
        xDrift={8}
        yDrift={-6}
      >
        {theme === 'light' ? (
          <LeafBudIcon className="h-24 w-24 opacity-[0.48]" />
        ) : (
          <StarfishIcon variant="pink" className="size-20 opacity-[0.42]" />
        )}
      </FloatingAccent>

      {theme === 'light' ? (
        <>
          <FloatingAccent
            className="absolute right-[11%] top-[13%] hidden lg:block"
            duration={14}
            rotate={8}
            xDrift={-10}
            yDrift={8}
          >
            <SakuraIcon variant="b" className="h-14 w-14 opacity-[0.22]" />
          </FloatingAccent>

          <FloatingAccent
            className="absolute left-[12%] top-[59%] hidden lg:block"
            duration={16}
            rotate={-12}
            xDrift={6}
            yDrift={10}
          >
            <SnowflakeAssetIcon variant="soft" className="h-12 w-12 opacity-[0.18]" />
          </FloatingAccent>

          <FloatingAccent
            className="absolute right-[5%] top-[69%] hidden xl:block"
            duration={18}
            rotate={12}
            xDrift={-6}
            yDrift={8}
          >
            <SunIcon className="h-11 w-11 opacity-[0.18]" style={{ color: '#efb45e' }} />
          </FloatingAccent>
        </>
      ) : (
        <>
          <FloatingAccent
            className="absolute right-[12%] top-[16%] hidden lg:block"
            duration={14}
            rotate={6}
            xDrift={-8}
            yDrift={6}
          >
            <PearlIcon className="h-14 w-14 opacity-[0.2]" />
          </FloatingAccent>

          <FloatingAccent
            className="absolute left-[11%] top-[62%] hidden lg:block"
            duration={17}
            rotate={4}
            xDrift={6}
            yDrift={9}
          >
            <JellyfishIcon
              className="h-12 w-12 opacity-[0.16]"
              style={{ color: 'rgba(179, 221, 255, 0.85)' }}
            />
          </FloatingAccent>
        </>
      )}
    </div>
  )
}
