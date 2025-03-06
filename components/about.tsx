"use client"

import React from 'react';
import SectionHeading from './section-heading';
import { delay, motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      className='mb-28 max-w-[45rem] mx-2 p-2 flex justify-center items-center sm:mb-40 scroll-mt-28'
      id='about'
    >
      <div className='text-center max-w-prose mx-auto'>
        <SectionHeading>About me</SectionHeading>
        <p className='text-justify'>
          👋 Hey there, I’m Justin Benito, a tech-savvy 3rd year student pursuing Electronics and Communication Engineering.
          Passionate about turning ideas into reality.
        </p>
        <p className='text-justify'>
          🌟 Beyond the four corners of the classroom, I love explaining and informing people about the latest technologies
          which have garnered 250k+ cumulative views across social channels.
        </p>
        <p className='text-justify'>
          💡 I thrive on attending hackathons, conferences, and meetups to connect with like-minded individuals.
        </p>
        <p className='text-justify'>
       👨‍💻 I’m a multilingual developer fluent in Python, C++, Dart, Javascript, React, React Native, Java, and have developed numerous projects using them.
        </p>
        <p className='text-justify'>
        🗣️ I have also given multiple talks from community meetups to huge conferences about topics in React, Flutter and Open Source. 
        </p>
        <p className='text-justify'>
         ✍️ When not in tech mode, I dive into the realm of books and pen short riveting stories.
        </p>
      </div>
    </motion.section>
  );
}
