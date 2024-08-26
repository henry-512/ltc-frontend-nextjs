import Root from '@/component/Root'
import TIC80 from '@/component/TIC80'

export default function Projects() {
  return (
    <Root navId='projects'>
      <div className="flex items-center space-y-5 flex-col mt-2">
        <div className="ltc-text-h1 justify-center">TIC-80 Guangdong Solitaire</div>
        <TIC80 cart='guangdong.tic'/>
      </div>
    </Root>
  )
}
