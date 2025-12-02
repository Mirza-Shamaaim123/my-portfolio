"use client";

import React from "react";
import { Facebook, Instagram, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        
        {/* Brand + Description */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-white">Shamaaim</h2>
          <p className="mt-3 text-gray-400 max-w-sm mx-auto md:mx-0">
            Building modern websites with great UI/UX and powerful performance.
          </p>

          <div className="flex gap-5 mt-5 justify-center md:justify-start">
            <a href="#" className="hover:text-white"><Facebook size={22} /></a>
            <a href="#" className="hover:text-white"><Instagram size={22} /></a>
            <a href="https://github.com/Mirza-Shamaaim123" className="hover:text-white"><Github size={22} /></a>
            <a href="#" className="hover:text-white"><Linkedin size={22} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a className="hover:text-white" href="/">Home</a></li>
            <li><a className="hover:text-white" href="#projects">Projects</a></li>
            <li><a className="hover:text-white" href="#about">About Me</a></li>
            <li><a className="hover:text-white" href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: shamaaimmirza902@gmail.com</li>
            <li>Location: Pakistan</li>
            <li>Available for freelance & projects</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700 mt-12 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Shamaaim — All rights reserved.
      </div>
    </footer>
  );
}
