import { useEffect, useState } from 'react'
import type { PropsWithChildren } from 'react'
import type { ThemeMode } from '../../types/content'
import { ThemeContext } from './theme-context'

const STORAGE_KEY = 'daniel-portfolio-theme'

function readTheme(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const saved = window.localStorage.getItem(STORAGE_KEY)
  return saved === 'dark' ? 'dark' : 'light'
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, updateTheme] = useState<ThemeMode>(() => readTheme())

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const setTheme = (nextTheme: ThemeMode) => {
    if (nextTheme === theme) {
      return
    }

    updateTheme(nextTheme)
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
        isThemeShifting: false,
        themeShiftDirection: null,
        themeShiftKey: 0,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
