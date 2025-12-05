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
      title: "Job Portal Website",
      description:
        "A complete job portal system where users can search jobs, apply, and companies can post new job listings.",
      tags: ["Laravel", "MySQL", "Bootstrap"],
      link: "#",
      image: "/project3.png",
    },
  ];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 25;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;

    setTilt({ x, y });
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-24 md:py-32 text-white"
    >
      <div className="max-w-5xl mx-auto space-y-16">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-green-400 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          PROJECTS
        </motion.h2>

        <div className="space-y-24 relative">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group cursor-pointer pb-6"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onMouseMove={handleMouseMove}
              style={{ perspective: "1200px" }}
            >
              {/* External Link */}
              <a
                href={project.link}
                target="_blank"
                className="absolute right-0 top-1/2 -translate-y-1/2 opacity-60 group-hover:opacity-100 transition z-50 hidden sm:block"
              >
                <ExternalLink size={26} />
              </a>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight flex items-center gap-3 z-20 relative">
                {project.title}
                <span className="text-gray-400 text-base sm:text-lg">
                  {project.id}
                </span>
              </h1>

              {/* Description */}
              <p className="mt-3 sm:mt-4 text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed z-20 relative">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 z-20 relative">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 sm:px-4 py-1.5 bg-white/10 rounded-full text-xs sm:text-sm border border-white/10 backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Underline */}
              <motion.div
                className="absolute left-0 bottom-0 h-[2px] bg-green-400 rounded-full z-10"
                initial={{ width: 0, opacity: 0 }}
                animate={
                  hovered === index
                    ? { width: "100%", opacity: 1 }
                    : { width: 0, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
              />

              {/* Hover Image (Desktop + Mobile) */}
              {hovered === index && (
                <>
                  {/* Desktop: Mouse-Follow Image */}
                  <motion.div
                    className="absolute hidden md:block z-20 pointer-events-none"
                    style={{
                      top: mousePos.y,
                      left: mousePos.x,
                      translate: "-50% -50%",
                    }}
                  >
                    <motion.img
                      src={project.image}
                      initial={{ opacity: 0 }}
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
                        w-[300px] md:w-[380px] lg:w-[430px]
                        h-[180px] md:h-[230px] lg:h-[260px]
                        rounded-xl object-cover border border-green-400/30 shadow-xl
                      "
                      style={{ transformStyle: "preserve-3d" }}
                    />
                  </motion.div>

                  {/* Mobile: Static Image */}
                  <motion.div
                    className="block md:hidden mt-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={project.image}
                      className="
                        w-full max-w-[350px] mx-auto 
                        h-[180px] rounded-xl object-cover border border-green-400/30 shadow-lg
                      "
                    />
                  </motion.div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
