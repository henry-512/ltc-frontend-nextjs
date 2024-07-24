import IconWithLabel from '@/component/IconWithLabel'
import RainbowText from '@/component/RainbowText'
import Root from '@/component/Root'
import { LuExternalLink } from 'react-icons/lu'

/**
 * Home page. Gives a short description of me and the website and some cool text.
 */
export default function Home() {
  return (
    <Root navId='home'>
      <div className='mx-auto flex min-h-main max-w-screen-xl flex-col items-center gap-y-4 p-3 text-center'>
        <div className='flex-1 content-center'>
          <h1 className='text-6xl'>Henry Thiel</h1>
          <h2 className='text-2xl'>Software Developer</h2>
        </div>
        <p className='inline max-w-screen-md flex-1'>
          Hello! I&apos;m a software developer with a background in full-stack
          web development and a passion for writing code. This self-hosted
          website is a test of my skills and a unified place to host the stuff I
          make. If you want to learn more, check out my
          <IconWithLabel
            text='devblog'
            link='/blog'
            textHideBreakpoint='none'
            inline
          >
            <LuExternalLink fontSize='12' />
          </IconWithLabel>
          or look around at my
          <IconWithLabel
            text='projects'
            link='/projects'
            textHideBreakpoint='none'
            inline
          >
            <LuExternalLink fontSize='12' />
          </IconWithLabel>
        </p>
        <div className='flex flex-row flex-wrap content-end justify-center'>
          <RainbowText text='SOFTWARE DEVELOPMENT IS MY PASSION' />
        </div>
      </div>
    </Root>
  )
}
