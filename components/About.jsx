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
          border-4 border-pink-500 rounded-3xl 
          p-6 sm:p-10 md:p-14 
          shadow-[0_0_30px_#ff69b4]
          hover:shadow-[0_0_60px_#ff69b4] transition-shadow duration-500
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
          Hello! I'm a dedicated <span className="text-green-400 font-semibold">PHP & Laravel Developer</span> with experience building robust, scalable, and secure web applications.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 mt-4"
        >
          I specialize in creating clean backend architectures, efficient APIs, and dynamic web solutions using Laravel, PHP, and MySQL. I enjoy optimizing code, implementing best practices, and collaborating with frontend developers to deliver seamless user experiences.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 mt-4"
        >
          My tech stack includes:
          <span className="text-blue-400"> PHP</span>,
          <span className="text-sky-400"> Laravel</span>,
          <span className="text-yellow-400"> MySQL</span>,
          <span className="text-purple-300"> Vue.js / React</span>,
          and <span className="text-pink-400">Tailwind CSS</span>.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 mt-4"
        >
          I also enjoy working with RESTful APIs, authentication systems, queues, and exploring modern Laravel packages to build efficient and maintainable applications. Outside of coding, I love contributing to open-source Laravel projects and learning about software architecture patterns.
        </motion.p>
      </motion.div>
    </div>
  );
}
