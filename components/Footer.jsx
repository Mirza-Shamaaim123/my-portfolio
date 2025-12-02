"use client";

import React from "react";
import { Facebook, Instagram, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand + Description */}
        <div>
          <h2 className="text-2xl font-semibold text-white">Shamaaim</h2>
          <p className="mt-3 text-gray-400">
            Building modern websites with great UI/UX and powerful performance.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white"><Instagram size={20} /></a>
            <a href="https://github.com/Mirza-Shamaaim123" className="hover:text-white"><Github size={20} /></a>
            <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a className="hover:text-white" href="/">Home</a></li>
            <li><a className="hover:text-white" href="#projects">Projects</a></li>
            <li><a className="hover:text-white" href="#about">About Me</a></li>
            <li><a className="hover:text-white" href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: shamaaimmirza902@gmail.com</li>
            <li>Location: Pakistan</li>
            <li>Available for freelance & projects</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-green-700 mt-10 pt-5 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Shamaaim — All rights reserved.
      </div>
    </footer>
  );
}
