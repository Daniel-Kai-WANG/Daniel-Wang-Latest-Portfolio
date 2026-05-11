import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

type ThemeModeTransitionProps = {
  className?: string
  dark: ReactNode
  light: ReactNode
}

export function ThemeModeTransition({
  className = '',
  dark,
  light,
}: ThemeModeTransitionProps) {
  const { theme, isThemeShifting, themeShiftDirection, themeShiftKey } = useTheme()

  if (!isThemeShifting || themeShiftDirection === null) {
    return <div className={className}>{theme === 'light' ? light : dark}</div>
  }

  const outgoing = themeShiftDirection === 'light-to-dark' ? light : dark
  const incoming = theme === 'light' ? light : dark

  return (
    <div className={`relative ${className}`}>
      <motion.div
        key={`outgoing-${themeShiftKey}`}
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        {outgoing}
      </motion.div>
      <motion.div
        key={`incoming-${themeShiftKey}`}
        className="flex items-center justify-center"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.24, delay: 0.04, ease: 'easeOut' }}
      >
        {incoming}
      </motion.div>
    </div>
  )
}
