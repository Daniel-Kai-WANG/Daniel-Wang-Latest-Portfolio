import { createContext } from 'react'
import type { ThemeMode } from '../../types/content'

export type ThemeShiftDirection = 'light-to-dark' | 'dark-to-light' | null

export type ThemeContextValue = {
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
  toggleTheme: () => void
  isThemeShifting: boolean
  themeShiftDirection: ThemeShiftDirection
  themeShiftKey: number
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)
