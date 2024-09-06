import Root from '@/component/Root'
import VideoPlayer from '@/component/VideoPlayer'
import ProjectNavbar from '@/component/ProjectNavbar'
import { getProject } from '@/data/Projects'

export default function PeoStri() {
  const pid = 'peostri-lms'
  const project = getProject(pid)
      
  return (
    <Root navId='projects'>
    <ProjectNavbar project={pid} />
      <div className='flex justify-center justify-items-center h-full p-5'>
        <VideoPlayer src='/peostri-demo.mp4' />
      </div>
    </Root>
  )
}
