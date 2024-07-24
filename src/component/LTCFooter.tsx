import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { LuExternalLink } from 'react-icons/lu'
import { MdEmail } from 'react-icons/md'
import IconWithLabel from './IconWithLabel'

export default function LTCFooter() {
  return (
    <>
      <div className="h-6" />
      <footer className="fixed bottom-0 flex justify-center w-full bg-gray-100 dark:bg-gray-800 px-4 py-1">
        <div className="flex max-w-screen-xl w-screen justify-between items-center text-md space-x-5 pb-0.5">
          <IconWithLabel
            link="/blog/ltc"
            text="powered by magic"
            textHideBreakpoint="xs"
          >
            <LuExternalLink fontSize="20" />
          </IconWithLabel>
          <div className="flex flex-row space-x-4 items-center">
            <IconWithLabel
              link="https://www.linkedin.com/in/henry-thiel/"
              text="LinkedIn"
              newTab
            >
              <FaLinkedin fontSize="20" />
            </IconWithLabel>
            <IconWithLabel
              link="https://github.com/henry-512"
              text="Github"
              newTab
            >
              <FaGithub fontSize="20" />
            </IconWithLabel>
            <IconWithLabel link="/contact" text="Email" newTab>
              <MdEmail fontSize="20" />
            </IconWithLabel>
          </div>
        </div>
      </footer>
    </>
  )
}
