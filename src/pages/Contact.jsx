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
    <div>
      <PageHero
        eyebrow="Contact Us"
        title="Tell us what you're building"
        description="Share your requirement and city — our team will call back with next steps, usually within a few hours."
      />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-20 sm:px-8 lg:grid-cols-5">
        {/* Contact info */}
        <Reveal className="lg:col-span-2">
          <div className="panel h-full p-8">
            <h2 className="font-display text-xl font-bold text-white">Get in Touch</h2>
            <ul className="mt-7 space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-signal-500/30 bg-signal-500/10 text-signal-400">
                  <FiPhone />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase text-slate-500">Call Us</div>
                  <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="mt-1 block font-medium text-white hover:text-signal-400">
                    {company.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                  <FaWhatsapp />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase text-slate-500">WhatsApp</div>
                  <a
                    href={`https://wa.me/${company.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block font-medium text-white hover:text-emerald-400"
                  >
                    Chat with us
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-volt-500/30 bg-volt-500/10 text-volt-400">
                  <FiMail />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase text-slate-500">Email</div>
                  <a href={`mailto:${company.email}`} className="mt-1 block font-medium text-white hover:text-volt-400">
                    {company.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
                  <FiMapPin />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase text-slate-500">Address</div>
                  <p className="mt-1 font-medium text-white">{company.address}</p>
                </div>
              </li>
            </ul>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal className="lg:col-span-3" delay={0.1}>
          <div className="panel relative overflow-hidden p-8">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <FiCheckCircle className="text-5xl text-signal-400" />
                  <h3 className="mt-5 font-display text-xl font-bold text-white">Request received</h3>
                  <p className="mt-2 max-w-sm text-sm text-slate-400">
                    Thanks — our team will call you back shortly to confirm details.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline mt-8 !px-6 !py-2.5 text-xs"
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
                  <h2 className="font-display text-xl font-bold text-white">Request a Free Quote</h2>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase text-slate-400">
                        Full Name
                      </label>
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-slate-200 outline-none transition-colors focus:border-signal-400"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase text-slate-400">
                        Phone Number
                      </label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Mobile number"
                        className="w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-slate-200 outline-none transition-colors focus:border-signal-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase text-slate-400">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-slate-200 outline-none transition-colors focus:border-signal-400"
                    >
                      {services.map((s) => (
                        <option key={s.slug} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase text-slate-400">
                      Requirement Details
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Address, building type, and specific requirements..."
                      className="w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-slate-200 outline-none transition-colors focus:border-signal-400"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
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
