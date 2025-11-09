'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaBrain, FaUsers, FaChartLine, FaHandshake, FaLightbulb } from 'react-icons/fa'

const reasons = [
  {
    icon: <FaBrain className="text-3xl text-rose-600" />,
    title: 'Always Learning',
    desc:
      'Continuously expanding my knowledge in data analytics, statistics, and visualization tools to stay ahead in a rapidly evolving field.',
  },
  {
    icon: <FaUsers className="text-3xl text-rose-600" />,
    title: 'Collaborative Mindset',
    desc:
      'I believe the best insights come from teamwork — I thrive in collaborative environments where diverse perspectives spark innovation.',
  },
  {
    icon: <FaChartLine className="text-3xl text-rose-600" />,
    title: 'Results-Oriented Approach',
    desc:
      'Focused on transforming data into actionable insights that drive performance, efficiency, and measurable business impact.',
  },
  {
    icon: <FaLightbulb className="text-3xl text-rose-600" />,
    title: 'Analytical Problem Solver',
    desc:
      'Passionate about solving complex challenges by identifying patterns, testing hypotheses, and presenting clear data-driven recommendations.',
  },
  {
    icon: <FaHandshake className="text-3xl text-rose-600" />,
    title: 'Professional Integrity',
    desc:
      'I value reliability, transparency, and communication — ensuring every project is handled with consistency and accountability.',
  },
]

export default function WhyWorkWithMe() {
  return (
    <section
      id="whyworkwithme"
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
          Why Work With Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-3 text-slate-700 max-w-3xl mx-auto"
        >
          I bring a balance of technical expertise, business understanding, and a growth mindset turning raw data into meaningful insights that inspire smarter decisions.
        </motion.p>

        {/* Reasons Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ delay: i * 0.2, duration: 0.8, ease: 'easeOut' }}
              className="bg-white/30 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition-all border border-white/40 p-8 hover:scale-[1.03]"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {r.icon}
                <h4 className="text-lg font-semibold text-slate-900">{r.title}</h4>
                <p className="text-sm text-slate-700">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
