import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import React from 'react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-950 shadow-2xl' : 'bg-navy-950/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            < div className="w-100 h-100 flex items-center justify-center flex-shrink-0">
              <img src="/logo.png" alt="Titan Structural Group logo" className="w-50 h-10 object-contain" />
            </div>
            <div className="leading-none">
              <div className="text-white font-display font-700 text-xl tracking-wider uppercase">
                Titan
              </div>
              <div className="text-gold-500 font-display font-500 text-xs tracking-[0.2em] uppercase">
                Structural Group
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 text-sm font-semibold uppercase tracking-widest transition-colors duration-200 ${
                  location.pathname === link.to
                    ? 'text-gold-500'
                    : 'text-gray-300 hover:text-gold-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-5 py-2 text-sm uppercase tracking-widest transition-colors duration-200"
            >
              Request a Bid
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-7 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-white transition-all duration-300 origin-center ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-300 origin-center ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-navy-950 border-t border-navy-800 px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block py-3 text-sm font-semibold uppercase tracking-widest border-b border-navy-800 ${
                location.pathname === link.to
                  ? 'text-gold-500'
                  : 'text-gray-300 hover:text-gold-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 block text-center bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-5 py-3 text-sm uppercase tracking-widest transition-colors duration-200"
          >
            Request a Bid
          </Link>
        </div>
      </div>
    </header>
  )
}
