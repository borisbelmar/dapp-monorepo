import { Listbox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { SelectOption } from '..'

interface Props<T> {
  option: SelectOption<T>
}

export default function OptionItem<T>({ option }: Props<T>) {
  return (
    <Listbox.Option
      key={option.id}
      className={({ active }) => clsx(
        active ? 'text-white bg-primary-600' : 'text-gray-900 dark:text-white',
        'relative cursor-default select-none py-2 pl-3 pr-9'
      )}
      value={option}
    >
      {({ selected, active }) => (
        <>
          <span className={clsx(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
            {option.label}
          </span>

          {selected ? (
            <span
              className={clsx(
                active ? 'text-white' : 'text-primary-600',
                'absolute inset-y-0 right-0 flex items-center pr-4'
              )}
            >
              <CheckIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          ) : null}
        </>
      )}
    </Listbox.Option>
  )
}
