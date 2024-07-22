'use client'

import { concat } from '@/util'
import { useRef, useState } from 'react'
import { IoMenu } from 'react-icons/io5'

const pages = [
  ['home', '/home', 'home'],
  ['about', '/about', 'whois'],
  ['contact', '/contact', 'contact'],
  ['projects', '/projects', 'projects'],
  ['blog', '/blog', 'devblog'],
]

export default function Navbar(props: { navId: string }) {
  const [mobileOpened, setMobileOpened] = useState(false)
  const mainBox = useRef(null)

  if (typeof window !== 'undefined') {
    window.document.addEventListener('touchstart', (e) => {
      if (mobileOpened && !mainBox.current?.contains(e.target)) {
        setMobileOpened(false)
      }
    })
    window.document.addEventListener('click', (e) => {
      if (mobileOpened && !mainBox.current?.contains(e.target)) {
        setMobileOpened(false)
      }
    })
  }

  return (
    <nav
      className="bg-gray-100 dark:bg-gray-800 font-medium text-lg"
      ref={mainBox}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <a href="/home" className="ltc-button-focus-outline">
          <span className="self-center text-3xl font-semibold whitespace-nowrap hidden 2xs:block">
            like-the-color
          </span>
          <span className="self-center text-3xl font-semibold whitespace-nowrap 2xs:hidden">
            ltc
          </span>
        </a>
        {/* L-R nav menu (md+) */}
        <div className="hidden w-auto md:block" id="navbar-default">
          <ul className="flex flex-row">
            {pages.map(([id, route, name]) => (
              <li key={route} className="mx-3 ">
                <a
                  href={route}
                  className={concat(
                    props.navId === id && 'bg-blue-500',
                    'ltc-button-focus-outline px-2 py-1 block',
                    'hover:bg-blue-200 dark:hover:bg-blue-600'
                  )}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* TD toggle menu (md-)*/}
        <div className="relative flex flex-row md:hidden">
          <div
            className={concat(
              !mobileOpened && 'hidden',
              'absolute right-0 top-full bg-gray-100 dark:bg-gray-800 inline-block p-2 mt-3 z-10'
            )}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col">
              {pages.map(([id, route, name]) => (
                <li key={route}>
                  <a
                    href={route}
                    className={concat(
                      props.navId === id && 'bg-blue-500',
                      'ltc-button-focus-outline px-2 py-1 block',
                      'hover:bg-blue-200 dark:hover:bg-blue-600'
                    )}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex flex-row items-center p-2
            justify-center rounded-lg space-x-3
            hover:bg-gray-100 dark:hover:bg-gray-600
            focus:ring-gray-200 focus:ring-2 focus:outline-none
            "
            onClick={() => setMobileOpened(!mobileOpened)}
          >
            <span className="sr-only">Open navigation menu</span>
            <span className="hidden xs:block">nav</span>
            <IoMenu fontSize="30" />
          </button>
        </div>
      </div>
    </nav>
  )
}
