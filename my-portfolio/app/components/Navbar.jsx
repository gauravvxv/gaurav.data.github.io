"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // install with: npm install lucide-react

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Why Work With Me", href: "#whyworkwithme" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-rose-500 via-red-500 to-pink-500 bg-opacity-80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Left: Name / Logo */}
        <a
          href="#home"
          className="text-xl font-semibold text-white hover:text-rose-100 transition"
        >
          GauraV.
        </a>

        {/* Center: Desktop Menu */}
        <ul className="hidden lg:flex text-sm items-center gap-6 text-white font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-rose-100 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Resume Button */}
        <div className="hidden md:block">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-rose-600 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white focus:outline-none"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="lg:hidden bg-gradient-to-r from-rose-500 via-red-500 to-pink-500 text-white border-t border-white/20 shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-3 font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block hover:text-rose-100 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-rose-600 rounded-lg hover:bg-rose-50 transition"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
