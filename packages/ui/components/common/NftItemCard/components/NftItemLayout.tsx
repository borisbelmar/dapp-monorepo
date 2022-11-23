import type { ReactChild } from 'react'

interface NftItemLayoutProps {
  children: ReactChild | ReactChild[]
  onVideoPlay?: () => void
  onVideoPause?: () => void
}

export default function NftItemLayout({ children, onVideoPlay, onVideoPause }: NftItemLayoutProps) {
  return (
    <li
      className="group bg-gray-50 dark:bg-gray-900 p-2 rounded-md"
      onMouseEnter={onVideoPlay}
      onMouseLeave={onVideoPause}
    >
      {children}
    </li>
  )
}
