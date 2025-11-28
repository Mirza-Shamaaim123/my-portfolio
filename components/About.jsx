'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px 0px'
  });

  const containerVariants = {
    hidden: {},
    visible: { 
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.5
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <div
      id="about"
      ref={ref}
      className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8 pt-28 pb-20 text-white"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="
          max-w-5xl w-full backdrop-blur-xl bg-white/5 
          border-4 border-green-500 rounded-3xl 
          p-6 sm:p-10 md:p-14 
          shadow-[0_0_30px_#00ff00]
          hover:shadow-[0_0_60px_#00ff00] transition-shadow duration-500
        "
      >
        <motion.h1
          variants={headingVariants}
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8"
        >
          About Me
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-200"
        >
          Hello! I'm a passionate <span className="text-green-400 font-semibold">Frontend Developer</span> who thrives on creating
          clean, modern, and interactive web experiences. I love turning complex designs into responsive and animated websites
          that delight users.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 mt-4"
        >
          Over the years, I’ve developed a strong foundation in building scalable web applications using modern technologies.
          I enjoy collaborating with designers and developers to bring ideas to life and constantly learning new tools and
          techniques.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 mt-4"
        >
          My main stack includes:
          <span className="text-blue-400"> React</span>,
          <span className="text-sky-400"> Next.js</span>,
          <span className="text-yellow-400"> Tailwind CSS</span>,
          and <span className="text-purple-300"> Framer Motion</span>.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 mt-4"
        >
          I also like experimenting with animations, micro-interactions, and unique UI effects to make websites feel alive.
          Beyond coding, I enjoy exploring tech trends, reading about UI/UX design, and contributing to open-source projects.
        </motion.p>
      </motion.div>
    </div>
  );
}
