import { useState } from 'react'
import React from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    how: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Please describe your project'
    return e
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) {
      setErrors(e2)
      return
    }
    setLoading(true)
    // Simulate submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/contact.jpg')" }}
        />
        <div className="absolute inset-0 bg-navy-950/82" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-subtitle mb-3">Get In Touch</p>
          <h1 className="font-display font-800 uppercase text-white text-5xl md:text-6xl leading-tight mb-6">
            Let's Build<br />
            <span className="text-gold-400">Together</span>
          </h1>
          <p className="text-white text-lg max-w-2xl leading-relaxed">
            Ready to start your next structural steel project? Contact us for a bid, consultation, or to discuss how Titan Structural Group can deliver for your project.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <p className="section-subtitle">Contact Information</p>
                <h2 className="font-display font-800 uppercase text-navy-900 text-3xl md:text-4xl leading-tight mb-4">
                  How to Reach Us
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Whether you're bidding a project, planning a renovation, or looking for a structural steel partner — we're here and ready to help.
                </p>
              </div>

              {/* Contact info blocks */}
              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: 'Phone',
                    value: '(646) 493-8871',
                    href: 'tel:+16464938871',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: 'Email',
                    value: 'estimating4@titansg.com',
                    href: 'mailto:estimating4@titansg.com',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: 'Location',
                    value: 'United States',
                    href: null,
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    label: 'Office Hours',
                    value: 'Mon–Fri, 7:00 AM – 5:00 PM',
                    href: null,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-navy-950 text-gold-500 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-navy-900 font-medium text-sm hover:text-gold-600 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-navy-900 font-medium text-sm">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Photo */}
              <div className="relative mt-6 hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80"
                  alt="Construction project"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-gold-500" />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white p-12 text-center shadow-sm h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-gold-500 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-navy-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display font-800 uppercase text-navy-900 text-3xl mb-4">Message Received!</h3>
                  <p className="text-gray-600 max-w-md leading-relaxed mb-6">
                    Thank you for reaching out to Titan Structural Group. A member of our team will be in touch with you shortly to discuss your project.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name:'',company:'',email:'',phone:'',projectType:'',message:'',how:'' }) }}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="bg-white shadow-sm p-8 md:p-10">
                  <h3 className="font-display font-700 uppercase text-navy-900 text-2xl tracking-wide mb-2">
                    Request a Bid or Consultation
                  </h3>
                  <p className="text-gray-500 text-sm mb-8">
                    Fill out the form below and we'll get back to you promptly.
                  </p>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-widest text-gray-600 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className={`w-full px-4 py-3 border text-sm focus:outline-none focus:border-navy-800 transition-colors ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>

                      {/* Company */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-widest text-gray-600 mb-1.5">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="ABC Construction"
                          className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-navy-800 transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-widest text-gray-600 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={`w-full px-4 py-3 border text-sm focus:outline-none focus:border-navy-800 transition-colors ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-widest text-gray-600 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="(646) 493-8871"
                          className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-navy-800 transition-colors"
                        />
                      </div>

                      {/* Project Type */}
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold uppercase tracking-widest text-gray-600 mb-1.5">
                          Project Type
                        </label>
                        <select
                          name="projectType"
                          value={form.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-navy-800 transition-colors bg-white appearance-none"
                        >
                          <option value="">Select a project type...</option>
                          <option>Commercial Building</option>
                          <option>Industrial / Warehouse</option>
                          <option>Mixed-Use Development</option>
                          <option>Structural Retrofit / Renovation</option>
                          <option>Multi-Story Residential</option>
                          <option>Healthcare / Institutional</option>
                          <option>Other</option>
                        </select>
                      </div>

                      {/* How did you hear */}
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold uppercase tracking-widest text-gray-600 mb-1.5">
                          How Did You Hear About Us?
                        </label>
                        <select
                          name="how"
                          value={form.how}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-navy-800 transition-colors bg-white appearance-none"
                        >
                          <option value="">Select an option...</option>
                          <option>Referral</option>
                          <option>Online Search</option>
                          <option>Trade Association</option>
                          <option>Social Media</option>
                          <option>Previous Client</option>
                          <option>Other</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold uppercase tracking-widest text-gray-600 mb-1.5">
                          Project Details <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Tell us about your project — scope, location, timeline, and any specific requirements..."
                          className={`w-full px-4 py-3 border text-sm focus:outline-none focus:border-navy-800 transition-colors resize-none ${errors.message ? 'border-red-400' : 'border-gray-200'}`}
                        />
                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                      </div>
                    </div>

                    <div className="mt-6">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-navy-950 hover:bg-navy-800 text-white font-bold py-4 uppercase tracking-widest text-sm transition-colors duration-300 disabled:opacity-60 flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          'Submit Request'
                        )}
                      </button>
                      <p className="text-xs text-gray-400 text-center mt-3">
                        We respect your privacy and will never share your information.
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="bg-navy-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Request a Bid',
                desc: 'Submit your project plans and specifications. We\'ll respond with a competitive, detailed bid.',
                icon: '📋',
              },
              {
                title: 'Schedule a Consultation',
                desc: 'Have a conversation with our structural team about your project scope, timeline, and goals.',
                icon: '📞',
              },
              {
                title: 'Preconstruction Support',
                desc: 'Engage our team early for budgeting, value engineering, and design coordination services.',
                icon: '🏗️',
              },
            ].map((item) => (
              <div key={item.title} className="border border-navy-800 p-8 hover:border-gold-500 transition-colors duration-300">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-display font-700 uppercase text-white text-lg tracking-wide mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
