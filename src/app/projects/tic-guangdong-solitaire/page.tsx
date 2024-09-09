import ProjectNavbar from '@/component/ProjectNavbar'
import Root from '@/component/Root'
import TIC80 from '@/component/TIC80'
import { getProject } from '@/data/Projects'

export default function Projects() {
  const pid = 'tic-guangdong-solitaire'
  const project = getProject(pid)

  return (
    <Root navId='projects'>
      <ProjectNavbar project={pid} />
      <div className='mt-2 flex flex-col items-center space-y-5'>
        <div className='ltc-text-h1 text-center'>{project?.title}</div>
        <TIC80 cart='/guangdong.tic' />
        <div className='ltc-text-h5 flex flex-row flex-wrap place-content-center gap-x-10'>
          <div>Arrow keys: D-pad</div>
          <div>Z key: A button</div>
          <div>X key: B button</div>
          <div>A key: X button</div>
          <div>S key: Y button</div>
        </div>
      </div>
    </Root>
  )
}
