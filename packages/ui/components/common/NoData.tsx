import type { ElementType } from 'react'
import type { LinkProps } from 'next/link'
import { PlusIcon } from '@heroicons/react/solid'
import OptionalNextLink from '../../utils/OptionalNextLink'

interface NoDataProps {
  title: string
  description: string
  btnLabel?: string
  btnRoute?: LinkProps['href']
  NextLink?: ElementType<LinkProps>
}

export default function NoData({
  title,
  description,
  btnLabel,
  btnRoute,
  NextLink
}: NoDataProps) {
  return (
    <div className="text-center border border-dashed border-gray-500 py-8 px-4 rounded-md">
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        />
      </svg>
      <h3 className="mt-2 text-sm font-medium dark:text-gray-50 text-gray-800">
        {title || 'No data available'}
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        {description || 'Please try again later.'}
      </p>
      {btnLabel && btnRoute && (
        <div className="mt-6">
          <OptionalNextLink href={btnRoute} NextLink={NextLink}>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              {btnLabel || 'Create'}
            </button>
          </OptionalNextLink>
        </div>
      )}
    </div>
  )
}
