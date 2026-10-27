import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiCheckCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { company, services } from '../data/content'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', service: services[0].title, message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', phone: '', service: services[0].title, message: '' })
  }

  return (
    <div className="bg-white text-slate-800">
      <PageHero
        eyebrow="Contact Us"
        title="Tell us what you're building"
        description="Share your requirement and city — our team will call back with next steps, usually within a few hours."
        bgImage="/images/page-headers/bg-contact.png"
      />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-20 sm:px-8 lg:grid-cols-5">
        {/* Contact info */}
        <Reveal className="lg:col-span-2">
          <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="font-display text-xl font-black uppercase text-slate-900">Get in Touch</h2>
            <ul className="mt-7 space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-200 bg-sky-50 text-sky-600">
                  <FiPhone />
                </span>
                <div>
                  <div className="text-xs font-bold uppercase text-slate-500">Call Us Directly</div>
                  <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="mt-1 block font-bold text-slate-900 hover:text-sky-600">
                    {company.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-600">
                  <FaWhatsapp />
                </span>
                <div>
                  <div className="text-xs font-bold uppercase text-slate-500">WhatsApp Instant Chat</div>
                  <a
                    href={`https://wa.me/${company.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block font-bold text-slate-900 hover:text-emerald-600"
                  >
                    Chat with an Engineer
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600">
                  <FiMail />
                </span>
                <div>
                  <div className="text-xs font-bold uppercase text-slate-500">Support Email</div>
                  <a href={`mailto:${company.email}`} className="mt-1 block font-bold text-slate-900 hover:text-blue-600">
                    {company.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-200 bg-amber-50 text-amber-600">
                  <FiMapPin />
                </span>
                <div>
                  <div className="text-xs font-bold uppercase text-slate-500">Office & NOC Center</div>
                  <p className="mt-1 font-semibold text-slate-900">{company.address}</p>
                </div>
              </li>
            </ul>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal className="lg:col-span-3" delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <FiCheckCircle className="text-5xl text-emerald-500" />
                  <h3 className="mt-5 font-display text-xl font-black uppercase text-slate-900">Request received</h3>
                  <p className="mt-2 max-w-sm text-sm text-slate-600 font-medium">
                    Thanks — our network engineering team will call you back shortly to confirm survey and pricing.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline mt-8 !px-6 !py-2.5 text-xs font-bold"
                  >
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <h2 className="font-display text-xl font-black uppercase text-slate-900">Request a Free Quote / Site Survey</h2>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase text-slate-700">
                        Full Name
                      </label>
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:bg-white focus:border-sky-500 shadow-2xs"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase text-slate-700">
                        Phone Number
                      </label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Mobile number"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:bg-white focus:border-sky-500 shadow-2xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase text-slate-700">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:bg-white focus:border-sky-500 shadow-2xs"
                    >
                      {services.map((s) => (
                        <option key={s.slug} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase text-slate-700">
                      Requirement Details
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Address, building type, required bandwidth or number of CCTV cameras..."
                      className="w-full rounded-xl border border-slate-300 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:bg-white focus:border-sky-500 shadow-2xs"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full text-xs uppercase tracking-wider font-black !py-3.5">
                    Submit Request
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
