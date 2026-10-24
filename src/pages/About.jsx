import { FiCheckCircle, FiTarget, FiEye } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { whyChoose, company } from '../data/content'

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title={`The team behind ${company.name}'s infrastructure`}
        description="We are a networking and security solutions company built for the details others skip — proper cable dressing, tested failovers, and technicians who show up."
      />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Who we are</h2>
          <p className="mt-5 text-sm leading-relaxed text-slate-400 sm:text-base">
            {company.fullName} works across residential, corporate, educational and commercial
            establishments — delivering internet connectivity, CCTV surveillance, intercom
            systems, fire safety and enterprise networking as one integrated service, not a
            patchwork of vendors.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
            Every engagement starts with a site survey, not a sales pitch — so what gets installed
            actually matches how the building is used, and what gets quoted is what gets billed.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="panel h-full p-7">
              <FiTarget className="text-2xl text-signal-400" />
              <h3 className="mt-4 font-display text-lg font-bold text-white">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Make dependable connectivity and security infrastructure accessible to every
                building, without compromising on installation quality.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="panel h-full p-7">
              <FiEye className="text-2xl text-volt-400" />
              <h3 className="mt-4 font-display text-lg font-bold text-white">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Become the single trusted name a building calls for internet, surveillance and
                safety — for the life of the property, not just the install.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-ink-900/40 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">What sets us apart</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
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

      <CtaBand
        title="Want a partner who owns the whole stack?"
        description="From the first cable to the last camera, one team plans, installs and maintains it."
      />
    </div>
  )
}
