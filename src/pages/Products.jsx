import { FiPackage } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { productCategories } from '../data/content'

export default function Products() {
  return (
    <div className="bg-white text-slate-800">
      <PageHero
        eyebrow="Products"
        title="Genuine hardware, sourced and warrantied"
        description="Cameras, switches, routers and safety equipment from authorised distributors — supplied with installation and after-sales support."
        bgImage="/images/page-headers/bg-camera.png"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
          {productCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-2xl text-blue-600 shadow-xs">
                  <FiPackage />
                </div>
                <h3 className="mt-6 font-display text-lg font-extrabold text-slate-900">{cat.title}</h3>
                <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5 text-sm text-slate-700 font-medium">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Looking for a specific model or brand?"
        description="Share your requirement and we'll confirm availability, pricing and lead time."
      />
    </div>
  )
}
