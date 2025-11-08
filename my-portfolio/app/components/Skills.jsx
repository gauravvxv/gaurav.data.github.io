import React from "react";

const skills = [
  {
    title: "SQL",
    desc: "Database querying and management for extracting meaningful insights.",
  },
  {
    title: "Python",
    desc: "Data analysis and automation using powerful libraries like Pandas & NumPy.",
  },
  {
    title: "Excel",
    desc: "Advanced spreadsheet analysis, pivot tables, and data visualization.",
  },
  {
    title: "Power BI",
    desc: "Creating interactive dashboards and business intelligence reports.",
  },
];

export default function CoreSkills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-slate-900">
          Core Skills
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((s) => (
            <div
              key={s.title}
              className="p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-gray-50"
            >
              <h4 className="font-semibold text-slate-900">{s.title}</h4>
              <p className="text-slate-600 mt-2 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
