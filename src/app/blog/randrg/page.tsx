import Root from '@/component/Root'
import ProjectNavbar from '@/component/ProjectNavbar'
import Md from '@/markdown/randrg.mdx'
import BlogBody from '@/component/BlogBody'

export default function LTC() {
  const pid = 'randrg'
  // const project = getProject(pid)

  return (
    <Root navId='blog'>
      <ProjectNavbar project={pid} />
      <BlogBody>
        <Md />
      </BlogBody>
    </Root>
  )
}