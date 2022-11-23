import type { Theme } from '../types'

export default function setGlobalTheme(theme: Theme, storage: Storage = window.localStorage) {
  storage.setItem('theme', theme)
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
