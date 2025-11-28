'use client';

import React from 'react';
import CardNav from './CardNav';

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
  }
];

export default function HomeHero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">

      {/* Navbar */}
      <CardNav
        logo={<span className="font-bold text-white text-xl">LOGO</span>}
        logoAlt="Logo"
        items={items}
        baseColor="light-black"
        menuColor="#fff"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />

      {/* Hero Content */}
      <section
        className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-20 lg:px-40 z-10"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-amber-50 leading-tight">
          Hello, I'm <span className="text-green-300">Shamaaim</span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 text-amber-50">
          Web Developer | React & Next.js Enthusiast
        </h2>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-sm sm:max-w-md md:max-w-xl text-amber-100/80 mt-2">
          I build responsive and modern websites that are fast, clean, and visually appealing.
          Explore my projects and let's create something amazing together!
        </p>
      </section>

    </div>
  );
}
