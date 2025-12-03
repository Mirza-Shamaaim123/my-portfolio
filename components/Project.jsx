"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

export default function ProjectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [hovered, setHovered] = useState(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const projects = [
    {
      id: "01",
      title: "Food Delivery App",
      description:
        "A fully responsive food delivery platform built using Laravel and HTML templates, enabling users to browse restaurants, place orders, and track deliveries in real-time.",
      tags: ["Laravel", "HTML", "CSS", "JavaScript"],
      link: "https://html.themehour.net/barab/demo/index.html",
      image: "/project1.png",
    },
        {
      id: "02",
       title: "Multi-Tenant Subscription System",
      description:
         "A subscription-based multi-tenant platform where users can purchase plans and instantly create their own stores, built for scalability and easy management.",
       tags: ["Laravel", "Stripe", "MySQL", "Tailwind CSS"],
       link: "#",
       image: "/project2.png",
     },
    {
      id: "03",
      title: "Nebula",
      description: "AI automation platform to manage workflows and agents.",
      tags: ["Next.js", "MongoDB", "Stripe"],
      link: "#",
      image: "https://via.placeholder.com/800",
    },
  ];

  // Mouse movement tilt calculation
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 25; // tilt left/right
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15; // tilt up/down
    setTilt({ x, y });
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen w-full px-6 md:px-12 lg:px-20 py-32 text-white"
    >
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Section Heading */}
        <motion.h2
          className="text-5xl md:text-6xl font-bold tracking-wide text-green-400 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          PROJECTS
        </motion.h2>

        {/* Projects List */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onMouseMove={handleMouseMove}
              style={{ perspective: "1200px" }}
            >
              {/* External Link */}
              <a
                href={project.link}
                target="_blank"
                className="absolute right-0 top-1/2 -translate-y-1/2 opacity-70 group-hover:opacity-100 transition"
              >
                <ExternalLink size={28} />
              </a>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight flex items-center gap-4">
                {project.title}
                <span className="text-gray-400 text-lg">{project.id}</span>
              </h1>

              {/* Description */}
              <p className="mt-4 text-gray-300 text-lg max-w-2xl leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-5">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 bg-white/10 rounded-full text-sm border border-white/10 backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Image (Tilt + Mouse Follow) */}
              {hovered === index && (
                <motion.div
                  className="absolute hidden md:block"
                  style={{
                    top: mousePos.y,
                    left: mousePos.x,
                    translate: "-50% -50%",
                    pointerEvents: "none",
                  }}
                >
                  <motion.img
                    src={project.image}
                    initial={{ opacity: 0, }}
                    animate={{
                      opacity: 1,

                      rotateY: tilt.x,
                      rotateX: -tilt.y,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 140,
                      damping: 15,
                    }}
                    className="
                      w-[400px]
                      h-[250px]
                      rounded-xl
                      object-cover
                      shadow-2xl
                      border border-green-400/30
                      will-change-transform
                    "
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}








// "use client";

// import { motion, useInView } from "framer-motion";
// import { useRef, useState } from "react";
// import { ExternalLink } from "lucide-react";

// export default function ProjectSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const [hovered, setHovered] = useState(null);
//   const [tilt, setTilt] = useState({ x: 0, y: 0 });
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   const projects = [
//     {
//       id: "01",
//       title: "Food Delivery App",
//       description:
//         "A fully responsive food delivery platform built using Laravel and HTML templates, enabling users to browse restaurants, place orders, and track deliveries in real-time.",
//       tags: ["Laravel", "HTML", "CSS", "JavaScript"],
//       link: "https://html.themehour.net/barab/demo/index.html",
//       image: "/project1.png",
//     },
//     {
//       id: "02",
//       title: "Multi-Tenant Subscription System",
//       description:
//         "A subscription-based multi-tenant platform where users can purchase plans and instantly create their own stores, built for scalability and easy management.",
//       tags: ["Laravel", "Stripe", "MySQL", "Tailwind CSS"],
//       link: "#",
//       image: "/project2.png",
//     }
//     ,
//     {
//       id: "03",
//       title: "Nebula",
//       description: "AI automation platform to manage workflows and agents.",
//       tags: ["Next.js", "MongoDB", "Stripe"],
//       link: "#",
//       image: "https://via.placeholder.com/800",
//     },
//   ];

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
//     const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
//     setTilt({ x, y });
//     setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
//   };

//   return (
//     <section
//       id="projects"
//       ref={ref}
//       className="min-h-screen w-full px-6 md:px-12 lg:px-20 py-32 text-white bg-transparent"
//     >
//       <div className="max-w-6xl mx-auto">
//         {/* Section Heading */}
//         <motion.h2
//           className="text-5xl md:text-6xl font-extrabold tracking-tight text-center text-green-400 mb-20"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           PROJECTS
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-16">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl border border-green-500/20"
//               onMouseEnter={() => setHovered(index)}
//               onMouseLeave={() => setHovered(null)}
//               onMouseMove={handleMouseMove}
//               style={{ perspective: "1000px" }}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//             >
//               {/* Project Image */}
//               <motion.img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-64 md:h-80 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
//               />

//               {/* Hover Overlay */}
//               {hovered === index && (
//                 <motion.div
//                   className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col justify-end p-6 rounded-2xl"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                   style={{
//                     transformStyle: "preserve-3d",
//                     rotateY: tilt.x,
//                     rotateX: -tilt.y,
//                   }}
//                 >
//                   <h3 className="text-2xl font-bold text-green-400 flex items-center justify-between">
//                     {project.title}
//                     <a
//                       href={project.link}
//                       target="_blank"
//                       className="ml-4 opacity-80 hover:opacity-100 transition"
//                     >
//                       <ExternalLink size={24} />
//                     </a>
//                   </h3>
//                   <p className="mt-2 text-gray-300">{project.description}</p>
//                   <div className="flex flex-wrap gap-2 mt-3">
//                     {project.tags.map((tag, i) => (
//                       <span
//                         key={i}
//                         className="px-3 py-1 text-xs bg-green-500/20 rounded-full border border-green-400/30"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
