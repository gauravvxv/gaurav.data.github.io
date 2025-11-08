import React from 'react'

export default function Expertise() {
  return (
    <section id='expertise' className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-slate-900">Technical Expertise</h3>
          <p className="mt-4 text-slate-700">
            Data Analysis
          </p>
          <ul className="mt-3 text-slate-600 list-disc list-inside space-y-1 text-sm">
            <li>SQL for database querying</li>
            <li>Python for data manipulation</li>
            <li>Excel for spreadsheet analysis</li>
            <li>Power BI for visualization</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-slate-900">Analytical Skills</h3>
          <p className="mt-4 text-slate-700">
            Methods and soft skills I use to turn raw data into business value.
          </p>
          <ul className="mt-3 text-slate-600 list-disc list-inside space-y-1 text-sm">
            <li>Statistical analysis</li>
            <li>Data cleaning and preparation</li>
            <li>Pattern identification</li>
            <li>Business intelligence reporting</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
