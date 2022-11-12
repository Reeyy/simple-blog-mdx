import React from 'react';

export default function Header() {
  return (
    <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Welcome to my</span>{' '}
          <span className="block text-indigo-600 xl:inline">mini blog </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
          labore nam enim, consectetur quo maxime porro perferendis. Omnis
          distinctio aut neque commodi non, quos est quia doloremque animi
          reiciendis vel.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <span className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">
              My Portfolio
            </span>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <span className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg">
              CV
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
