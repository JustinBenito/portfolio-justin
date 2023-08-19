"use client"

import React, { useState, useEffect } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Socials() {
  return (
    <section className='mt-16'>
      <SectionHeading>Social Stats</SectionHeading>
      <div className='w-full px-4 py-8 mx-auto text-center lg:py-16 lg:px-6'>
        <dl className='grid gap-8 md:gap-60 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white'>
          <AnimatedStat value={200} label='Views in Thousands' />
          <AnimatedStat value={2000} label='Followers' />
          <AnimatedStat value={100} label='Posts' />
        </dl>
      </div>
    </section>
  );
}


const AnimatedStat = ({ value, label }):AniProps => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -100px 0px', // Adjust rootMargin as needed
  });

  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setAnimatedValue((prevValue) => {
          if (prevValue >= value) {
            clearInterval(interval);
            return value;
          }
          return prevValue + 1;
        });
      }, 10); // Adjust the interval speed as needed

      return () => clearInterval(interval);
    }
  }, [inView, value]);

  return (
    <motion.div
      className='flex flex-col items-center justify-center'
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.dt className='mb-2 text-3xl md:text-4xl font-extrabold'>{animatedValue}+</motion.dt>
      <motion.dd className='font-light text-gray-500 dark:text-gray-400'>{label}</motion.dd>
    </motion.div>
  );
};
