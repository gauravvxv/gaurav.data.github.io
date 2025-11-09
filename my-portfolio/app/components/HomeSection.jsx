'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function HomeSection() {
  return (
    <section
      id="home"
      className="py-48 text-center bg-gradient-to-r from-rose-500 via-red-500 to-pink-500 text-white overflow-hidden"
    >
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-black"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
      >
        Gaurav Sharma
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-4 text-lg md:text-xl text-white max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
      >
        Data Analyst | Skilled in Python, SQL, Excel & Power BI |
        Passionate about turning raw data into actionable insights.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-8 flex justify-center gap-4 flex-wrap"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
      >
        {/* Contact Me */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-white via-rose-100 to-pink-200 text-rose-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Contact Me
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/gauravvxv"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-white via-rose-100 to-pink-200 text-rose-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          GitHub
        </motion.a>

        {/* Resume */}
        <motion.a
          href="/Gaurav Sharma Resume.pdf"
          download="Gaurav Sharma Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-white text-rose-600 font-semibold rounded-lg shadow-lg hover:bg-rose-50 hover:shadow-xl transition-all duration-300"
        >
          Resume
        </motion.a>
      </motion.div>
    </section>
  )
}
