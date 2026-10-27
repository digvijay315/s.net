import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { solutions } from '../data/content'

export default function Solutions() {
  return (
    <div className="bg-white text-slate-800">
      <PageHero
        eyebrow="Solutions"
        title="Built for how each site actually operates"
        description="Campus, enterprise, cloud and high-density Wi-Fi — packaged for the environment they run in, not sold as generic bundles."
        bgImage="/images/page-headers/bg-about.png"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {solutions.map((sol, i) => {
            const Icon = sol.icon
            return (
              <Reveal key={sol.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-200 bg-sky-50 text-2xl text-sky-600 shadow-xs">
                    <Icon />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-extrabold text-slate-900">{sol.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 font-medium">{sol.description}</p>
                  <ul className="mt-6 grid grid-cols-1 gap-3 border-t border-slate-100 pt-5 sm:grid-cols-2">
                    {sol.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <CtaBand
        title="Not sure which solution fits your site?"
        description="Send us your building type and size — we'll recommend the right architecture, free."
      />
    </div>
  )
}
