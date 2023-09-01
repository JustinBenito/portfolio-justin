"use client"

import React from 'react'
import SectionHeading from './section-heading'
import {delay, motion} from 'framer-motion'

export default function Contact() {


  return (
   <section id='contact' className='mt-28'>
   <SectionHeading>Contact Me</SectionHeading>
      <div className="py-2 lg:py-4  px-4 mx-auto max-w-screen-md">
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 :text-gray-400 sm:text-xl">Wanna Talk. Shoot me a DM or Mail me here 👇 <br /> I reply to everything everyone everytime at once 😉</p>
        <form action="https://formsubmit.co/1e00b54531d94b175d83d762d1a6e408" method="POST" className="space-y-8">
        <input type="hidden" name="_captcha" value="false"></input>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 :text-gray-300">Your email</label>
            <input type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500 :shadow-sm-light" placeholder="name@email.com" required />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 :text-gray-300">Subject</label>
            <input type="text" id="subject" name="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500 :shadow-sm-light" placeholder="Regarding..." required />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 :text-gray-400">Your message</label>
            <textarea id="message" name="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500" placeholder="Hey Justin..."></textarea>
          </div>
          <motion.button 
                 initial={{ opacity: 0, scale: 0.5 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5 }}
              type="submit"
             className="inline-flex focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition items-center hover:bg-white bg-black  text-white hover:text-black focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center :focus:ring-primary-900 border-white border-2 focus:ring-primary-300">
                Contact Me
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </motion.button>
        </form>
      </div>

   </section>
  )
}
