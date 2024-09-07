import '@/css/night-owl-code.css'
import '@/css/github-markdown.css'

export default function BlogBody(props: { children: React.ReactNode }) {
  return (
    <div className='mx-auto max-w-screen-lg p-3'>
      <div className='markdown-body p-5'>{props.children}</div>
    </div>
  )
}
