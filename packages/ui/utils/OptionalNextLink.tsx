import type { LinkProps } from 'next/link'
import type { ElementType, ReactChild } from 'react'

interface OptionalNextLinkProps {
  NextLink?: ElementType<LinkProps>
  href: LinkProps['href'] | string
  children: ReactChild | ReactChild[]
}

export default function OptionalNextLink({ NextLink, href, children }: OptionalNextLinkProps) {
  return NextLink ? (
    <NextLink href={href} as="a">
      {children}
    </NextLink>
  ) : (
    <a href={href as string}>
      {children}
    </a>
  )
}
