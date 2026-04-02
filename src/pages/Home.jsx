import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import React from 'react'

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '20+', label: 'Years of Experience' },
  { value: '100%', label: 'Safety Compliance' },
  { value: '50+', label: 'Expert Team Members' },
]

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Structural Design & Engineering',
    desc: 'Full structural steel design and engineering services with precision detailing, connection design, and constructability review from concept to permit.',
    img: '/design.jpg',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Steel Fabrication & Detailing',
    desc: 'Precise fabrication and shop detailing that maximizes quality and minimizes field rework — keeping your project on schedule and within budget.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Steel Erection & Installation',
    desc: 'Safe, efficient structural steel erection by experienced crews — coordinated with your jobsite schedule to ensure seamless multi-trade integration.',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Preconstruction & Value Engineering',
    desc: 'Early engagement, budget planning, and value engineering to identify cost savings and constructability improvements before breaking ground.',
    img: '/preconstruct.png',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Structural Modifications & Retrofits',
    desc: 'Expert structural modifications, reinforcements, and retrofits for existing buildings — delivering safe, code-compliant solutions for renovation projects.',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Project Management & Coordination',
    desc: 'Dedicated project management with clear communication, proactive scheduling, and full coordination with GC and multi-trade teams from start to finish.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
  },
]

const projects = [
  {
    title: 'Commercial High-Rise',
    category: 'Multi-Story',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Industrial Warehouse',
    category: 'Industrial',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Mixed-Use Development',
    category: 'Mixed-Use',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Structural Renovation',
    category: 'Retrofit',
    img: '/preconstruct.png',
  },
]

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          const numeric = parseInt(target.replace(/\D/g, ''))
          const duration = 1500
          const steps = 60
          const increment = numeric / steps
          let current = 0
          const interval = setInterval(() => {
            current += increment
            if (current >= numeric) {
              setCount(numeric)
              clearInterval(interval)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-navy-950/75" />
        {/* diagonal accent */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-white"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-32">
          <p className="section-subtitle mb-4">Structural Steel Contractor</p>
          <h1 className="font-display font-800 uppercase text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6">
            Engineering Strength.<br />
            <span className="text-gold-400">Building Performance.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Structural steel solutions delivered with precision, safety, and reliability.
            Trusted by contractors and developers for seamless structural delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">Request a Bid</Link>
            <Link to="/services" className="btn-outline">Our Services</Link>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <section className="bg-white py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-800 text-5xl md:text-6xl text-navy-800 leading-none">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.value.includes('+') ? '+' : stat.value.includes('%') ? '%' : ''}
                  />
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-gray-500 font-semibold">{stat.label}</div>
                <div className="mt-3 w-8 h-0.5 bg-gold-500 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ──────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/preconstruct.png"
                alt="Structural steel construction"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 hidden lg:block w-48 h-48 bg-gold-500 -z-10" />
              <div className="absolute top-6 -left-6 hidden lg:block w-24 h-24 border-4 border-navy-800 -z-10" />
            </div>
            <div>
              <p className="section-subtitle">Who We Are</p>
              <h2 className="font-display font-800 uppercase text-navy-900 text-4xl md:text-5xl leading-tight mb-6">
                Structural Steel Done Right
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Titan Structural Group is a structural steel contractor specializing in design, fabrication, project management, and installation for commercial construction projects. We partner with general contractors, developers, and property owners to deliver structural systems that meet demanding schedules and perform with long-term reliability.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We engage early in the project lifecycle to support budgeting, design coordination, and scheduling — delivering efficient fabrication and precise installation to ensure structural integrity from day one.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  'Schedule-Driven Execution',
                  'Strict Safety & Code Compliance',
                  'Clear Communication',
                  'Long-Term Structural Performance',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary">Learn More About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section className="py-20 bg-navy-950 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subtitle">What We Do</p>
            <h2 className="font-display font-800 uppercase text-white text-4xl md:text-5xl leading-tight">
              Our Core Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="group relative overflow-hidden bg-navy-900 hover:bg-navy-800 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
                  />
                </div>
                <div className="p-6">
                  <div className="text-gold-500 mb-3">{svc.icon}</div>
                  <h3 className="text-white font-display font-700 uppercase text-lg tracking-wide mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
                </div>
                <div className="h-0.5 w-0 group-hover:w-full bg-gold-500 transition-all duration-500" />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subtitle">How We Work</p>
            <h2 className="font-display font-800 uppercase text-navy-900 text-4xl md:text-5xl leading-tight">
              Project Execution Process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { num: '01', title: 'Preconstruction', desc: 'Early engagement, budgeting, and scheduling.' },
              { num: '02', title: 'Design Coordination', desc: 'Structural design and engineering review.' },
              { num: '03', title: 'Fabrication', desc: 'Precision shop fabrication and detailing.' },
              { num: '04', title: 'Installation', desc: 'Safe, efficient steel erection on-site.' },
              { num: '05', title: 'Final Inspection', desc: 'Quality control and code compliance sign-off.' },
            ].map((step, i) => (
              <div key={step.num} className="relative text-center group">
                {i < 4 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 z-0" />
                )}
                <div className="relative z-10 w-16 h-16 bg-navy-900 group-hover:bg-gold-500 transition-colors duration-300 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display font-800 text-xl text-gold-500 group-hover:text-navy-900 transition-colors duration-300">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-display font-700 uppercase text-navy-900 text-base tracking-wide mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT GALLERY ──────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="section-subtitle">Our Work</p>
              <h2 className="font-display font-800 uppercase text-navy-900 text-4xl md:text-5xl leading-tight">
                Featured Projects
              </h2>
            </div>
            <Link to="/projects" className="text-gold-600 font-semibold text-sm uppercase tracking-widest hover:text-gold-500 flex items-center gap-1 whitespace-nowrap">
              View All Projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((proj) => (
              <div key={proj.title} className="relative overflow-hidden group h-72">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-950/50 group-hover:bg-navy-950/70 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-1">{proj.category}</div>
                  <h3 className="text-white font-display font-700 uppercase text-lg">{proj.title}</h3>
                </div>
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gold-500 transition-all duration-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAFETY STRIP ─────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa52cbf33a?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-navy-900/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-subtitle">Safety First</p>
              <h2 className="font-display font-800 uppercase text-white text-4xl md:text-5xl leading-tight mb-6">
                Safety & Compliance at Every Step
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Titan Structural Group prioritizes jobsite safety, regulatory compliance, and quality control to ensure every structure is built to perform safely and reliably. Our safety culture runs from the boardroom to the jobsite — no exceptions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['OSHA Compliance', 'Fall Protection', 'Pre-Planning', 'Safety Training'].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-white/10 p-4">
                    <div className="w-2 h-2 bg-gold-500 flex-shrink-0" />
                    <span className="text-white text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/safety.jpg"
                alt="Safety on site"
                className="w-full h-56 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=500&q=80"
                alt="Steel worker"
                className="w-full h-56 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-gold-500 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-800 uppercase text-navy-950 text-4xl md:text-5xl leading-tight mb-4">
            Partner With Titan Structural Group
          </h2>
          <p className="text-navy-800 text-lg mb-10 max-w-2xl mx-auto">
            Dependable structural steel solutions for contractors, developers, and property owners. Let's build something great together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-navy-950 hover:bg-navy-800 text-white font-bold px-8 py-3 uppercase tracking-widest text-sm transition-colors duration-300"
            >
              Request a Bid
            </Link>
            <Link
              to="/contact"
              className="border-2 border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white font-bold px-8 py-3 uppercase tracking-widest text-sm transition-all duration-300"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
