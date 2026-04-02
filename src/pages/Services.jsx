import { Link } from 'react-router-dom'
import React from 'react'

const services = [
  {
    id: 'design',
    title: 'Structural Design & Engineering',
    shortTitle: 'Design & Engineering',
    desc: 'Full structural steel design and engineering services with precision detailing, connection design, and constructability review from concept through permit.',
    details: [
      'Structural steel design and engineering',
      'Connection design and coordination',
      'Shop drawing review and approval',
      'Constructability review',
      'Code compliance review',
      'BIM coordination and clash detection',
    ],
    img: '/design.jpg',
  },
  {
    id: 'fabrication',
    title: 'Steel Fabrication & Detailing',
    shortTitle: 'Fabrication & Detailing',
    desc: 'Precision fabrication and shop detailing that maximizes quality and minimizes field rework — keeping your project on schedule and within budget.',
    details: [
      'Structural steel fabrication',
      'Shop detailing and drawing production',
      'AISC certified fabrication',
      'Material procurement and management',
      'Quality control and inspection',
      'Just-in-time delivery coordination',
    ],
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'erection',
    title: 'Steel Erection & Installation',
    shortTitle: 'Erection & Installation',
    desc: 'Safe, efficient structural steel erection by experienced crews — coordinated with your jobsite schedule to ensure seamless multi-trade integration.',
    details: [
      'Structural steel erection',
      'Decking and shear stud installation',
      'Miscellaneous metals installation',
      'Crane and rigging operations',
      'Multi-trade coordination on site',
      'Post-erection inspection and punch list',
    ],
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'preconstruction',
    title: 'Preconstruction & Value Engineering',
    shortTitle: 'Preconstruction',
    desc: 'Early engagement, budget planning, and value engineering to identify cost savings and constructability improvements before breaking ground.',
    details: [
      'Conceptual budgeting and estimating',
      'Value engineering and cost analysis',
      'Constructability review',
      'Schedule development and phasing',
      'Owner and GC collaboration',
      'Bid packaging and procurement strategy',
    ],
    img: '/preconstruct.png',
  },
  {
    id: 'retrofits',
    title: 'Structural Modifications & Retrofits',
    shortTitle: 'Modifications & Retrofits',
    desc: 'Expert structural modifications, reinforcements, and retrofits for existing buildings — delivering safe, code-compliant solutions for renovation projects.',
    details: [
      'Structural assessments and evaluations',
      'Seismic upgrades and retrofits',
      'Steel reinforcement and strengthening',
      'Opening and penetration supports',
      'Renovation and adaptive reuse',
      'As-built documentation',
    ],
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'pm',
    title: 'Project Management & Coordination',
    shortTitle: 'Project Management',
    desc: 'Dedicated project management with clear communication, proactive scheduling, and full coordination with GC and multi-trade teams from start to finish.',
    details: [
      'Dedicated project management',
      'Schedule monitoring and reporting',
      'RFI and submittal management',
      'Multi-trade field coordination',
      'Owner and GC communication',
      'Budget tracking and reporting',
    ],
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
  },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-navy-950/80" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-subtitle mb-3">What We Do</p>
          <h1 className="font-display font-800 uppercase text-white text-5xl md:text-6xl leading-tight mb-6">
            Structural Steel<br />
            <span className="text-gold-400">Services</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            From early-stage design through final installation, Titan Structural Group delivers comprehensive structural steel services for commercial construction projects.
          </p>
        </div>
      </section>

      {/* Services Grid Overview */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 border border-gray-100">
            {services.map((svc, i) => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                className="px-4 py-5 text-center text-xs font-semibold uppercase tracking-widest text-navy-900 hover:bg-gold-500 hover:text-navy-950 transition-colors duration-200 border-r border-gray-100 last:border-r-0"
              >
                {svc.shortTitle}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          className={`py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="relative overflow-hidden">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-[420px] object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-gold-500 px-4 py-2">
                    <span className="text-navy-950 font-display font-700 text-xs uppercase tracking-widest">
                      0{i + 1}
                    </span>
                  </div>
                </div>
              </div>
              <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                <p className="section-subtitle">Service 0{i + 1}</p>
                <h2 className="font-display font-800 uppercase text-navy-900 text-3xl md:text-4xl leading-tight mb-5">
                  {svc.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{svc.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {svc.details.map((d) => (
                    <div key={d} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gold-500 mt-1.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{d}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary">Request This Service</Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-navy-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-subtitle">Partner With Us</p>
              <h2 className="font-display font-800 uppercase text-white text-4xl md:text-5xl leading-tight mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Partner with Titan Structural Group for dependable structural steel solutions. We work closely with general contractors, developers, and property owners to deliver structural systems that perform.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-center">Request a Bid</Link>
              <Link to="/contact" className="btn-outline text-center">Schedule a Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
