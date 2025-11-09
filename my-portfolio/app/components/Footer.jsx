import React from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-pink-200 via-fuchsia-200 to-indigo-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        
        {/* Left: Name & Copyright */}
        <div>
          <h3 className="text-lg font-semibold">© {new Date().getFullYear()} Gaurav Sharma</h3>
          <p className="text-sm text-slate-700">
            Built with using <span className="font-medium">Next.js</span> & <span className="font-medium">Tailwind CSS</span>.  
            All rights reserved.
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex justify-center gap-5 text-slate-800 text-2xl">
          <a
            href="https://github.com/gauravvxv"
            target="_blank"
            rel="noreferrer"
            className="hover:text-rose-600 transition-transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gauravxv"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-600 transition-transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://medium.com/@gauravxv0410"
            target="_blank"
            rel="noreferrer"
            className="hover:text-fuchsia-600 transition-transform hover:scale-110"
          >
            <FaMedium />
          </a>
        </div>

        {/* Right: License */}
        <div className="text-sm text-slate-700">
          Licensed under <span className="font-medium text-slate-900">MIT License</span>
        </div>
      </div>
    </footer>
  );
}
