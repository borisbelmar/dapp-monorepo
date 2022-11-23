import type { Theme } from '../types'

export default function getInitialTheme(storage: Storage = window.localStorage): Theme {
  if (storage.getItem('theme') === 'dark' || (!('theme' in storage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    return 'dark'
  }
  return 'light'
}
