"use client";

import Slider from "react-slick";
import { FaReact, FaNodeJs, FaJsSquare } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiLaravel } from "react-icons/si";
import { DiPhp } from "react-icons/di";

const skills = [
  { name: "Next.js", icon: <SiNextdotjs size={50} /> },
  { name: "React", icon: <FaReact size={50} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={50} /> },
  { name: "JavaScript", icon: <FaJsSquare size={50} /> },
  { name: "PHP", icon: <DiPhp size={50} /> },
  { name: "Laravel", icon: <SiLaravel size={50} /> },
];

export default function SkillsIconsSlider() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    swipe: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } }, // xl
      { breakpoint: 1024, settings: { slidesToShow: 3 } }, // lg
      { breakpoint: 768, settings: { slidesToShow: 2 } },  // md
      { breakpoint: 480, settings: { slidesToShow: 1 } },  // sm
    ],
  };

  return (
    <section className="relative py-12">
      <div className="absolute inset-0  -z-10"></div>
      <div className="max-w-6xl mx-auto relative z-10 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-amber-50 text-center mb-8">My Skills</h2>
        <Slider {...settings}>
          {skills.map((skill) => (
            <div key={skill.name} className="flex justify-center px-2 sm:px-4">
              <div className="text-white hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
