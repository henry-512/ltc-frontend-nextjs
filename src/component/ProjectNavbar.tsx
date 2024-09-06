import { getProject } from '@/data/Projects'
import IconWithLabel from './IconWithLabel'
import { FaGithub } from 'react-icons/fa'
import { IoMdJournal } from 'react-icons/io'

export default function NavBar(props: { project: string }) {
  const project = getProject(props.project)
  return (
    <nav className='ltc-color-bg-alt ltc-color-border sticky top-0 z-9 text-nowrap border-b-2'>
      <div className='ltc-text-h5 mx-auto flex max-w-screen-xl items-center justify-between p-10 py-0'>
        <div>{project?.name}</div>
        <IconWithLabel
          link={project?.source}
          text='Source'
          newTab
          textHideBreakpoint='xs'
        >
          <FaGithub fontSize='20' />
        </IconWithLabel>
        <IconWithLabel
          link={project?.blog}
          text='About'
          newTab
          textHideBreakpoint='none'
        >
          <IoMdJournal fontSize='20' />
        </IconWithLabel>
      </div>
    </nav>
  )
}
