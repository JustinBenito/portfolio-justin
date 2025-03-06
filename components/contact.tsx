"use client"

import React from 'react'
import SectionHeading from './section-heading'
import {delay, motion} from 'framer-motion'

export default function Contact() {


  return (
   <section id='contact' className='mt-28'>
   <SectionHeading>Contact Me</SectionHeading>
      <div className="py-2 lg:py-4  px-4 mx-auto max-w-screen-md">
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 :text-gray-400 sm:text-xl">Wanna Talk. It`s Justinbenito1974[at]gmail[dot]com <br /> </p>
      </div>

   </section>
  )
}
