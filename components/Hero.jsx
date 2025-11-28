'use client';

import React from 'react';
import Navbar from '@/components/ui/Navbar';
// import { Inter } from 'next/font/google';
import { StarsBackground } from './ui/galaxy';

// const inter = Inter({ subsets: ['latin'], weight: '400' });

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
      <Navbar />

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
