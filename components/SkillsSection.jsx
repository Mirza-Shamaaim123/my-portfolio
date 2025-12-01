"use client";

import Slider from "react-slick";
import { FaReact, FaNodeJs, FaJsSquare } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { DiPhp } from "react-icons/di"; // PHP icon from Devicons
import { SiLaravel } from "react-icons/si";

const skills = [
    { name: "Next.js", icon: <SiNextdotjs size={60} /> },
    { name: "React", icon: <FaReact size={60} /> },
    { name: "TypeScript", icon: <SiTypescript size={60} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={60} /> },
    { name: "JavaScript", icon: <FaJsSquare size={60} /> },
    { name: "Node.js", icon: <FaNodeJs size={60} /> },
    { name: "PHP", icon: <DiPhp size={60} /> },
    { name: "Laravel", icon: <SiLaravel size={60} /> },
];

export default function SkillsIconsSlider() {
    const settings = {
        dots: false,
        arrows: false,       // remove arrows
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
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 640, settings: { slidesToShow: 2 } },
        ],
    };

    return (
        <section className="relative py-12">
            <div className="absolute inset-0 bg-black/30 -z-10"></div>
            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-4xl font-bold text-amber-50 text-center mb-8">My Skills</h2>
                <Slider {...settings}>
                    {skills.map((skill) => (
                        <div key={skill.name} className="flex justify-center px-4">
                            <div className="text-green-100 hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
