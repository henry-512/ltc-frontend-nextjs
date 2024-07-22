import LTCFooter from '@/component/LTCFooter'
import Navbar from '@/component/Navbar'
import RainbowText from '@/component/RainbowText'
import WhereAmI from '@/component/WhereAmiI'

export default function Home() {
  return (
    <>
      <header>
        <Navbar navId="home" />
        <WhereAmI path="/home/" desc="welcoming you here" />
      </header>
      <main>
        <div className="max-w-screen-xl flex flex-col mx-auto content-center justify-center p-3">
          <div className="flex flex-wrap flex-row justify-center content-center my-10">
            <RainbowText text="SOFTWARE DEVELOPMENT IS MY PASSION" />
          </div>
          <h1 className="text-center">The website of Henry Thiel</h1>
          <p>
            Hello! I&apos;m a software engineer with a background in full-stack
            web development and a passion for writing code. This is website is a
            showcase of my skills and a unified place to put my personal
            projects. If you want to know more about how I built this place,
            check out my devblog.
          </p>
          <div>
            <h3>Stuff I use</h3>
          </div>
        </div>
      </main>
      <LTCFooter />
    </>
  )
}
