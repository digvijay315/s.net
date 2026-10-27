import { Link } from 'react-router-dom'
import { FiPhone, FiArrowRight } from 'react-icons/fi'
import Reveal from './Reveal'
import { company } from '../data/content'

export default function CtaBand({
  title = 'Ready to upgrade your infrastructure with SNET?',
  description = 'Tell us what you need — our engineers will get back with a free site survey and a clear quote.',
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-sky-200 bg-gradient-to-r from-sky-50 via-white to-blue-50 px-8 py-14 text-center sm:px-16 shadow-lg">
          <div className="relative">
            <span className="inline-block rounded-full bg-sky-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-sky-800 border border-sky-200">
              Get Connected Today
            </span>
            <h2 className="mt-3 text-balance font-display text-2xl font-black uppercase text-slate-900 sm:text-3xl">
              {title}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 font-medium">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary w-full sm:w-auto text-xs uppercase tracking-wider font-black">
                Get a Free Quote <FiArrowRight />
              </Link>
              <a
                href={`tel:${company.phone.replace(/\s/g, '')}`}
                className="btn-outline w-full sm:w-auto text-xs uppercase tracking-wider font-bold"
              >
                <FiPhone className="text-sky-600" /> Call an Engineer
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
