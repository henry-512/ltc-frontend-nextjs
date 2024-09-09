'use client'

import { concatCSS } from '@/util'
import { useRef, useState } from 'react'
import { IoMenu } from 'react-icons/io5'

const pages = [
  ['home', '/home', 'home'],
  ['about', '/home/#about', 'whois'],
  ['projects', '/home/#projects', 'projects'],
  ['blog', '/home/#devblog', 'devblog'],
  // ['contact', '/contact', 'contact'],
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
      className='ltc-color-bg-alt ltc-color-border ltc-text-h4 sticky top-0 z-10 w-full text-nowrap border-b-2'
      ref={mainBox}
    >
      <div className='mx-auto flex max-w-screen-xl items-center justify-between p-3 pb-0'>
        <a href='/home' className='ltc-button-focus-outline rounded-t-lg'>
          <span className='ltc-text-h2 hidden whitespace-nowrap 2xs:block'>
            likethecolor
          </span>
          <span className='ltc-text-h2 whitespace-nowrap 2xs:hidden'>ltc</span>
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
                  className={concatCSS(
                    props.navId === id && 'ltc-color-bg-blue',
                    'ltc-button-focus-outline ltc-color-bg-button ltc-color-link block rounded-t-lg px-2 py-1',
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
            className={concatCSS(
              !mobileOpened && 'hidden',
              'ltc-color-border ltc-color-bg-alt absolute right-1.5 top-full z-10 inline-block rounded-b-lg border-2 p-2',
            )}
            id='navbar-default'
          >
            <ul className='flex flex-col font-medium'>
              {pages.map(([id, route, name]) => (
                <li key={route}>
                  <a
                    href={route}
                    className={concatCSS(
                      props.navId === id && 'ltc-color-bg-blue',
                      'ltc-button-focus-outline ltc-color-link ltc-color-bg-button block rounded-lg px-2 py-1',
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
