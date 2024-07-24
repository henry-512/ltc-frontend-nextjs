import { Inter } from 'next/font/google'
import Navbar from './Navbar'
import LTCFooter from './LTCFooter'

const inter = Inter({ subsets: ['latin'] })

/**
 * The root component for the main website. Responsible for rendering the navbar and footer, and setting text/background colors and fonts.
 *
 * @param hideFooter True if the linktree footer should be hidden. Default false.
 * @param hideNav True if the navigation header should be hidden. Default false.
 * @param navId The id of the page currently selected. Required if `hideNav` is false.
 */
export default function Root(props: {
  hideFooter?: boolean
  hideNav?: boolean
  navId?: string
  children: React.ReactNode
}) {
  if (!props.hideNav && props.navId === undefined) {
    throw new SyntaxError('I forgot to set a navId. Send me an angry email.')
  }

  return (
    <body
      className={`${inter.className} bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-200`}
    >
      {props.hideNav || (
        // display:unset lets sticky work properly
        <header style={{ display: 'unset' }}>
          <Navbar navId={props.navId ?? ''} />
        </header>
      )}
      <main>{props.children}</main>
      <LTCFooter />
    </body>
  )
}
