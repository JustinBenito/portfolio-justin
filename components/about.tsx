"use client"

import React from 'react'
import SectionHeading from './section-heading'
import {delay, motion} from 'framer-motion'
export default function About() {
  return (
    <motion.section 
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    transition={{
delay:0.175
    }} 
    
    className='mb-28 max-w-[45rem] mx-2 p-2 text-center leading-8 sm:mb-40 scroll-mt-28'
    id="about"
    >
        <SectionHeading >About me</SectionHeading>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat illo tempora ducimus quis accusantium numquam quidem obcaecati nam provident molestiae. Corporis tempore facilis rerum ad. Animi laudantium porro laborum libero!
    </motion.section>
  )
}
