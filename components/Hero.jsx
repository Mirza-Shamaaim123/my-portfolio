'use client';

import React from 'react';

// import { Inter } from 'next/font/google';
import { StarsBackground } from './ui/galaxy';

import CardNav from './CardNav';


// const inter = Inter({ subsets: ['latin'], weight: '400' });


const items = [
  {
    label: "About",
    bgColor: "#0D0716",
    textColor: "#fff",
    links: [
      { label: "Company", href: "#company", ariaLabel: "About Company" },
      { label: "Careers", href: "#careers", ariaLabel: "About Careers" }
    ]
  },
  {
    label: "Projects",
    bgColor: "#170D27",
    textColor: "#fff",
    links: [
      { label: "Featured", href: "#featured", ariaLabel: "Featured Projects" },
      { label: "Case Studies", href: "#case", ariaLabel: "Project Case Studies" }
    ]
  },
];


export default function HomeHero() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">

      {/* Animated Stars Background */}
      <StarsBackground
        className="absolute inset-0 z-0"
        starColor="#fff"
        speed={50}
        factor={0.05}
      />

      {/* Navbar */}
      <CardNav
        logo={<span className="font-bold text-white text-xl">LOGO</span>} // ✅ Text logo
        logoAlt=" Logo"
        items={items}   // ✅ Yahan items pass kar rahe hain
        baseColor="transparent"       // 🔹 black background
        menuColor="#fff"       // 🔹 hamburger/menu icon color
        buttonBgColor="#111"   // button background
        buttonTextColor="#fff"
        ease="power3.out"
      />

      {/* Hero Content */}
      <section
        className="relative w-full h-full flex flex-col justify-center items-center text-center px-6 sm:px-10 md:px-20 lg:px-40 z-10 "
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-amber-50">
          Hello, I'm <span className="text-green-300">Shamaaim</span>
        </h1>

        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 text-amber-50">
          Web Developer | React & Next.js Enthusiast
        </h2>

        <p className="text-base sm:text-lg md:text-xl lg:text-xl max-w-md md:max-w-xl text-amber-100/80">
          I build responsive and modern websites that are fast, clean, and visually appealing.
          Explore my projects and let's create something amazing together!
        </p>
      </section>
    </div>
  );
}
