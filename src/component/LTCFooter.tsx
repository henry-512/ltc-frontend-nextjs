import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { LuExternalLink } from 'react-icons/lu'
import { MdEmail } from 'react-icons/md'
import IconWithLabel from './IconWithLabel'

/**
 * Fixed footer containing quick links. Includes a div for spacing.
 */
export default function LTCFooter() {
  return (
    <>
      <div className='h-10' />
      <footer className='ltc-color-bg-alt ltc-color-border ltc-text-h5 fixed bottom-0 flex w-full justify-center border-t-2 px-4 py-1'>
        <div className='text-md flex w-screen max-w-screen-xl items-center justify-between space-x-5 pb-0.5'>
          <IconWithLabel
            link='/blog/ltc'
            text='powered by magic'
            textHideBreakpoint='xs'
          >
            <LuExternalLink fontSize='20' />
          </IconWithLabel>
          <div className='flex flex-row items-center space-x-4'>
            <IconWithLabel
              link='https://www.linkedin.com/in/henry-thiel/'
              text='LinkedIn'
              newTab
            >
              <FaLinkedin fontSize='20' />
            </IconWithLabel>
            <IconWithLabel
              link='https://github.com/henry-512'
              text='Github'
              newTab
            >
              <FaGithub fontSize='20' />
            </IconWithLabel>
            <IconWithLabel link='/contact' text='Email' newTab>
              <MdEmail fontSize='20' />
            </IconWithLabel>
          </div>
        </div>
      </footer>
    </>
  )
}
