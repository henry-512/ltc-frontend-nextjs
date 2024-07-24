import IconWithLabel from '@/component/IconWithLabel'
import LTCFooter from '@/component/LTCFooter'
import Navbar from '@/component/Navbar'
import RainbowText from '@/component/RainbowText'
import { LuExternalLink } from 'react-icons/lu'

export default function Home() {
  return (
    <>
      {/* display:unset lets sticky work properly */}
      <header style={{ display: 'unset' }}>
        <Navbar navId="home" />
      </header>
      <main>
        <div className="max-w-screen-xl mx-auto flex flex-col gap-y-4 p-3 text-center min-h-main items-center">
          <div className="flex-1 content-center">
            <h1 className="text-6xl">Henry Thiel</h1>
            <h2 className="text-2xl">Software Developer</h2>
          </div>
          <p
            className="flex-1 max-w-screen-md inline"
            style={{ transition: 'width 0.5s  ease' }}
          >
            Hello! I&apos;m a software developer with a background in full-stack
            web development and a passion for writing code. This self-hosted
            website is a test of my skills and a unified place to host the stuff
            I make. If you want to learn more, check out my
            <IconWithLabel
              text="devblog"
              link="/blog"
              textHideBreakpoint="none"
              inline
            >
              <LuExternalLink fontSize="12" />
            </IconWithLabel>
            or look around at my
            <IconWithLabel
              text="projects"
              link="/projects"
              textHideBreakpoint="none"
              inline
            >
              <LuExternalLink fontSize="12" />
            </IconWithLabel>
          </p>
          <div className="flex flex-wrap flex-row justify-center content-end">
            <RainbowText text="SOFTWARE DEVELOPMENT IS MY PASSION" />
          </div>
        </div>
      </main>
      <LTCFooter />
    </>
  )
}
