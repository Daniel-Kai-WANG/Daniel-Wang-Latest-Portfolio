import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../../hooks/useTheme'
import type { ThemeMode } from '../../../types/content'
import {
  JellyfishIcon,
  LeafBudIcon,
  PearlIcon,
  SakuraIcon,
  SnowCrystalIcon,
  StarfishIcon,
} from '../../common/Icons'

type ClusterSlotProps = {
  className: string
  dark: ReactNode
  darkOffset?: {
    rotate?: number
    x?: number
    y?: number
  }
  light: ReactNode
  lightOffset?: {
    rotate?: number
    x?: number
    y?: number
  }
}

const themeEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

function ClusterSlot({
  className,
  dark,
  darkOffset,
  light,
  lightOffset,
}: ClusterSlotProps) {
  const { theme, isThemeShifting, themeShiftDirection, themeShiftKey } = useTheme()

  const resolvedLightOffset = {
    x: lightOffset?.x ?? 0,
    y: lightOffset?.y ?? 0,
    rotate: lightOffset?.rotate ?? 0,
  }
  const resolvedDarkOffset = {
    x: darkOffset?.x ?? 0,
    y: darkOffset?.y ?? 0,
    rotate: darkOffset?.rotate ?? 0,
  }

  if (!isThemeShifting || themeShiftDirection === null) {
    return (
      <div className={className}>
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          style={{
            transform:
              theme === 'light'
                ? `translate3d(${resolvedLightOffset.x}px, ${resolvedLightOffset.y}px, 0) rotate(${resolvedLightOffset.rotate}deg)`
                : `translate3d(${resolvedDarkOffset.x}px, ${resolvedDarkOffset.y}px, 0) rotate(${resolvedDarkOffset.rotate}deg)`,
          }}
        >
          {theme === 'light' ? light : dark}
        </div>
      </div>
    )
  }

  const outgoing = themeShiftDirection === 'light-to-dark' ? light : dark
  const incoming = theme === 'light' ? light : dark
  const direction = themeShiftDirection === 'light-to-dark' ? 1 : -1
  const outgoingOffset =
    themeShiftDirection === 'light-to-dark' ? resolvedLightOffset : resolvedDarkOffset
  const incomingOffset = theme === 'light' ? resolvedLightOffset : resolvedDarkOffset

  return (
    <div className={className}>
      <motion.div
        key={`slot-outgoing-${themeShiftKey}`}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{
          opacity: 0,
          x: outgoingOffset.x - 5 * direction,
          y: outgoingOffset.y - 7 * direction,
          scale: 0.92,
          rotate: outgoingOffset.rotate - 4 * direction,
        }}
        transition={{ duration: 0.6, ease: themeEase }}
      >
        {outgoing}
      </motion.div>
      <motion.div
        key={`slot-incoming-${themeShiftKey}`}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        initial={{
          opacity: 0,
          x: incomingOffset.x + 6 * direction,
          y: incomingOffset.y + 9 * direction,
          scale: 1.06,
          rotate: incomingOffset.rotate + 5 * direction,
        }}
        animate={{
          opacity: 1,
          x: incomingOffset.x,
          y: incomingOffset.y,
          scale: 1,
          rotate: incomingOffset.rotate,
        }}
        transition={{
          duration: 0.76,
          delay: 0.12,
          ease: themeEase,
        }}
      >
        {incoming}
      </motion.div>
    </div>
  )
}

function slotSurface(theme: ThemeMode) {
  return theme === 'light'
    ? 'drop-shadow(0 0 10px rgba(210, 232, 255, 0.28))'
    : 'drop-shadow(0 0 10px rgba(121, 214, 255, 0.16))'
}

export function ContactTitleCluster() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <ClusterSlot
        className="absolute left-[4.5rem] top-0 h-10 w-10 sm:h-11 sm:w-11"
        lightOffset={{ x: 0, y: -1, rotate: -10 }}
        light={
          <LeafBudIcon
            className="h-full w-full opacity-[0.9]"
            style={{ filter: slotSurface('light') }}
          />
        }
        darkOffset={{ x: -2, y: -1, rotate: -12 }}
        dark={
          <PearlIcon
            className="h-[88%] w-[88%] opacity-[0.78]"
            style={{ filter: slotSurface('dark') }}
          />
        }
      />

      <ClusterSlot
        className="absolute right-[36%] top-[-6px] h-9 w-9 sm:h-10 sm:w-10"
        lightOffset={{ x: 1, y: -2, rotate: 8 }}
        light={
          <SakuraIcon
            variant="a"
            className="h-[88%] w-[88%] opacity-[0.82]"
            style={{ filter: slotSurface('light') }}
          />
        }
        darkOffset={{ x: 0, y: 1, rotate: 4 }}
        dark={
          <JellyfishIcon
            className="h-[90%] w-[90%] opacity-[0.82]"
            style={{
              color: 'rgba(173, 230, 255, 0.88)',
              filter: slotSurface('dark'),
            }}
          />
        }
      />

      <ClusterSlot
        className="absolute right-4 top-[54%] h-8 w-8 sm:h-9 sm:w-9"
        lightOffset={{ x: 0, y: 0, rotate: 10 }}
        light={
          <SnowCrystalIcon
            className="h-[88%] w-[88%] opacity-[0.76]"
            style={{ filter: slotSurface('light') }}
          />
        }
        darkOffset={{ x: -2, y: 1, rotate: 6 }}
        dark={
          <StarfishIcon
            variant="light"
            className="h-[84%] w-[84%] opacity-[0.78]"
            style={{ filter: slotSurface('dark') }}
          />
        }
      />
    </div>
  )
}
