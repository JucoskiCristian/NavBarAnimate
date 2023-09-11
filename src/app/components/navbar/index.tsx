'use client'

import { XMarkIcon, Bars3BottomRightIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const Links = [
    { name: 'Home', link: '/' },
    { name: 'Sobre', link: '/' },
    { name: 'Clientes', link: '/' },
    { name: 'Contato', link: '/' },
  ]

  return (
    <nav
      className={`w-full border-gray-200 bg-white transition-all duration-300 ease-in-out dark:bg-gray-800 md:h-20 ${
        open ? 'h-96' : 'h-20'
      }`}
    >
      <div className="mx-auto flex h-full max-w-screen-2xl flex-wrap items-center justify-between px-5">
        <a href="#" className="my-5 flex">
          <span className="whitespace-nowrap text-2xl font-semibold text-white">
            Sua Logo
          </span>
        </a>
        <button
          type="button"
          className="my-5 h-10 w-10 rounded-lg p-1 text-gray-500 ring-2 ring-gray-600 focus:outline-none md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </button>
        <div className="hidden h-full w-auto md:flex md:items-center md:justify-center">
          <ul className="flex h-full flex-row items-center justify-center gap-6 px-4 font-medium">
            {Links.map((item, index) => (
              <li key={index} className="flex items-center justify-center">
                <a
                  href="#"
                  className="flex h-20 items-center justify-center rounded-lg border-white px-2 text-white hover:bg-gray-700"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`relative top-[-450px] z-10 w-full transition-all duration-500 ease-in-out md:top-0 md:hidden md:w-auto
          
           ${open ? 'top-[0px]' : 'top-[-450px]'}`}
        >
          <ul className="font-mediu mt-4 flex flex-col rounded-lg bg-gray-800 p-4 ring-2 ring-gray-600">
            {Links.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block rounded py-2 pl-3 pr-4 text-white hover:bg-gray-600"
                  aria-current="page"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
