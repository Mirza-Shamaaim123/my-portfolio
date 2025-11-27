import React from 'react';

import Navbar from "@/components/ui/Navbar";

import Beams from "@/components/Beams";


import { Inter, JetBrains_Mono } from 'next/font/google';

import AnimatedText from "@/components/AnimatedText";

import Galaxy from './Galaxy';


const inter = Inter({ subsets: ['latin'], weight: '400' });
const jetBrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '700'] });

export default function HomeHero() {
    return (
        <div className="relative w-full min-h-screen">

            {/* Background - always at bottom */}
            <div className="absolute inset-0 -z-10">
                {/* <Beams /> */}
                <Galaxy />
            </div>

            {/* Navbar */}
            <Navbar />

            {/* Hero Content - centered */}
            <section
                className={`relative w-full min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-10 md:px-20 lg:px-40 z-10 ${inter.className}`}
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-amber-50">
                    Hello, I'm <span className="text-green-500">Shamaaim</span>
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
