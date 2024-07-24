'use client'

import { concat } from '@/util'
import { useRef, useState } from 'react'
import { IoMenu } from 'react-icons/io5'

const pages = [
  ['home', '/home', 'home'],
  ['about', '/about', 'whois'],
  ['projects', '/projects', 'projects'],
  ['blog', '/blog', 'devblog'],
  ['contact', '/contact', 'contact'],
]

/**
 * Client component. Navigation bar, designed for the top of the screen.
 * @param navId The internal id for what page is selected.
 */
export default function Navbar(props: { navId: string }) {
  const [mobileOpened, setMobileOpened] = useState(false)
  const mainBox = useRef<any>(null)

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
      className="sticky top-0 w-full bg-gray-100 dark:bg-gray-800 font-medium text-lg z-10 border-b-blue-300 dark:border-blue-800 border-b-2 text-nowrap"
      ref={mainBox}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-3 pb-0">
        <a href="/home" className="ltc-button-focus-outline rounded-t-lg">
          <span className="self-center text-3xl font-semibold whitespace-nowrap hidden 2xs:block px-1">
            like-the-color
          </span>
          <span className="self-center text-3xl font-semibold whitespace-nowrap 2xs:hidden">
            ltc
          </span>
        </a>
        {/* L-R nav menu (md+) */}
        <div
          className="hidden md:animate-fadeVisible w-auto md:block"
          id="navbar-default"
        >
          <ul className="flex flex-row shrink">
            {pages.map(([id, route, name]) => (
              <li key={route} className="mx-3">
                <a
                  href={route}
                  className={concat(
                    props.navId === id && 'bg-blue-200 dark:bg-blue-900',
                    'ltc-button-focus-outline ltc-color-link rounded-t-lg px-2 py-1 block',
                    'hover:bg-blue-300 dark:hover:bg-blue-800'
                  )}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* TD toggle menu (md-)*/}
        <div className="flex flex-row md:hidden animate-fadeVisible ">
          <div
            className={concat(
              !mobileOpened && 'hidden',
              'absolute right-1.5 top-full bg-gray-100 dark:bg-gray-800 inline-block p-2 z-10 border-b-blue-300 dark:border-blue-800 border-2 rounded-b-lg'
            )}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col">
              {pages.map(([id, route, name]) => (
                <li key={route}>
                  <a
                    href={route}
                    className={concat(
                      props.navId === id && 'bg-blue-900',
                      'ltc-button-focus-outline ltc-color-link rounded-lg px-2 py-1 block',
                      'dark:hover:bg-blue-800'
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
            className="ltc-button-focus-outline ltc-color-link inline-flex flex-row items-center justify-center rounded-lg space-x-3 pr-2"
            onClick={() => setMobileOpened(!mobileOpened)}
          >
            <span className="sr-only">Open navigation menu</span>
            <span className="animate-fadeHidden xs:animate-fadeVisible xs:block">
              nav
            </span>
            <IoMenu fontSize="30" />
          </button>
        </div>
      </div>
    </nav>
  )
}
