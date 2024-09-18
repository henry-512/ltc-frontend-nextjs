import CSVMap from '@/component/CSVMap'
import ProjectNavbar from '@/component/ProjectNavbar'
import Root from '@/component/Root'
import { getProject } from '@/data/Projects'

export default function Projects() {
  const pid = 'tic-guangdong-solitaire'
  const project = getProject(pid)

  return (
    <Root navId='projects'>
      <ProjectNavbar project={pid} />
      <CSVMap />
    </Root>
  )
}