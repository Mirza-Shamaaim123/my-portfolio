// 'use client';

// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';

// export default function ProjectSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, {
//     once: true,
//     margin: '-100px 0px',
//   });

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.5,
//       },
//     },
//   };

//   const headingVariants = {
//     hidden: { opacity: 0, y: -30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.5, ease: 'easeOut' },
//     },
//   };

//   const hoverVariants = {
//     hover: { scale: 1.05, boxShadow: '0px 15px 30px rgba(255, 105, 180, 0.5)' },
//   };

//   const projects = [
//     {
//       id: 1,
//       title: 'Project One',
//       description:
//         'A full-stack web application built with Laravel, Vue.js, and MySQL, offering users a seamless experience.',
//       link: 'https://example.com/project1',
//     },
//     {
//       id: 2,
//       title: 'Project Two',
//       description:
//         'A dynamic blog platform using Laravel and React, allowing users to create and manage their posts easily.',
//       link: 'https://example.com/project2',
//     },
//     {
//       id: 3,
//       title: 'Project Three',
//       description:
//         'An e-commerce website built with Laravel and Tailwind CSS, providing a fast and responsive shopping experience.',
//       link: 'https://example.com/project3',
//     },
//   ];

//   return (
//     <div
//       id="projects"
//       ref={ref}
//       className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8 pt-28 pb-20 text-white"
//     >
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate={isInView ? 'visible' : 'hidden'}
//         className="max-w-5xl w-full backdrop-blur-xl bg-white/5 border-4 border-pink-500 rounded-3xl p-6 sm:p-10 md:p-14 shadow-[0_0_30px_#ff69b4] hover:shadow-[0_0_60px_#ff69b4] transition-shadow duration-500"
//       >
//         <motion.h1
//           variants={headingVariants}
//           className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8 text-center"
//         >
//           My Projects
//         </motion.h1>

//         {/* Projects Cards Container */}
        


//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {/* Project Card 1 */}
//           <motion.div
//             className="text-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out border-4 border-pink-600"
//             variants={cardVariants}
//           >
//             {/* Project Image */}
//             <img
//               src="https://images.unsplash.com/photo-1572177812156-58036aae439c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D" // Replace with your project image URL
//               alt="Project 1"
//               className="w-full h-48 object-cover rounded-xl mb-4"
//             />
//             <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Project 1</h2>
//             <p className="text-sm sm:text-base mb-6">A brief description of what the project is about. It can include technologies used, key features, and purpose.</p>
//             <a
//               href="#"
//               className="inline-block bg-white text-pink-600 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-pink-600 hover:text-white transition duration-300 ease-in-out"
//             >
//               View Details
//             </a>
//           </motion.div>

//           {/* Project Card 2 */}
//           <motion.div
//             className="text-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out border-4 border-pink-600"
//             variants={cardVariants}
//           >
//             {/* Project Image */}
//             <img
//               src="https://via.placeholder.com/300" // Replace with your project image URL
//               alt="Project 2"
//               className="w-full h-48 object-cover rounded-xl mb-4"
//             />
//             <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Project 2</h2>
//             <p className="text-sm sm:text-base mb-6">A brief description of what the project is about. It can include technologies used, key features, and purpose.</p>
//             <a
//               href="#"
//               className="inline-block bg-white text-pink-600 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-pink-600 hover:text-white transition duration-300 ease-in-out"
//             >
//               View Details
//             </a>
//           </motion.div>

//           {/* Project Card 3 */}
//           <motion.div
//             className="text-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out border-4 border-pink-600"
//             variants={cardVariants}
//           >
//             {/* Project Image */}
//             <img
//               src="https://via.placeholder.com/300" // Replace with your project image URL
//               alt="Project 3"
//               className="w-full h-48 object-cover rounded-xl mb-4"
//             />
//             <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Project 3</h2>
//             <p className="text-sm sm:text-base mb-6">A brief description of what the project is about. It can include technologies used, key features, and purpose.</p>
//             <a
//               href="#"
//               className="inline-block bg-white text-pink-600 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-pink-600 hover:text-white transition duration-300 ease-in-out"
//             >
//               View Details
//             </a>
//           </motion.div>

//           {/* Add more project cards as needed */}
//         </div>
//       </motion.div>
//     </div>


//   );
// }


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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const hoverVariants = {
    hover: { scale: 1.05, boxShadow: '0px 15px 30px rgba(255, 105, 180, 0.5)' },
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
      className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8 pt-28 pb-20 text-white"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-5xl w-full backdrop-blur-xl bg-white/5 border-4 border-pink-500 rounded-3xl p-6 sm:p-10 md:p-14 shadow-[0_0_30px_#ff69b4] hover:shadow-[0_0_60px_#ff69b4] transition-shadow duration-500"
      >
        <motion.h1
          variants={headingVariants}
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8 text-center"
        >
          My Projects
        </motion.h1>

        {/* PROJECTS GRID USING const projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="text-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out border-4 border-pink-600"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />

              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                {project.title}
              </h2>

              <p className="text-sm sm:text-base mb-6">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-pink-600 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-pink-600 hover:text-white transition duration-300 ease-in-out"
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




