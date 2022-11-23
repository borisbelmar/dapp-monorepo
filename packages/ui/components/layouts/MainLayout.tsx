import type { ReactNode, JSXElementConstructor } from 'react'
import InnerContainerLayout from './InnerContainerLayout'

interface MainLayoutProps {
  children: ReactNode
  NavigationComponent: JSXElementConstructor<unknown>
}

export default function MainLayout({ children, NavigationComponent }: MainLayoutProps) {
  return (
    <main
      className="flex flex-col min-h-screen w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white "
    >
      <NavigationComponent />
      <div className="flex-1">
        {children}
      </div>
      <footer className="bg-gray-50 dark:bg-gray-900 py-4">
        <InnerContainerLayout>
          <div>
            <p className="text-sm">
              Made with ❤️ by{' '}
              <span className="font-bold">dobleb.cl</span>
            </p>
          </div>
        </InnerContainerLayout>
      </footer>
    </main>
  )
}
