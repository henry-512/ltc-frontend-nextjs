import ProjectNavbar from '@/component/ProjectNavbar'
import Root from '@/component/Root'
import VideoPlayer from '@/component/VideoPlayer'
import { getProject } from '@/data/Projects'

export default function PeoStri() {
  const pid = 'peostri-lms'
  const project = getProject(pid)

  return (
    <Root navId='projects'>
      <ProjectNavbar project={pid} />
      <div className='flex h-full justify-center justify-items-center p-5'>
        <VideoPlayer src='/peostri-demo.mp4' />
      </div>
    </Root>
  )
}
