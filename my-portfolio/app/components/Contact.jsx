'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaPaperPlane, FaGithub } from 'react-icons/fa'

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-r from-rose-500 via-red-500 to-pink-500 text-white overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-semibold"
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-white/90 max-w-2xl mx-auto"
        >
          Excited to collaborate on data-driven projects or discuss analytics opportunities?  
          Let’s connect and turn insights into impact.
        </motion.p>

        {/* Contact Details */}
        <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-rose-200/30 transition-all duration-300"
          >
            <FaEnvelope className="text-3xl text-white mx-auto mb-3" />
            <h4 className="font-semibold text-lg">Email</h4>
            <a
              href="mailto:gauravxv0410@gmail.com"
              className="block mt-2 text-white/90 underline hover:text-white"
            >
              gauravxv0410@gmail.com
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-rose-200/30 transition-all duration-300"
          >
            <FaPhoneAlt className="text-3xl text-white mx-auto mb-3" />
            <h4 className="font-semibold text-lg">Phone</h4>
            <p className="mt-2 text-white/90">9928425027</p>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-rose-200/30 transition-all duration-300"
          >
            <FaLinkedin className="text-3xl text-white mx-auto mb-3" />
            <h4 className="font-semibold text-lg">LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/gauravxv"
              target="_blank"
              rel="noreferrer"
              className="block mt-2 text-white/90 underline hover:text-white"
            >
              linkedin.com/in/gauravxv
            </a>
          </motion.div>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex justify-center gap-5 flex-wrap">
          {/* Send Message Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:gauravxv0410@gmail.com"
            className="flex items-center gap-2 px-8 py-3 bg-white text-rose-600 rounded-lg font-semibold shadow-lg hover:bg-rose-50 transition-all duration-300"
          >
            <FaPaperPlane />
            Send Message
          </motion.a>

          {/* Follow on GitHub Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://github.com/gauravvxv"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
          >
            <FaGithub className="text-lg" />
            Follow on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  )
}
