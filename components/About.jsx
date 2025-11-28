'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px 0px'
  });

  return (
    <div
      ref={ref}
      className="min-h-screen w-full flex items-center justify-center px-6 pt-28 pb-20 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.7 }}
        className="max-w-5xl w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-14 shadow-2xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-6xl font-bold mb-8"
        >
          About Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl leading-relaxed text-gray-200 space-y-4"
        >
          Hello! I'm a passionate <span className="text-green-400 font-semibold">Frontend Developer</span> who thrives on creating clean, modern, and interactive web experiences. I love turning complex designs into responsive and animated websites that delight users.  
          
          Over the years, I’ve developed a strong foundation in building scalable web applications using modern technologies. I enjoy collaborating with designers and developers to bring ideas to life and constantly learning new tools and techniques.  

          My main stack includes: 
          <span className="text-blue-400"> React</span>, 
          <span className="text-sky-400"> Next.js</span>, 
          <span className="text-yellow-400"> Tailwind CSS</span>, 
          and <span className="text-purple-300"> Framer Motion</span>.  

          I also like experimenting with animations, micro-interactions, and unique UI effects to make websites feel alive. Beyond coding, I enjoy exploring tech trends, reading about UI/UX design, and contributing to open-source projects.
        </motion.p>
      </motion.div>
    </div>
  );
}
