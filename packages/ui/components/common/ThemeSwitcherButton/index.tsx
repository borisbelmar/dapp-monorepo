import clsx from 'clsx'
import { SunIcon, MoonIcon } from '@heroicons/react/outline'
import useThemeSwitcher from './hooks/useThemeSwitcher'

interface Props {
  className?: string
}

export default function ThemeSwitcherButton({ className }: Props) {
  const { theme, toggleTheme } = useThemeSwitcher()
  return (
    <button
      className={clsx(
        'border border-solid border-gray-400 p-1 rounded aspect-square',
        className
      )}
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <SunIcon className="w-full" />
      ) : (
        <MoonIcon className="w-full" />
      )}
    </button>
  )
}
