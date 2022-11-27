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
        'border p-1 rounded aspect-square flex justify-center items-center',
        className
      )}
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <SunIcon className="w-4" />
      ) : (
        <MoonIcon className="w-4" />
      )}
    </button>
  )
}
