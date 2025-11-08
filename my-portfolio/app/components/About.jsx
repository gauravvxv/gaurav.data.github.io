import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6 text-slate-900">About Me</h2>
        <p className="text-slate-700 leading-relaxed max-w-3xl">
          I'm a data analyst passionate about uncovering patterns and trends that
          drive smarter decisions. My focus lies in data cleaning, analysis, and
          visualization to tell meaningful stories with data.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium text-slate-900">Location</h4>
            <p className="text-slate-600">Bengaluru, Karnataka, India</p>
          </div>
          <div>
            <h4 className="font-medium text-slate-900">Contact</h4>
            <p className="text-slate-600">9928425027</p>
            <p className="text-slate-600">gauravxv0410@gmail.com</p>
          </div>
          <div>
            <h4 className="font-medium text-slate-900">Links</h4>
            <a
              href="https://github.com/gauravvxv"
              className="text-indigo-600 underline block"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gauravxv"
              className="text-indigo-600 underline block"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
