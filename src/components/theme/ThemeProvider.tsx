import { startTransition, useEffect, useRef, useState } from 'react'
import type { PropsWithChildren } from 'react'
import type { ThemeMode } from '../../types/content'
import { ThemeContext } from './theme-context'
import type { ThemeShiftDirection } from './theme-context'

const STORAGE_KEY = 'daniel-portfolio-theme'
const SHIFT_DURATION_MS = 1180

function readTheme(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const saved = window.localStorage.getItem(STORAGE_KEY)
  return saved === 'dark' ? 'dark' : 'light'
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, updateTheme] = useState<ThemeMode>(() => readTheme())
  const [isThemeShifting, setIsThemeShifting] = useState(false)
  const [themeShiftDirection, setThemeShiftDirection] = useState<ThemeShiftDirection>(null)
  const [themeShiftKey, setThemeShiftKey] = useState(0)
  const shiftTimerRef = useRef<number | null>(null)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => {
    return () => {
      if (shiftTimerRef.current !== null) {
        window.clearTimeout(shiftTimerRef.current)
      }
    }
  }, [])

  const setTheme = (nextTheme: ThemeMode) => {
    if (nextTheme === theme) {
      return
    }

    const nextDirection: ThemeShiftDirection =
      theme === 'light' ? 'light-to-dark' : 'dark-to-light'

    if (shiftTimerRef.current !== null) {
      window.clearTimeout(shiftTimerRef.current)
    }

    setThemeShiftDirection(nextDirection)
    setThemeShiftKey((value) => value + 1)
    setIsThemeShifting(true)

    startTransition(() => {
      updateTheme(nextTheme)
    })

    shiftTimerRef.current = window.setTimeout(() => {
      setIsThemeShifting(false)
      setThemeShiftDirection(null)
      shiftTimerRef.current = null
    }, SHIFT_DURATION_MS)
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        isThemeShifting,
        themeShiftDirection,
        themeShiftKey,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
