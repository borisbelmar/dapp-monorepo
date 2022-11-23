import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import OptionItem from './components/OptionItem'

export interface SelectOption<T> {
  value: T
  label: string
  id: string | number
}

type OptionMapFn<T> = (val: T) => SelectOption<T>[]

interface Props<T> {
  className?: string
  options: SelectOption<T>[]
  defaultOption?: SelectOption<T>
  onChange: (value: T) => void
  label?: string
}

export function selectOptionMapper<T>(values: T[], mapFn: OptionMapFn<T>): SelectOption<T>[] {
  return values.map(mapFn).flat()
}

export default function Select<T>({
  className,
  options,
  defaultOption,
  onChange,
  label
}: Props<T>) {
  const [selectedVal, setSelectedVal] = useState<SelectOption<T>>(defaultOption || options[0])

  const handleChange = (val: SelectOption<T>) => {
    setSelectedVal(val)
    onChange(val.value)
  }

  return (
    <Listbox value={selectedVal} onChange={handleChange}>
      {({ open }) => (
        <div className={className}>
          {label && (
            <Listbox.Label className="block text-sm font-medium dark:text-white text-gray-800">
              {label}
            </Listbox.Label>
          )}
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-400 dark:border-gray-300 bg-white dark:bg-gray-800 py-2 pl-3 pr-10 text-left shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm">
              <span className="block truncate">
                {selectedVal?.label}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon className="h-5 w-5 text-gray-600" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-900 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map(option => (
                  <OptionItem key={option.id} option={option} />
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  )
}
