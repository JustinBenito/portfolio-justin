import About from '@/components/about'
import Contact from '@/components/contact'
import Experience from '@/components/experience'
import Footer from '@/components/footer'
import Intro from '@/components/intro'
import Projects from '@/components/projects'
import SectionDivider from '@/components/section-divider'
import Skills from '@/components/skills'
import Socials from '@/components/socials'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center ">
     <Intro />
     <SectionDivider />
     <About />
     <Projects />
     <Skills />
     <Experience />
     {/* <Socials /> */}
     <Contact />
     <Footer />
    </main>
  )
}
