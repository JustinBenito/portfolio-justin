"use client";

import { skillsData } from '@/lib/data'
import React from 'react'
import SectionHeading from './section-heading'
import { motion} from 'framer-motion'

export default function Skills() {

    const fadeInMotion={
        initial:{
            opacity:0,
            y:100,
        },
        animate: (index:number)=>({
            opacity:1,
            y:0,
            transition:{
                delay:0.05*index
            }
        })
    }




  return (
   <section id='skills' className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
    <SectionHeading >My Skills </SectionHeading>
    <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {skillsData.map((skill,index)=>(
            <motion.li 
            variants={fadeInMotion}
            initial="initial"
            whileInView="animate"
            viewport={{
                once:true,

            }}
            custom={index}
            className='bg-white border-gray-400 border rounded-full px-4 py-2' key={index}>{skill}</motion.li>
        ))}
    </ul>
   </section>
  )
}
