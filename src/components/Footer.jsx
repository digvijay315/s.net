import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { company, services } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/[0.06] bg-ink-900/60">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-signal-500 to-volt-500 font-display text-lg font-bold text-ink-950">
              S
            </span>
            <span className="font-display text-lg font-bold text-white">{company.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">{company.tagline}</p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="hover:text-signal-400">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            <li><Link to="/about" className="hover:text-signal-400">About Us</Link></li>
            <li><Link to="/solutions" className="hover:text-signal-400">Solutions</Link></li>
            <li><Link to="/products" className="hover:text-signal-400">Products</Link></li>
            <li><Link to="/contact" className="hover:text-signal-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2.5">
              <FiPhone className="mt-0.5 shrink-0 text-signal-400" />
              <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-signal-400">
                {company.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <FiMail className="mt-0.5 shrink-0 text-signal-400" />
              <a href={`mailto:${company.email}`} className="hover:text-signal-400">
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <FiMapPin className="mt-0.5 shrink-0 text-signal-400" />
              <span>{company.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.06] px-5 py-6 text-center text-xs text-slate-500 sm:px-8">
        © {year} {company.fullName}. All rights reserved.
      </div>
    </footer>
  )
}
