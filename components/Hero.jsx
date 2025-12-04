'use client';

import React from 'react';
import { FloatingNav } from './ui/floating-navbar';
import ContactModal from './ContactModal';
// import CardNav from './CardNav';

const items = [
  {
    label: "About",
    href: "#about",
    ariaLabel: "About Section",
    bgColor: "#000",
    textColor: "#fff",
    links: [
      { label: "About", href: "#about", ariaLabel: "About Section" },
      { label: "Careers", href: "#careers", ariaLabel: "About Careers" }
    ]
  },
  {
    label: "Projects",
    bgColor: "#000",
    textColor: "#fff",
    links: [
      { label: "Featured", href: "#featured", ariaLabel: "Featured Projects" },
      { label: "Case Studies", href: "#case", ariaLabel: "Project Case Studies" }
    ]
  },
  {
    label: "Contact",
    bgColor: "#000",
    textColor: "#fff",
    links: [
      { label: "Contact", href: "/contact", ariaLabel: "Contact Section" },
      { label: "Case Studies", href: "#case", ariaLabel: "Project Case Studies" }
    ]
  }
];

export default function HomeHero() {
  const [isContactOpen, setIsContactOpen] = React.useState(false);
  return (
    
    <div className="relative w-full min-h-screen overflow-hidden">

      {/* Navbar */}      
      <FloatingNav navItems={[
        { name: "Home", link: "/" },
        { name: "About", link: "#about" },
        { name: "Projects", link: "#projects" },
        { name: "Contact", onClick: () => setIsContactOpen(true) },
      ]} />


      {/* Hero Content */}
      <section
        className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-20 lg:px-40 z-10"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-amber-50 leading-tight">
          Hello, I'm <span className="text-green-700">Shamaaim</span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 text-amber-50">
          PHP & Laravel Developer
        </h2>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-sm sm:max-w-md md:max-w-xl text-amber-100/80 mt-2">
          I build scalable and secure web applications using PHP and Laravel.
          I create clean backend architectures, RESTful APIs, and integrate dynamic frontend solutions
          to deliver seamless user experiences. Let's collaborate and build something impactful!
        </p>
      </section>
      <ContactModal isOpen={isContactOpen} setIsOpen={setIsContactOpen} />


    </div>
  );
}
