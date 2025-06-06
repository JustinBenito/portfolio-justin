import About from '@/components/about'
import Contact from '@/components/contact'
import Experience from '@/components/experience'
import Footer from '@/components/footer'
import Intro from '@/components/intro'
import Projects from '@/components/projects'
import SectionDivider from '@/components/section-divider'
import Skills from '@/components/skills'

import Image from 'next/image'
import BlogsPage from './blogs/page'

export default function Home() {
  return (
    <main className="flex flex-col items-center ">
     <Intro />
     <About />
     <Projects />
     <Skills />
     <Experience />
     {/* <Contact /> */}
     <BlogsPage />
     <Footer />
    </main>
  )
}
