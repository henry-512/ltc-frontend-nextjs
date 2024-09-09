import Root from '@/component/Root'
import ProjectNavbar from '@/component/ProjectNavbar'
import Md from '@/markdown/ltc.mdx'
import BlogBody from '@/component/BlogBody'

export default function LTC() {
  const pid = 'likethecolor.dev'
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
