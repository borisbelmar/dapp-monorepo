import { useCallback, useEffect, useState } from 'react'
import getInitialTheme from '../utils/getInitialTheme'
import type { Theme } from '../types'
import setGlobalTheme from '../utils/setGlobalTheme'

export default function useThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    setTheme(getInitialTheme())
  }, [])

  useEffect(() => {
    setGlobalTheme(theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  return {
    toggleTheme,
    theme
  }
}
