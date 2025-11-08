import React from 'react'

const offerings = [
  {
    title: 'Data Cleaning',
    desc: 'Transform messy datasets into clean, structured information ready for analysis.',
  },
  {
    title: 'Pattern Recognition',
    desc: 'Identify trends and patterns that reveal actionable business insights.',
  },
  {
    title: 'Report Building',
    desc: 'Create clear, comprehensive reports that communicate findings effectively.',
  },
  {
    title: 'Problem Solving',
    desc: 'Apply analytical thinking to turn complex challenges into practical solutions.',
  },
]

export default function Offerings() {
  return (
    <section id='offerings' className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-slate-900">What I Bring to the Table</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">
          I combine technical skills and business context to deliver insights and solutions that matter.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((o) => (
            <div
              key={o.title}
              className="p-6 border rounded-lg bg-gray-50 hover:shadow-md transition"
            >
              <h3 className="font-medium text-slate-900">{o.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
