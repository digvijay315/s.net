import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiExternalLink } from 'react-icons/fi'
import { FaWhatsapp, FaTwitter, FaFacebookF, FaLinkedinIn, FaQrcode } from 'react-icons/fa'
import { company, services } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#060d17]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Mobile App (Alliance Broadband style) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-signal-500 to-volt-500 font-display text-lg font-bold text-ink-950 shadow-signal">
                S
              </span>
              <div>
                <span className="font-display text-lg font-bold text-white">{company.name}</span>
                <span className="block text-[10px] uppercase tracking-wider text-signal-400">
                  Broadband & Security
                </span>
              </div>
            </div>

            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-300">
              TRULY UNLIMITED HIGH SPEED BROADBAND & COMPLETE SURAKSHA
            </p>

            {/* <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-signal-400">
                  <FaQrcode size={36} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-white">Download Mobile App</h4>
                  <p className="mt-0.5 text-[11px] text-slate-400">
                    Pay bills, test speed, and raise service desk tickets instantly.
                  </p>
                  <a
                    href="https://pay2abs.alliancebroadband.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 rounded bg-[#fc9144] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white hover:bg-[#ea7e30]"
                  >
                    Quick Recharge <FiExternalLink />
                  </a>
                </div>
              </div>
            </div> */}

            <div className="mt-5 flex items-center gap-3 text-slate-400">
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:text-signal-400 hover:border-signal-400/40"
              >
                <FaTwitter size={14} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:text-signal-400 hover:border-signal-400/40"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:text-signal-400 hover:border-signal-400/40"
              >
                <FaLinkedinIn size={14} />
              </a>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-emerald-400 hover:bg-emerald-500/10"
              >
                <FaWhatsapp size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/about" className="hover:text-signal-400">
                  About Us
                </Link>
              </li>
              <li>
                <a href="/#plans" className="hover:text-signal-400">
                  Tariff Plans
                </a>
              </li>
              <li>
                <a
                  href="https://pay2abs.alliancebroadband.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-[#fc9144] hover:underline"
                >
                  Quick Recharge
                </a>
              </li>
              <li>
                <Link to="/services" className="hover:text-signal-400">
                  Service Desk
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-signal-400">
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-signal-400">
                  Hardware & Devices
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-signal-400">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Meet Us */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Meet Us
            </h4>
            <ul className="mt-4 space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <FiMapPin className="mt-0.5 shrink-0 text-signal-400" />
                <span className="leading-relaxed">{company.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiPhone className="shrink-0 text-volt-400" />
                <span>
                  Toll Free:{' '}
                  <a href="tel:18001207638" className="font-bold text-white hover:text-signal-400">
                    1800 120 7638
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaWhatsapp className="shrink-0 text-emerald-400" />
                <span>
                  WhatsApp:{' '}
                  <a
                    href={`https://wa.me/${company.whatsapp}`}
                    className="font-semibold text-white hover:text-signal-400"
                  >
                    {company.phone}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiMail className="shrink-0 text-signal-400" />
                <a href={`mailto:${company.email}`} className="text-slate-300 hover:text-white">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Find Us / Map */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Operations Center
            </h4>
            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-xs text-slate-400">
              <div className="font-bold text-white">24x7 NOC Command Center</div>
              <p className="mt-1 leading-relaxed">
                Serving fiber broadband, leased lines, 4K CCTV surveillance, and fire safety systems
                across Bhopal and Central India.
              </p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-400 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Network Status: Operational
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar (Alliance style) */}
      <div className="border-t border-white/10 bg-ink-950 px-5 py-5 text-xs text-slate-400 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p>© {year} {company.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="#" className="hover:text-signal-400">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-signal-400">Terms & Conditions</a>
            <span>•</span>
            <a href="#" className="hover:text-signal-400">Parental Control Awareness</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
