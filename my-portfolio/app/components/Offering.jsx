'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaBroom, FaChartLine, FaFileAlt, FaLightbulb } from 'react-icons/fa'

const offerings = [
  {
    icon: <FaBroom className="text-3xl text-rose-600" />,
    title: 'Data Cleaning',
    desc: 'Transform messy datasets into clean, structured information ready for analysis.',
  },
  {
    icon: <FaChartLine className="text-3xl text-rose-600" />,
    title: 'Pattern Recognition',
    desc: 'Identify trends and patterns that reveal actionable business insights.',
  },
  {
    icon: <FaFileAlt className="text-3xl text-rose-600" />,
    title: 'Report Building',
    desc: 'Create clear, comprehensive reports that communicate findings effectively.',
  },
  {
    icon: <FaLightbulb className="text-3xl text-rose-600" />,
    title: 'Problem Solving',
    desc: 'Apply analytical thinking to turn complex challenges into practical solutions.',
  },
]

export default function Offerings() {
  return (
    <section
      id="offerings"
      className="py-24 bg-gradient-to-br from-pink-200 via-fuchsia-200 to-indigo-200 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-semibold text-slate-900"
        >
          What I Bring to the Table
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-3 text-slate-700 max-w-2xl mx-auto"
        >
          I combine technical expertise with business understanding to deliver insights that drive smarter decisions.
        </motion.p>

        {/* Offerings Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ delay: i * 0.2, duration: 0.8, ease: 'easeOut' }}
              className="bg-white/30 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition-all border border-white/40 p-8 hover:scale-[1.03] hover:bg-white/50"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {o.icon}
                <h3 className="text-lg font-semibold text-slate-900">{o.title}</h3>
                <p className="text-sm text-slate-700">{o.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
