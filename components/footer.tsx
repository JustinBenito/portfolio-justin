"use client"

import React from 'react'
import {SlSocialLinkedin,SlSocialFacebook, SlSocialInstagram, SlSocialTwitter} from 'react-icons/sl'


const Footer = () => {
  return (
    <div className='mx-auto mt-20  md:px-32 px-4 flex lg:flex-cols-2 gap-2 text-gray-300  w-full flex-col' id='footer'>


    <div className="w-full mx-auto py-2 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://justinbenito.com/" className="hover:underline">Justin Benito</a>
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">Home</a>
        </li>
        <li>
            <a href="#about" className="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
            <a href="#projects" className="mr-4 hover:underline md:mr-6">Projects</a>
        </li>
        <li>
            <a href="#skills" className="hover:underline md:mr-6">Skills</a>
        </li>
        <li>
            <a href="#experience" className="hover:underline md:mr-6">Experience</a>
        </li>
        <li>
            <a href="#contact" className="hover:underline md:mr-6">Contact</a>
        </li>
    </ul>
    
    </div>

    <div className=' justify-start md:space-x-10 space-x-5'>
            <button className='bg-white shadow-sm rounded-md font-medium mb-6  text-black hover:scale-105 duration-150 ease-in-out' onClick={()=> window.location.href='https://www.facebook.com/careerguidancejpgandhi/'}>
                <SlSocialFacebook size={20} className="m-2 items-center justify-between"/>
            </button>
            <button className='bg-white shadow-sm rounded-md font-medium mb-6 text-black hover:scale-105 duration-150 ease-in-out' onClick={()=> window.location.href='https://www.instagram.com/careerguidancejpgandhi/'}>
                <SlSocialInstagram size={20} className="m-2 items-center justify-between"/>
            </button>
            <button className='bg-white shadow-sm rounded-md font-medium mb-6 text-black hover:scale-105 duration-150 ease-in-out' onClick={()=> window.location.href='https://twitter.com/jpgandhi'}>
                <SlSocialTwitter size={20} className="m-2 items-center justify-between"/>
            </button>
            <button className='bg-white shadow-sm rounded-md font-medium mb-6  text-black hover:scale-105 duration-150 ease-in-out' onClick={()=> window.location.href='https://www.linkedin.com/in/jayaprakash-gandhi-478b7919/'}>
                <SlSocialLinkedin size={20} className="m-2 items-center justify-between"/>
            </button>
            </div>

    </div>
  )
}


export default Footer 