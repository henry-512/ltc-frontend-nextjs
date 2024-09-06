import Image, { StaticImageData } from 'next/image'
import { FaGithub } from 'react-icons/fa'
import IconWithLabel from './IconWithLabel'
import { LuExternalLink } from 'react-icons/lu'
import { IoMdJournal } from 'react-icons/io'

export default function ProjectCard(props: {
  name: string
  desc: string
  image: StaticImageData
  demo: string | undefined
  source: string | undefined
  blog: string | undefined
}) {
  return (
    <div className='ltc-color-bg-alt ltc-border flex h-72 w-72 flex-col p-3'>
      <a className='max-h-32 max-w-64 justify-center flex' href={props.demo ?? props.blog ?? props.source}>
        <Image
          src={props.image}
          alt={props.name}
          className='ltc-border p-auto h-full w-auto'
        />
      </a>
      <span className='ltc-text-h4'>{props.name}</span>
      <span className='m-auto'>{props.desc}</span>
      <div className='mt-auto flex flex-row justify-center space-x-3'>
        <IconWithLabel text='Demo' link={props.demo} textHideBreakpoint='none'>
          <LuExternalLink fontSize='20' />
        </IconWithLabel>
        <IconWithLabel
          text='Source'
          link={props.source}
          newTab
          textHideBreakpoint='none'
        >
          <FaGithub fontSize='20' />
        </IconWithLabel>
        <IconWithLabel
          text='About'
          link={props.blog}
          newTab
          textHideBreakpoint='none'
        >
          <IoMdJournal fontSize='20' />
        </IconWithLabel>
      </div>
    </div>
  )
}
