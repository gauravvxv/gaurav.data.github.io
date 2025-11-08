import React from "react";

const education = [
  {
    date: "May 2021 - May 2023",
    title: "Bachelor of Commerce",
    org: "Pandit Deendayal Upadhyaya Shekhawati University",
    desc: "Built foundational business and analytical knowledge.",
  },
  {
    date: "Feb 2023 - Mar 2024",
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
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-slate-900">
          Education & Learning Journey
        </h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.title}
              className="p-6 bg-white rounded-lg shadow border hover:shadow-md transition"
            >
              <h4 className="text-xl font-medium text-slate-900">{edu.title}</h4>
              <p className="text-sm text-slate-600">{edu.org}</p>
              <p className="text-slate-700 mt-2 text-sm">{edu.desc}</p>
              <p className="text-xs text-slate-400 mt-1">{edu.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
