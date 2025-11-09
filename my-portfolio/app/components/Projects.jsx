'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: "Customer Shopping Behavior Analysis",
    desc: "Analyzed 3,900+ transactions to uncover customer spending patterns, product preferences, and behavioral segments for data-driven business decisions.",
    tools: ["Python", "Pandas", "SQL", "Power BI", "Statistics", "Gamma AI"],
    img: '/Images/project-1.png',
    github: "https://github.com/gauravvxv/Customer-Shopping-Behavior",
  },
  {
    title: "Zepto Inventory Analysis",
    desc: "Analyzed Zepto’s inventory data to identify best-value products, category-wise revenue, discount trends, and price efficiency patterns.",
    tools: ["PostgreSQL", "Data Cleaning", "EDA" ,"Power BI", "DAX"],
    img: "/Images/project-2.png",
    github: "https://github.com/gauravvxv/Zepto",
  },
  {
    title: "E-Shop Performance Dashboard",
    desc: "Developed a Power BI dashboard powered by PostgreSQL to uncover insights into sales performance, customer behavior, and product profitability.",
    tools: ["PostgreSQL","Data Cleaning" ,"EDA","Data Visualization" , "Power BI"],
    img: "/Images/project-3.png",
    github: "https://github.com/gauravvxv/E-Shop-performance-dashboard",
  },
  {
    title: "Airbnb NYC 2019 Dashboard",
    desc: "Built an Excel dashboard with pivot tables and charts to analyze Airbnb data, revealing pricing, availability, and guest behavior insights across NYC neighborhoods.",
    tools: ["Excel (Pivot Tables, Charts, Slicers)", "Data Cleaning", "Descriptive Analysis", "Data Visualization"],
    img: "/Images/project-4.png",
    github: "https://github.com/gauravvxv/Airbnb",
  },
  {
    title: "Sales Insight Dashboard",
    desc: "Created a sales analysis dashboard to identify key performance trends, improve business insights, and enhance strategic decisions.",
    tools: ["Python","Pandas","SQLalchemy","PostgreSQL","Power BI"],
    img: "/Images/project-5.png",
    github: "https://github.com/gauravvxv/Sales-Dashboard",
  },
  {
    title: "Netflix Users Data Analysis",
    desc: "This project explores and visualizes Netflix user data to uncover insights into viewer behavior, subscription preferences, and content engagement trends.",
    tools: ["Python", "Numpy", "Pandas","Matplotlib","Seaborn",'Google Colab'],
    img: "/Images/project-6.png",
    github: "https://github.com/gauravvxv/Netflix-Users-Database",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-pink-200 via-fuchsia-200 to-indigo-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-semibold text-slate-900"
        >
          Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-3 text-slate-700 max-w-2xl mx-auto text-sm md:text-base"
        >
          A showcase of my data analysis projects built using Python, SQL, Excel, and Power BI transforming raw data into actionable insights.
        </motion.p>

        {/* Projects Grid */}
        <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: 'easeOut' }}
              className="bg-white/40 backdrop-blur-lg rounded-xl shadow-md hover:shadow-2xl transition-all overflow-hidden border border-white/40 hover:scale-[1.03]"
            >
              <div className="relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-44 object-cover rounded-t-xl"
                />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-slate-900 line-clamp-2">
                  {p.title}
                </h3>
                <p className="text-slate-700 text-xs mt-2 leading-relaxed line-clamp-3">
                  {p.desc}
                </p>

                {/* Tools Used */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {p.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 text-[11px] bg-white/80 text-rose-700 font-medium rounded-full border border-rose-200 shadow-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 bg-white text-rose-600 text-xs font-semibold rounded-lg shadow hover:bg-rose-50 transition-all duration-300"
                >
                  <FaGithub className="text-sm text-rose-600" />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
