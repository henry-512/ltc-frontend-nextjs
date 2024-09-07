import IconWithLabel from '@/component/IconWithLabel'
import ProjectCard from '@/component/ProjectCard'
import RainbowText from '@/component/RainbowText'
import Root from '@/component/Root'
import { LuExternalLink } from 'react-icons/lu'
import { getProjects } from '@/data/Projects'

/**
 * Home page. Gives a short description of me and the website and some cool text.
 */
export default function Home() {
  return (
    <Root navId='home'>
      <div className='mx-auto flex min-h-main max-w-screen-xl flex-col items-center gap-y-10 p-3 text-center'>
        {/* <div>
          <h1 className='ltc-text-h1'>Henry</h1>
          <h2 className='ltc-text-h3'>Software Developer</h2>
        </div> */}
        <div className='flex flex-row flex-wrap content-end justify-center'>
          <RainbowText text='SOFTWARE DEVELOPMENT IS MY PASSION' />
        </div>
        <p className='inline max-w-screen-lg ltc-text-h5' id='about'>
          Hello! I&apos;m a software developer with a background in full-stack
          web development and a passion for writing code. This self-hosted
          website is a test of my skills and a unified place to host the stuff I
          make.
        </p>
        <div
          className='flex max-w-screen-xl flex-row flex-wrap place-content-center gap-4'
          id='projects'
        >
          {getProjects().map((p, i) => (
            <ProjectCard
              key={i}
              image={p.image}
              name={p.name}
              desc={p.description}
              demo={p.demo}
              source={p.source}
              blog={p.blog}
            />
          ))}
        </div>
        <div className='ltc-text-h3'>And more I haven&apos;t published!</div>
      </div>
    </Root>
  )
}
