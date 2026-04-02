import { Link } from 'react-router-dom'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-gray-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center flex-shrink-0">
                <img src="/logo.png" alt="Titan logo" className="w-6 h-6 object-contain" />
              </div>
              <div className="leading-none">
                <div className="text-white font-display font-700 text-xl tracking-wider uppercase">Titan</div>
                <div className="text-gold-500 font-display font-500 text-xs tracking-[0.2em] uppercase">Structural Group</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-sm">
              Structural steel solutions delivered with precision, safety, and reliability. Trusted by contractors and developers for seamless structural delivery.
            </p>
            <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold">Engineering Strength. Building Performance.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-700 text-sm uppercase tracking-widest mb-5">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Services', to: '/services' },
                { label: 'Projects', to: '/projects' },
                { label: 'Contact', to: '/contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm hover:text-gold-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-gold-500 block flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-700 text-sm uppercase tracking-widest mb-5">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@titanstructuralgroup.com" className="hover:text-gold-400 transition-colors">
                  info@titanstructuralgroup.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+16464938871" className="hover:text-gold-400 transition-colors">
                  (646) 493-8871
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>United States</span>
              </li>
            </ul>

            <Link
              to="/contact"
              className="mt-6 inline-block bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-6 py-2.5 text-xs uppercase tracking-widest transition-colors duration-200"
            >
              Request a Bid
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Titan Structural Group. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Structural Steel Contractor | Design · Fabrication · Installation
          </p>
        </div>
      </div>
    </footer>
  )
}
