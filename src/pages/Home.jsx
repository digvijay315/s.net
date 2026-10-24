import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiWifi, FiVideo, FiCheckCircle } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'
import CtaBand from '../components/CtaBand'
import { services, whyChoose, projects, company } from '../data/content'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-14 sm:pb-28 sm:pt-20">
        <div className="grid-backdrop absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="badge text-signal-300"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-signal-400" />
              Trusted network & security partner
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-balance font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl"
            >
              High-speed networks, watchful cameras, and{' '}
              <span className="text-gradient">safer buildings</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              {company.name} designs, installs and maintains internet, CCTV, intercom, fire
              safety and cloud networking for homes, campuses and enterprises —{' '}
              {company.tagline.toLowerCase()}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <Link to="/contact" className="btn-primary">
                Get a Quote <FiArrowRight />
              </Link>
              <Link to="/services" className="btn-outline">
                Explore Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 grid grid-cols-2 gap-5 border-t border-white/[0.06] pt-8 sm:grid-cols-4"
            >
              {[
                ['9', 'Core services'],
                ['24x7', 'NOC support'],
                ['500+', 'Sites served'],
                ['1 Gbps', 'Fibre speeds'],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display text-2xl font-bold text-white">{num}</div>
                  <div className="mt-1 text-xs text-slate-500">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Interactive-style status card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-md"
            >
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-signal-500/40 to-volt-500/40 opacity-40 blur-2xl" />
              <div className="panel relative animate-floaty p-6">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <span className="font-mono text-xs uppercase tracking-wide text-slate-400">
                    SNET Operations Center
                  </span>
                  <span className="rounded border border-signal-500/30 bg-signal-500/10 px-2 py-0.5 font-mono text-[11px] text-signal-300">
                    ONLINE
                  </span>
                </div>

                <div className="space-y-4 py-5">
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                    <div className="mb-1.5 flex items-center justify-between text-xs">
                      <span className="flex items-center gap-2 font-semibold text-slate-300">
                        <FiWifi className="text-signal-400" /> Fibre Backbone
                      </span>
                      <span className="font-mono font-bold text-signal-400">99.98%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-ink-700">
                      <div className="h-2 w-[98%] rounded-full bg-gradient-to-r from-signal-400 to-volt-400" />
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-2 font-semibold text-slate-300">
                        <FiVideo className="text-volt-400" /> CCTV & NVR
                      </span>
                      <span className="font-mono text-volt-400">4K Live Sync</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      ['Campus Mesh', '32 Sites'],
                      ['Fire Panel', 'Nominal'],
                    ].map(([label, val]) => (
                      <div key={label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                        <div className="text-[10px] font-semibold uppercase text-slate-500">{label}</div>
                        <div className="mt-1 text-sm font-bold text-white">{val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Everything your building needs to stay connected and secure
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
            Sales, installation, upgrades, AMC and 24x7 on-site service — under one roof.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-signal-400 hover:text-signal-300">
            View all 9 services <FiArrowRight />
          </Link>
        </Reveal>
      </section>

      {/* Why choose */}
      <section className="border-y border-white/[0.06] bg-ink-900/40 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Why Choose {company.name}</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              A single, accountable partner for every wire, camera and access point on site.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}>
                <div className="flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-ink-900/60 p-6">
                  <FiCheckCircle className="mt-0.5 shrink-0 text-xl text-signal-400" />
                  <div>
                    <h3 className="font-display text-base font-bold text-white">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{w.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects preview */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Our Projects</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
            A sample of the sites running on {company.name} infrastructure today.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <div className="panel panel-hover flex items-center justify-between gap-4 p-6">
                <div>
                  <h3 className="font-display text-base font-bold text-white">{p.name}</h3>
                  <p className="mt-1.5 text-sm text-slate-400">{p.scope}</p>
                </div>
                <span className="shrink-0 rounded-full border border-signal-500/30 bg-signal-500/10 px-3 py-1 text-[11px] font-semibold text-signal-300">
                  {p.type}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
