import { useState } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'

const allProjects = [
  {
    title: 'Downtown Commercial Tower',
    category: 'Multi-Story',
    location: 'Urban Core',
    size: '280,000 SF',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80',
    desc: 'Structural steel design and erection for a 22-story mixed-use commercial tower, including complex cantilevered transfer structures.',
  },
  {
    title: 'Logistics Distribution Hub',
    category: 'Industrial',
    location: 'Industrial Park',
    size: '450,000 SF',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    desc: 'Fast-track structural steel package for a large distribution center with long-span roof framing and dock-high loading infrastructure.',
  },
  {
    title: 'Mixed-Use Residential Block',
    category: 'Mixed-Use',
    location: 'Midtown',
    size: '130,000 SF',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    desc: 'Structural steel package for a mixed-use ground-floor retail and residential tower above, requiring complex podium transfer structures.',
  },
  {
    title: 'Corporate Campus Expansion',
    category: 'Commercial',
    location: 'Suburban Campus',
    size: '95,000 SF',
    img: '/preconstruct.png',
    desc: 'Four-building corporate campus expansion with interconnected skybridge structures and a central atrium steel feature.',
  },
  {
    title: 'Healthcare Facility Retrofit',
    category: 'Retrofit',
    location: 'Medical District',
    size: '62,000 SF',
    img: '/health.jpg',
    desc: 'Seismic retrofit and structural reinforcement of an occupied hospital building — completed in phased construction with zero disruption to operations.',
  },
  {
    title: 'Stadium & Arena Structure',
    category: 'Specialty',
    location: 'Sports District',
    size: '320,000 SF',
    img: '/stadium.jpg',
    desc: 'Long-span roof structure and bowl framing for a regional sports arena, including feature steel truss canopy elements.',
  },
  {
    title: 'Hotel Tower & Parking Structure',
    category: 'Multi-Story',
    location: 'City Center',
    size: '190,000 SF',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    desc: 'Full structural steel package for a 14-story hotel tower and adjacent 6-level parking structure with post-tensioned framing integration.',
  },
  {
    title: 'Warehouse & Cold Storage',
    category: 'Industrial',
    location: 'Port District',
    size: '215,000 SF',
    img: '/warehouse.jpg',
    desc: 'Structural steel erection for a temperature-controlled warehouse facility with heavy crane rail support structures throughout.',
  },
  {
    title: 'Historic Building Renovation',
    category: 'Retrofit',
    location: 'Arts District',
    size: '44,000 SF',
    img: '/historic.jpg',
    desc: 'Adaptive reuse of a century-old warehouse — structural steel reinforcement, new floor additions, and rooftop terrace framing.',
  },
]

const categories = ['All', 'Multi-Story', 'Industrial', 'Mixed-Use', 'Commercial', 'Retrofit', 'Specialty']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? allProjects
    : allProjects.filter((p) => p.category === active)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-navy-950/80" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-subtitle mb-3">Our Work</p>
          <h1 className="font-display font-800 uppercase text-white text-5xl md:text-6xl leading-tight mb-6">
            Project<br />
            <span className="text-gold-400">Portfolio</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            From high-rise towers to industrial facilities, our portfolio spans a wide range of structural steel projects — each delivered on time, on budget, and built to last.
          </p>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-navy-900 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { v: '500+', l: 'Projects Delivered' },
              { v: '50M+', l: 'SF Built' },
              { v: '20+', l: 'Years Active' },
              { v: '100%', l: 'Safety Record' },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display font-800 text-4xl text-gold-400 leading-none">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 mt-1 font-semibold">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-10 bg-white border-b border-gray-100 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-colors duration-200 ${
                  active === cat
                    ? 'bg-gold-500 text-navy-950'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((proj) => (
              <div
                key={proj.title}
                className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy-950/30 group-hover:bg-navy-950/10 transition-colors duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold-500 text-navy-950 text-xs font-bold uppercase tracking-widest px-3 py-1">
                      {proj.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-700 uppercase text-navy-900 text-xl tracking-wide mb-2">
                    {proj.title}
                  </h3>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {proj.location}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      {proj.size}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{proj.desc}</p>
                </div>
                <div className="h-0.5 w-0 group-hover:w-full bg-gold-500 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold-500 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display font-800 uppercase text-navy-950 text-4xl md:text-5xl mb-4">
            Your Project Is Next
          </h2>
          <p className="text-navy-800 mb-8 text-lg">
            Partner with Titan Structural Group for dependable structural steel solutions built for performance and longevity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-navy-950 hover:bg-navy-800 text-white font-bold px-8 py-3 uppercase tracking-widest text-sm transition-colors duration-300">
              Request a Bid
            </Link>
            <Link to="/about" className="border-2 border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white font-bold px-8 py-3 uppercase tracking-widest text-sm transition-all duration-300">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
