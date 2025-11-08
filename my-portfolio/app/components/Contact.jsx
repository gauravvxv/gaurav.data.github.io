import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-slate-900">Let's Connect</h2>
        <p className="mt-4 text-slate-600">
          Ready to collaborate on data-driven projects or discuss opportunities? I'm always excited to connect with fellow data
          enthusiasts and explore how analytics can solve real-world challenges.
        </p>

        <div className="mt-8 space-y-4 text-sm">
          <div>
            <strong>Email</strong>
            <div className="mt-1">
              <a href="mailto:gauravxv0410@gmail.com" className="text-primary underline">
                gauravxv0410@gmail.com
              </a>
            </div>
          </div>

          <div>
            <strong>Phone</strong>
            <div className="mt-1">9928425027</div>
          </div>

          <div>
            <strong>LinkedIn</strong>
            <div className="mt-1">
              <a
                href="https://www.linkedin.com/in/gauravxv"
                className="text-primary underline"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/gauravxv
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="mailto:gauravxv0410@gmail.com"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:opacity-95 transition"
          >
            Send Message
          </a>
          <a
            href="https://gauravvxv.github.io/"
            className="px-6 py-3 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition"
          >
            View My Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
