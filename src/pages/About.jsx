import { Link } from 'react-router-dom'
import React from 'react'

const differentiators = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Schedule-Driven Execution',
    desc: 'We are relentlessly focused on keeping your project on schedule. Our team plans ahead and reacts fast to keep the critical path moving.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Clear Communication',
    desc: 'Proactive coordination with GC teams, developers, and owners. You always know where your project stands — no surprises.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Safety & Code Compliance',
    desc: 'Strict OSHA compliance, quality control protocols, and code adherence — every connection, every weld, every structure.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Structural Expertise',
    desc: 'Deep knowledge across structural steel design, fabrication, and erection — aligned with GC and developer needs at every project phase.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Long-Term Performance',
    desc: 'Systems engineered and built for lasting structural integrity — not just built to code, but built to endure.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Preconstruction Value Engineering',
    desc: 'Early-stage engagement to identify cost savings, constructability improvements, and design efficiencies — before they cost you.',
  },
]

const competencies = [
  'Structural steel design and engineering',
  'Steel fabrication and detailing',
  'Structural steel erection and installation',
  'Connection design and coordination',
  'Preconstruction planning and budgeting',
  'Value engineering and constructability review',
  'Field coordination with multi-trade teams',
  'Structural modifications and retrofits',
]

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565008887977-f98d91e71ac5?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-navy-950/80" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-subtitle mb-3">About Us</p>
          <h1 className="font-display font-800 uppercase text-white text-5xl md:text-6xl leading-tight mb-6">
            Structural Steel Done Right.<br />
            <span className="text-gold-400">Every Time.</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Titan Structural Group is built on a foundation of expertise, integrity, and an unwavering commitment to structural performance.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subtitle">Company Overview</p>
              <h2 className="font-display font-800 uppercase text-navy-900 text-4xl md:text-5xl leading-tight mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Titan Structural Group is a structural steel contractor specializing in design, fabrication, project management, and installation for commercial construction projects. We partner with general contractors, developers, and property owners to deliver structural systems that meet demanding schedules and perform with long-term reliability.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                We engage early in the project lifecycle to support budgeting, design coordination, and scheduling. Our team delivers efficient fabrication and precise installation to ensure structural integrity from day one.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our safety culture and quality commitment mean that every structure we build is not just code-compliant — it's engineered to perform for decades to come.
              </p>
              <Link to="/contact" className="btn-primary">Get in Touch</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/crane.jpg"
                alt="Construction crane"
                className="w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
                alt="Steel worker"
                className="w-full h-64 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80"
                alt="Building construction"
                className="w-full h-64 object-cover"
              />
              <img
                src="/preconstruct.png"
                alt="Steel structure"
                className="w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subtitle">What We Offer</p>
              <h2 className="font-display font-800 uppercase text-white text-4xl md:text-5xl leading-tight mb-8">
                Core Competencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {competencies.map((item) => (
                  <div key={item} className="flex items-start gap-3 py-3 border-b border-navy-800">
                    <div className="w-2 h-2 bg-gold-500 mt-1.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80"
                alt="Steel erection"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-gold-500 p-8 hidden lg:block">
                <div className="font-display font-800 text-5xl text-navy-950 leading-none">20+</div>
                <div className="text-navy-800 text-xs uppercase tracking-widest font-semibold mt-1">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subtitle">Why Choose Us</p>
            <h2 className="font-display font-800 uppercase text-navy-900 text-4xl md:text-5xl leading-tight">
              The Titan Difference
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 group hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-gold-500"
              >
                <div className="text-navy-800 mb-4 group-hover:text-gold-500 transition-colors duration-300">{item.icon}</div>
                <h3 className="font-display font-700 uppercase text-navy-900 text-lg tracking-wide mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1607472586893-edb74c84f0a0?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-navy-900/88" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-subtitle">Safety & Quality</p>
            <h2 className="font-display font-800 uppercase text-white text-4xl md:text-5xl leading-tight mb-6">
              Safety Isn't an Option. It's Our Standard.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Titan Structural Group prioritizes jobsite safety, regulatory compliance, and quality control to ensure every structure is built to perform safely and reliably. Our approach to safety is proactive, not reactive — built into our processes from preconstruction through final inspection.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Pre-Planning', icon: '📋' },
                { label: 'Fall Protection', icon: '🦺' },
                { label: 'Training', icon: '🎓' },
                { label: 'Safety Consultants', icon: '✅' },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 backdrop-blur-sm p-5 text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-white text-xs font-semibold uppercase tracking-widest">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80"
                alt="Project planning"
                className="w-full h-96 object-cover"
              />
            </div>
            <div>
              <p className="section-subtitle">Engagement Approach</p>
              <h2 className="font-display font-800 uppercase text-navy-900 text-4xl md:text-5xl leading-tight mb-6">
                Early Involvement. Better Outcomes.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We engage early in the project lifecycle to support budgeting, design coordination, and scheduling. This early involvement allows us to identify potential issues before they become costly problems and to optimize the structural system for both performance and budget.
              </p>
              <div className="space-y-4">
                {[
                  { phase: 'Preconstruction', desc: 'Budget planning, design coordination, and schedule development.' },
                  { phase: 'Design Phase', desc: 'Structural engineering input, value engineering, and constructability review.' },
                  { phase: 'Fabrication', desc: 'Precision shop fabrication with full quality control.' },
                  { phase: 'Installation', desc: 'Safe, efficient erection with full site coordination.' },
                ].map((phase) => (
                  <div key={phase.phase} className="flex gap-4 items-start">
                    <div className="w-1.5 h-1.5 bg-gold-500 mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-navy-900 text-sm">{phase.phase} — </span>
                      <span className="text-gray-600 text-sm">{phase.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="mt-8 btn-primary inline-block">Start a Conversation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold-500 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display font-800 uppercase text-navy-950 text-4xl md:text-5xl mb-4">
            Ready to Build With Titan?
          </h2>
          <p className="text-navy-800 mb-8 text-lg">
            Partner with us for structural steel solutions built on precision, safety, and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-navy-950 hover:bg-navy-800 text-white font-bold px-8 py-3 uppercase tracking-widest text-sm transition-colors duration-300">
              Request a Bid
            </Link>
            <Link to="/services" className="border-2 border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white font-bold px-8 py-3 uppercase tracking-widest text-sm transition-all duration-300">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
