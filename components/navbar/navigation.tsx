import { Popover, Transition } from '@headlessui/react';
import {
  BanknotesIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { navigation } from '../../constant/data';

export default function Navigation() {
  return (
    <Popover>
      <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
            <div className="flex w-full items-center justify-between md:w-auto">
              <Link legacyBehavior href="/">
                <>
                  <span className="sr-only">Your Company </span>

                  <BanknotesIcon className="h-6 w-6" />
                </>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
            {navigation.map((item) => (
              <Link legacyBehavior key={item.name} href={item.href}>
                <span className="font-medium text-gray-500 hover:text-gray-900">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="hidden md:block">{/* Search Input Component */}</div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>banknotes</div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Link legacyBehavior key={item.name} href={item.href}>
                  <span className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
            <div className="px-4">{/* Search Input Component */}</div>
            <span className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100">
              Log in
            </span>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
