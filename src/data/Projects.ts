import { StaticImageData } from 'next/image'
import likethecolordev from '@/../public/projects/likethecolordev.png'
import guangdong from '@/../public/projects/guangdong.png'
import randrg from '@/../public/projects/randrg.png'
import peostrilms from '@/../public/projects/peostrilms.png'

class Project {
  name: string
  title: string
  image: StaticImageData
  description: string
  demo: string | undefined
  source: string | undefined
  blog: string | undefined

  constructor(
    name: string,
    title: string | undefined,
    image: StaticImageData,
    description: string,
    demo: string | undefined,
    source: string | undefined,
    blog: string | undefined,
  ) {
    this.name = name
    this.title = title ?? name
    this.image = image
    this.description = description
    this.demo = demo
    this.source = source
    this.blog = undefined
  }
}

const PROJECTS = [
  new Project(
    'likethecolor.dev',
    undefined,
    likethecolordev,
    'Full-stack website for hosting my projects',
    '/',
    'https://github.com/henry-512/ltc-server-bash',
    '/blog/ltc',
  ),
  new Project(
    'tic-guangdong-solitaire',
    'TIC-80 Guangdong Solitaire',
    guangdong,
    'Clone of Shenzhen Solitaire for TIC80',
    '/projects/tic-guangdong-solitaire',
    'https://github.com/henry-512/tic-guangdong-solitaire',
    '/blog/tic-guangdong-solitaire',
  ),
  new Project(
    'randrg',
    undefined,
    randrg,
    'Generates a random build for Deep Rock Galactic',
    undefined,
    'https://github.com/henry-512/randrg',
    '/blog/randrg',
  ),
  new Project(
    'peostri-lms',
    'PEO STRI Logistics Management Software',
    peostrilms,
    'Senior project: Full-stack web app for managing logistics for PEOSTRI',
    '/projects/peostri-lms',
    'https://github.com/Capstone-US-Army-PEOSTRI/peostri-lms',
    'https://github.com/Capstone-US-Army-PEOSTRI/peostri-lms/tree/master/docs'
  )
]

export function getProjects() {
  return PROJECTS
}

export function getProject(name: string) {
  return PROJECTS.find((p) => p.name == name)
}
