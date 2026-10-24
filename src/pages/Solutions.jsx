import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { solutions } from '../data/content'

export default function Solutions() {
  return (
    <div>
      <PageHero
        eyebrow="Solutions"
        title="Built for how each site actually operates"
        description="Campus, enterprise, cloud and high-density Wi-Fi — packaged for the environment they run in, not sold as generic bundles."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {solutions.map((sol, i) => {
            const Icon = sol.icon
            return (
              <Reveal key={sol.title} delay={i * 0.08}>
                <div className="panel panel-hover h-full p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-signal-500/30 bg-signal-500/10 text-2xl text-signal-400">
                    <Icon />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-white">{sol.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{sol.description}</p>
                  <ul className="mt-6 grid grid-cols-1 gap-2.5 border-t border-white/[0.06] pt-5 sm:grid-cols-2">
                    {sol.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-400" />
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
