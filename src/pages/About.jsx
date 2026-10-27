import { FiCheckCircle, FiTarget, FiEye } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { whyChoose, company } from '../data/content'

export default function About() {
  return (
    <div className="bg-white text-slate-800">
      <PageHero
        eyebrow="About Us"
        title={`The team behind ${company.name}'s infrastructure`}
        description="We are a networking and security solutions company built for the details others skip — proper optical cable splicing, tested failovers, and technicians who show up."
        bgImage="/images/page-headers/bg-about.png"
      />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Company Profile</span>
          <h2 className="mt-2 font-display text-2xl font-black uppercase text-slate-900 sm:text-3xl">Who we are</h2>
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
            {company.fullName} works across residential, corporate, educational and commercial
            establishments — delivering internet connectivity, CCTV surveillance, intercom
            systems, fire safety and enterprise networking as one integrated service, not a
            patchwork of vendors.
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
            Every engagement starts with a site survey, not a sales pitch — so what gets installed
            actually matches how the building is used, and what gets quoted is what gets billed.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-2xl text-sky-600 border border-sky-100">
                <FiTarget />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-slate-900">Our Mission</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 font-medium">
                Make dependable connectivity and security infrastructure accessible to every
                building, without compromising on installation quality.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-600 border border-blue-100">
                <FiEye />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-slate-900">Our Vision</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 font-medium">
                Become the single trusted name a building calls for internet, surveillance and
                safety — for the life of the property, not just the install.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="border-y border-slate-200 bg-[#f4f8fb] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Why Choose Us</span>
            <h2 className="mt-2 font-display text-2xl font-black uppercase text-slate-900 sm:text-3xl">
              What sets us apart
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}>
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                  <FiCheckCircle className="mt-0.5 shrink-0 text-xl text-sky-600" />
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 font-medium">{w.description}</p>
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
