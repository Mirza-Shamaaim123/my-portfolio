"use client";
import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-amber-50 rounded-2xl absolute left-1/2 -translate-x-1/2 w-full max-w-[1200px] z-50 px-6">
      {/* Main Container */}
      <div className="flex items-center justify-between py-6">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold">LOGO</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 list-none cursor-pointer text-lg">
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Resume</a></li>
          <li><a href="">Work</a></li>
          <li><a href="">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 bg-black/40 backdrop-blur-lg p-6 rounded-xl text-lg">
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Resume</a></li>
          <li><a href="">Work</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
