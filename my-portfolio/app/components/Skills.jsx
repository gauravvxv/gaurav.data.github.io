'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaPython, FaDatabase, FaChartPie, FaBrain, FaUsers } from 'react-icons/fa'

const skillCategories = [
  {
    icon: <FaPython className="text-yellow-300 text-4xl mb-3" />,
    title: 'Programming',
    desc: 'Python (Pandas, NumPy)',
  },
  {
    icon: <FaDatabase className="text-green-300 text-4xl mb-3" />,
    title: 'Database & Data Handling',
    desc: 'SQL (HackerRank Golden Badge), Excel (Advanced, Pivot Tables)',
  },
  {
    icon: <FaChartPie className="text-pink-300 text-4xl mb-3" />,
    title: 'Data Visualization',
    desc: 'Power BI (DAX), Tableau, Matplotlib, Seaborn',
  },
  {
    icon: <FaBrain className="text-purple-300 text-4xl mb-3" />,
    title: 'Analytics & Statistics',
    desc: 'Descriptive & Inferential Statistics, Probability, KPI Analysis, Data Cleaning',
  },
  {
    icon: <FaUsers className="text-blue-300 text-4xl mb-3" />,
    title: 'Soft Skills',
    desc: 'Problem Solving, Analytical Thinking, Attention to Detail, Communication, Time Management',
  },
]

export default function CoreSkills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-r from-rose-500 via-red-500 to-pink-500 text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-semibold mb-10"
        >
          Core Skills
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skillCategories.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ delay: i * 0.2, duration: 0.8, ease: 'easeOut' }}
              className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {s.icon}
                <h4 className="font-semibold text-lg mb-2">{s.title}</h4>
                <p className="text-sm text-white/90">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Glow */}
        <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_60%)]"></div>
      </div>
    </section>
  )
}
