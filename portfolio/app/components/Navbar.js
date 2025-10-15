'use client'

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleresume = () => {
    window.open(
      "https://drive.google.com/file/d/1K_E_Che5KBduqgsZBifmblJuUoy90pmA/view?usp=sharing"
    );
  };

  return (
    <nav className="bg-orange-400 border-b border-orange-500 fixed w-full z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">

        {/* Logo */}
        <a href="#" className="text-2xl font-semibold text-white">
          Gaurav<span className="text-orange-700">.</span>
        </a>

        {/* Desktop Menu Links */}
        <ul className="hidden md:flex flex-row space-x-6 font-medium mx-auto">
          <li><a href="#" className="text-white hover:bg-orange-500 px-3 py-2 rounded transition">Home</a></li>
          <li><a href="#" className="text-white hover:bg-orange-500 px-3 py-2 rounded transition">About</a></li>
          <li><a href="#" className="text-white hover:bg-orange-500 px-3 py-2 rounded transition">Skills</a></li>
          <li><a href="#" className="text-white hover:bg-orange-500 px-3 py-2 rounded transition">Projects</a></li>
          <li><a href="#" className="text-white hover:bg-orange-500 px-3 py-2 rounded transition">Github</a></li>
          <li><a href="#" className="text-white hover:bg-orange-500 px-3 py-2 rounded transition">Contact</a></li>
        </ul>

        {/* Resume Button */}
        <div className="hidden md:flex">
          <button
            onClick={handleresume}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-700 cursor-pointer transition"
          >
            Resume
          </button>
        </div>

        {/* Hamburger for Mobile */}
        <button
          onClick={() => setMenuVisible(!menuVisible)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 p-2 text-white rounded-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600"
        >
          <GiHamburgerMenu className="w-6 h-6"/>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuVisible && (
        <div className="md:hidden bg-orange-400 w-full px-4 py-4 flex flex-col space-y-2 items-center">
          <a href="#" className="text-white px-3 py-2 rounded hover:bg-orange-500">Home</a>
          <a href="#" className="text-white px-3 py-2 rounded hover:bg-orange-500">About</a>
          <a href="#" className="text-white px-3 py-2 rounded hover:bg-orange-500">Skills</a>
          <a href="#" className="text-white px-3 py-2 rounded hover:bg-orange-500">Projects</a>
          <a href="#" className="text-white px-3 py-2 rounded hover:bg-orange-500">Github</a>
          <a href="#" className="text-white px-3 py-2 rounded hover:bg-orange-500">Contact</a>
          <button
            onClick={handleresume}
            className="px-4 py-2 bg-white text-orange-500 rounded-lg hover:bg-gray-100 transition mt-2"
          >
            Resume
          </button>
        </div>
      )}
    </nav>
  );
};
