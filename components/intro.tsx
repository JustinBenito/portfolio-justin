"use client"
import {  BsLinkedin } from "react-icons/bs";
import React from 'react'
import Image from 'next/image'
import Typed from 'react-typed';
import {delay, motion} from 'framer-motion'

export default function Intro() {
  return (
   <section>
    <div className='flex items-center justify-center'>


<section className="scroll-mt-[100rem]" id="home">
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        
        <div className='relative items-center mx-auto flex-grow-0'>
        <motion.div
       initial={{opacity:0,scale:0}}
       animate={{opacity:1,scale:1}}
       transition={{
        type: "tween",
        duration: 0.2,
       }}>   
        <Image src="/ju.png" alt='' width={150} height={150} quality="100" priority={true} className=' h-64 w-64 rounded-full border-[0.35rem] border-white object-cover shadow-xl'/>
        </motion.div>  
        <motion.span 
            initial={{opacity:0,scale:0}}
            animate={{opacity:1,scale:1}}
            transition={{
             type: "spring",
             duration: 0.7,
             stiffness:125,
             delay:0.5,
            }} 
            className='text-6xl absolute md:bottom-0 md:right-4  bottom-1  md:block '>
                👋
        </motion.span> 
        </div>
        <div className="mt-4 md:mt-0 space-y-4 ">
        <h1
        className="mb-4  text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"

        >Welcome! I am Justin</h1>
            <motion.p 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
            className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">I work with Flutter, React and React Native.<br></br> Big Tech Enthusiast and a Zealous Engineer</motion.p>
            <motion.a 
                 initial={{ opacity: 0, scale: 0.5 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5 }}
            href="#contact" className="inline-flex focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition items-center hover:bg-white bg-black  text-white hover:text-black focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900  focus:ring-primary-300">
                Contact Me
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </motion.a>
            <motion.a 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          className="inline-flex px-3 bg-white  border-2 mx-2 items-center   hover:bg-black  text-black rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition  hover:text-white focus:ring-4 focus:ring-primary-300 font-medium text-sm py-3 text-center cursor-pointer  borderBlack   "
          href="https://www.linkedin.com/in/justinbenito/"
          target="_blank"
        >
          <BsLinkedin />
        </motion.a>
        </div>
    </div>
</section>
    </div>
   </section>



  )
}
