'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ProjectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px 0px',
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const projects = [
    {
      id: 1,
      title: 'Project One',
      description:
        'A full-stack web application built with Laravel, Vue.js, and MySQL, offering users a seamless experience.',
      link: 'https://example.com/project1',
      image:
        'https://images.unsplash.com/photo-1572177812156-58036aae439c?fm=jpg&q=60&w=3000',
    },
    {
      id: 2,
      title: 'Project Two',
      description:
        'A dynamic blog platform using Laravel and React, allowing users to create and manage their posts easily.',
      link: 'https://example.com/project2',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      title: 'Project Three',
      description:
        'An e-commerce website built with Laravel and Tailwind CSS, providing a fast and responsive shopping experience.',
      link: 'https://example.com/project3',
      image: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div
      id="projects"
      ref={ref}
      className="min-h-screen w-full flex items-center justify-center px-4 pt-24 pb-16 text-white"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="w-full max-w-6xl mx-auto backdrop-blur-xl bg-white/5 border-4 border-pink-500 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-[0_0_30px_#ff69b4] hover:shadow-[0_0_60px_#ff69b4] transition-shadow duration-500"
      >
        {/* Heading */}
        <motion.h1
          variants={headingVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-center"
        >
          My Projects
        </motion.h1>

        {/* PROJECTS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="text-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-pink-600 bg-black/20"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-44 md:h-48 object-cover rounded-xl mb-4"
              />

              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3">
                {project.title}
              </h2>

              <p className="text-sm sm:text-base opacity-90 mb-5 leading-relaxed">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-pink-600 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-pink-600 hover:text-white transition duration-300"
              >
                View Details
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
