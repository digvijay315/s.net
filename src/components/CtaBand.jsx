import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function CtaBand({
  title = 'Ready to upgrade your infrastructure?',
  description = 'Tell us what you need — our engineers will get back with a site visit and a clear quote.',
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <Reveal>
        <div className="panel relative overflow-hidden px-8 py-14 text-center sm:px-16">
          <div className="grid-backdrop absolute inset-0 opacity-60" />
          <div className="relative">
            <h2 className="text-balance font-display text-2xl font-bold text-white sm:text-3xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary w-full sm:w-auto">
                Get a Free Quote
              </Link>
              <a href="tel:+919876543210" className="btn-outline w-full sm:w-auto">
                Call an Engineer
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
