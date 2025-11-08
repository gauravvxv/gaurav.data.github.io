import React from 'react'

const certs = [
  {
    title: 'SQL Intermediate',
    desc: 'Advanced database querying and management certification.',
  },
  {
    title: 'SQL Basic',
    desc: 'Foundational SQL skills for data extraction and analysis.',
  },
  {
    title: 'JavaScript Certificate',
    desc: 'Programming fundamentals for web development and automation.',
  },
  {
    title: 'Web Development Bootcamp',
    desc: 'The Complete 2023 Web Development Bootcamp certification.',
  },
  {
    title: 'Assessment Assistant',
    desc: 'Professional assessment and evaluation certification.',
  },
]

export default function Certifications() {
  return (
    <section id='certifications' className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-slate-900">Professional Certifications</h2>
        <p className="mt-3 text-slate-600">Relevant certifications that demonstrate my skills and learning journey.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {certs.map((c) => (
            <div key={c.title} className="p-4 border rounded-lg bg-gray-50 text-sm">
              <div className="font-medium text-slate-900">{c.title}</div>
              <div className="mt-1 text-slate-600">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
