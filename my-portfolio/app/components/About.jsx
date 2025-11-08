'use client'

import React from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import Image from "next/image"
import profile from '../../public/Images/portfolio-image.png'

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-pink-200 via-fuchsia-200 to-indigo-200 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-12">
        
        {/* LEFT SIDE — Text Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-slate-900">About Me</h2>
          <p className="text-slate-700 leading-relaxed max-w-3xl">
            I’m a data analyst with a passion for numbers, patterns, and turning raw data into meaningful insights that drive smarter decisions.  
            My toolkit includes <span className="font-medium text-slate-900">SQL, Python, Power BI, and Excel</span> — tools I use to clean data, build dashboards, and translate complex information into simple, actionable outcomes.
      
            <br /><br />
            I’m always open to learning, collaborating, and contributing to projects where data can make a difference.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-start gap-6">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.4 }}
    transition={{ delay: 0.2, duration: 0.7 }}
    className="flex-1 min-w-[250px] bg-white/40 backdrop-blur-sm rounded-xl p-6 shadow hover:shadow-md transition"
  >
    <h4 className="font-medium text-slate-900">Location</h4>
    <p className="text-slate-600">Bengaluru, Karnataka, India</p>
  </motion.div>


<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.4 }}
  transition={{ delay: 0.6, duration: 0.7 }}
  className="flex-1 min-w-[250px] bg-white/40 backdrop-blur-sm rounded-xl p-6 shadow hover:shadow-lg transition"
>
  <h4 className="font-medium text-slate-900 mb-3">Links</h4>

  <div className="flex items-center gap-6 text-3xl">
    <a
      href="https://github.com/gauravvxv"
      target="_blank"
      rel="noreferrer"
      className="hover:text-indigo-900 transition-transform transform hover:scale-110"
    >
      <FaGithub />
    </a>

    <a
      href="https://www.linkedin.com/in/gauravxv"
      target="_blank"
      rel="noreferrer"
      className="hover:text-indigo-900 transition-transform transform hover:scale-110"
    >
      <FaLinkedin />
    </a>

    <a
      href="https://medium.com/@gauravxv0410"
      target="_blank"
      rel="noreferrer"
      className="hover:text-indigo-900 transition-transform transform hover:scale-110"
    >
      <FaMedium />
    </a>
  </div>
</motion.div>
</div>


                 </motion.div>

        {/* RIGHT SIDE — Profile Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg ring-4 ring-white/50">
            <Image
              src=""
              alt="Gaurav Sharma"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
