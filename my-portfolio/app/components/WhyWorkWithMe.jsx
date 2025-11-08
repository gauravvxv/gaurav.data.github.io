import React from 'react'

const reasons = [
  {
    title: 'Always Learning',
    desc:
      'Committed to staying current with the latest data analysis tools and techniques through continuous education and practice.',
  },
  {
    title: 'Team Player',
    desc:
      'Open to sharing ideas and collaborating on projects where data drives smarter business decisions.',
  },
  {
    title: 'Results-Focused',
    desc:
      'Dedicated to turning insights into actions that create real, measurable impact for organizations.',
  },
]

export default function WhyWorkWithMe() {
  return (
    <section id='whyworkwithme' className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-slate-900">Why Work With Me</h2>
        <p className="mt-3 text-slate-600">People choose to work with me because I deliver practical results and collaborate well.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="p-6 border rounded-lg bg-gray-50 hover:shadow-md transition">
              <h4 className="font-medium text-slate-900">{r.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
