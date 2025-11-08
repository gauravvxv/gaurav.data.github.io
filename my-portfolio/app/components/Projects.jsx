import React from "react";

const projects = [
  {
    title: "E-Commerce Sales Dashboard",
    desc: "Analyzed sales performance using Python, SQL, and Power BI to uncover revenue trends and customer behavior insights.",
    img: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600",
    github: "https://github.com/gauravvxv/ecommerce-dashboard",
  },
  {
    title: "Customer Churn Analysis",
    desc: "Predicted customer churn using logistic regression and visualized insights with Power BI for retention strategies.",
    img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?w=600",
    github: "https://github.com/gauravvxv/customer-churn-analysis",
  },
  {
    title: "Personal Finance Visualizer",
    desc: "Developed a full-stack app with Next.js, MongoDB, and Recharts to track transactions, categories, and budgets visually.",
    img: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600",
    github: "https://github.com/gauravvxv/personal-finance-visualizer",
  },
  {
    title: "Excel Data Automation",
    desc: "Automated Excel data cleaning and report generation with Python and Pandas to improve workflow efficiency.",
    img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=600",
    github: "https://github.com/gauravvxv/excel-automation",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-slate-900">Projects</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">
          A selection of my recent work showcasing skills in data analysis,
          visualization, and full-stack development.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-white border rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">
                  {p.title}
                </h3>
                <p className="text-slate-600 text-sm mt-2">{p.desc}</p>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
