'use client'

import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    date: "May 2021 - May 2023",
    title: "Bachelor of Commerce",
    org: "Pandit Deendayal Upadhyaya Shekhawati University",
    desc: "Built foundational business and analytical knowledge.",
  },
  {
    date: "Feb 2023 - Mar 2025",
    title: "Full Stack Development",
    org: "Masai School",
    desc: "Gained technical expertise in web development and programming.",
  },
  {
    date: "Current",
    title: "Data Analytics Training",
    org: "AlmaBetter",
    desc: "Sharpening data analysis and visualization skills with real-world projects.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-gradient-to-r from-rose-500 via-red-500 to-pink-500 text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16">
          Education & Learning Journey
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/50"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {education.map((edu, i) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center md:items-start ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Connector Dot */}
                <div className="w-6 h-6 bg-white border-4 border-rose-600 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>

                {/* Card */}
                <div
                  className={`w-full md:w-5/12 bg-white/20 backdrop-blur-md text-left rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 ${
                    i % 2 === 0
                      ? "md:mr-auto md:text-right"
                      : "md:ml-auto md:text-left"
                  }`}
                >
                  <h4 className="text-xl font-semibold text-white">
                    {edu.title}
                  </h4>
                  <p className="text-sm text-white/80">{edu.org}</p>
                  <p className="mt-2 text-sm text-white/90">{edu.desc}</p>
                  <p className="text-xs mt-2 text-white/70">{edu.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
