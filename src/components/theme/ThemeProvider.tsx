import { useEffect, useRef, useState } from 'react'
import type { PropsWithChildren } from 'react'
import type { ThemeMode } from '../../types/content'
import { ThemeContext } from './theme-context'
import type { ThemeShiftDirection } from './theme-context'

const STORAGE_KEY = 'daniel-portfolio-theme'
const THEME_SHIFT_DURATION_MS = 360

function syncThemeQuery(theme: ThemeMode) {
  if (typeof window === 'undefined') {
    return
  }

  const currentUrl = new URL(window.location.href)

  if (currentUrl.searchParams.get('theme') === theme) {
    return
  }

  currentUrl.searchParams.set('theme', theme)
  window.history.replaceState({}, '', currentUrl)
}

function readThemeFromQuery(): ThemeMode | null {
  if (typeof window === 'undefined') {
    return null
  }

  const themeParam = new URLSearchParams(window.location.search).get('theme')

  if (themeParam === 'light' || themeParam === 'dark') {
    return themeParam
  }

  return null
}

function readTheme(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const queryTheme = readThemeFromQuery()

  if (queryTheme) {
    return queryTheme
  }

  const saved = window.localStorage.getItem(STORAGE_KEY)
  return saved === 'dark' ? 'dark' : 'light'
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, updateTheme] = useState<ThemeMode>(() => readTheme())
  const [isThemeShifting, setIsThemeShifting] = useState(false)
  const [themeShiftDirection, setThemeShiftDirection] =
    useState<ThemeShiftDirection>(null)
  const [themeShiftKey, setThemeShiftKey] = useState(0)
  const shiftTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(STORAGE_KEY, theme)
    syncThemeQuery(theme)
  }, [theme])

  useEffect(() => {
    const handlePopState = () => {
      const queryTheme = readThemeFromQuery()

      if (queryTheme && queryTheme !== theme) {
        updateTheme(queryTheme)
      }
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      if (shiftTimeoutRef.current !== null) {
        window.clearTimeout(shiftTimeoutRef.current)
      }
    }
  }, [theme])

  const setTheme = (nextTheme: ThemeMode) => {
    if (nextTheme === theme) {
      return
    }

    if (shiftTimeoutRef.current !== null) {
      window.clearTimeout(shiftTimeoutRef.current)
    }

    setThemeShiftDirection(theme === 'light' ? 'light-to-dark' : 'dark-to-light')
    setIsThemeShifting(true)
    setThemeShiftKey((key) => key + 1)
    updateTheme(nextTheme)

    shiftTimeoutRef.current = window.setTimeout(() => {
      setIsThemeShifting(false)
      setThemeShiftDirection(null)
      shiftTimeoutRef.current = null
    }, THEME_SHIFT_DURATION_MS)
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
