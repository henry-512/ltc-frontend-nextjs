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
      className='sticky top-0 z-10 w-full text-nowrap border-b-2 border-b-blue-300 bg-gray-100 text-lg font-medium dark:border-blue-800 dark:bg-gray-800'
      ref={mainBox}
    >
      <div className='mx-auto flex max-w-screen-xl items-center justify-between p-3 pb-0'>
        <a href='/home' className='ltc-button-focus-outline rounded-t-lg'>
          <span className='hidden self-center whitespace-nowrap px-1 text-3xl font-semibold 2xs:block'>
            like-the-color
          </span>
          <span className='self-center whitespace-nowrap text-3xl font-semibold 2xs:hidden'>
            ltc
          </span>
        </a>
        {/* L-R nav menu (md+) */}
        <div
          className='hidden w-auto md:block md:animate-fadeVisible'
          id='navbar-default'
        >
          <ul className='flex shrink flex-row'>
            {pages.map(([id, route, name]) => (
              <li key={route} className='mx-3'>
                <a
                  href={route}
                  className={concat(
                    props.navId === id && 'bg-blue-200 dark:bg-blue-900',
                    'ltc-button-focus-outline ltc-color-link block rounded-t-lg px-2 py-1',
                    'hover:bg-blue-300 dark:hover:bg-blue-800',
                  )}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* TD toggle menu (md-)*/}
        <div className='flex animate-fadeVisible flex-row md:hidden'>
          <div
            className={concat(
              !mobileOpened && 'hidden',
              'absolute right-1.5 top-full z-10 inline-block rounded-b-lg border-2 border-b-blue-300 bg-gray-100 p-2 dark:border-blue-800 dark:bg-gray-800',
            )}
            id='navbar-default'
          >
            <ul className='flex flex-col font-medium'>
              {pages.map(([id, route, name]) => (
                <li key={route}>
                  <a
                    href={route}
                    className={concat(
                      props.navId === id && 'bg-blue-900',
                      'ltc-button-focus-outline ltc-color-link block rounded-lg px-2 py-1',
                      'dark:hover:bg-blue-800',
                    )}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='ltc-button-focus-outline ltc-color-link inline-flex flex-row items-center justify-center space-x-3 rounded-lg pr-2'
            onClick={() => setMobileOpened(!mobileOpened)}
          >
            <span className='sr-only'>Open navigation menu</span>
            <span className='animate-fadeHidden xs:block xs:animate-fadeVisible'>
              nav
            </span>
            <IoMenu fontSize='30' />
          </button>
        </div>
      </div>
    </nav>
  )
}
