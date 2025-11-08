import React from 'react'

const steps = [
  { title: 'Explore', desc: 'Dive deep into datasets to understand structure and quality.' },
  { title: 'Clean', desc: 'Transform raw data into reliable, analysis-ready information.' },
  { title: 'Analyze', desc: 'Apply analytical techniques to uncover meaningful patterns.' },
  { title: 'Communicate', desc: 'Present insights clearly to drive informed decisions.' },
]

export default function Approach() {
  return (
    <section id='approach' className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-slate-900">My Approach to Data</h2>
        <p className="mt-3 text-slate-600">A simple, four-step approach I follow on every project.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="p-6 border rounded-lg bg-white shadow-sm text-center">
              <div className="text-lg font-medium text-slate-900">{s.title}</div>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
