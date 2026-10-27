import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX, FiPhone, FiMail, FiZap } from 'react-icons/fi'
import { FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { company } from '../data/content'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/#plans', label: 'Tariff Plans' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/products', label: 'Products' },
  { to: '/#promo', label: 'Offers' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar({ onOpenPromo }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const handleNavClick = (to) => {
    if (to === '/#plans') {
      if (location.pathname === '/') {
        const el = document.getElementById('plans')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (to === '/#promo') {
      if (onOpenPromo) {
        onOpenPromo()
      }
    }
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Top Utility Bar (Alliance Broadband style) */}
      <div className="border-b border-slate-800 bg-[#0a1626] py-2 text-[12px] text-slate-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <div className="flex flex-wrap items-center gap-5 sm:gap-7">
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 transition-colors hover:text-emerald-300 font-medium"
            >
              <FaWhatsapp className="text-sm" />
              <span className="hidden sm:inline">WhatsApp:</span>
              <span className="text-white">{company.phone}</span>
            </a>

            <a
              href={`mailto:${company.email}`}
              className="hidden items-center gap-1.5 transition-colors hover:text-white md:flex"
            >
              <FiMail className="text-sky-400" />
              <span>{company.email}</span>
            </a>

            <a
              href="tel:18001207638"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <FiPhone className="text-amber-400" />
              <span className="text-slate-400">Toll Free:</span>
              <span className="font-semibold text-white">1800 120 7638</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2.5 text-slate-400 sm:flex">
              <a href="#" aria-label="Twitter" className="hover:text-sky-400 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-sky-400 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-sky-400 transition-colors">
                <FaLinkedinIn />
              </a>
            </div>

            <a
              href="https://pay2abs.alliancebroadband.in/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded bg-[#fc9144] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-[#ea7e30]"
            >
              <FiZap className="text-xs" />
              Recharge
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar — Light Mode */}
      <div
        className={`transition-all duration-300 bg-white/95 backdrop-blur-md border-b ${
          scrolled ? 'border-slate-200/90 shadow-md' : 'border-slate-200/60 shadow-sm'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 font-display text-lg font-extrabold text-white shadow-md shadow-sky-500/20">
              S
            </span>
            <div>
              <span className="font-display text-xl font-extrabold tracking-tight text-slate-900">
                {company.name}
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-sky-600">
                Broadband & Security
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                onClick={() => handleNavClick(l.to)}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `group relative flex items-center gap-1 text-[13px] font-bold tracking-wide transition-colors ${
                    isActive && l.to !== '/#plans' && l.to !== '/#promo'
                      ? 'text-sky-600'
                      : 'text-slate-700 hover:text-sky-600'
                  }`
                }
              >
                {l.label}
                {l.label === 'Offers' && (
                  <span className="blink-me rounded bg-red-600 px-1 py-0.2 text-[9px] font-bold text-white shadow-sm">
                    NEW
                  </span>
                )}
                {l.label === 'Tariff Plans' && (
                  <span className="rounded bg-sky-100 px-1 py-0.2 text-[9px] font-bold text-sky-700">
                    HOT
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <Link to="/contact" className="btn-primary !px-5 !py-2.5 text-xs">
              Get Connection
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-slate-300 p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer — Light Mode */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-slate-200 bg-white shadow-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <NavLink
                  key={l.label}
                  to={l.to}
                  onClick={() => {
                    handleNavClick(l.to)
                    setOpen(false)
                  }}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold ${
                      isActive && l.to !== '/#plans' && l.to !== '/#promo'
                        ? 'bg-sky-50 text-sky-600'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  <span>{l.label}</span>
                  {l.label === 'Offers' && (
                    <span className="blink-me rounded bg-red-600 px-1.5 py-0.5 text-[9px] font-bold text-white">
                      NEW
                    </span>
                  )}
                </NavLink>
              ))}
              <div className="mt-3 flex flex-col gap-2 pt-2 border-t border-slate-100">
                <a
                  href="https://pay2abs.alliancebroadband.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-lg bg-[#fc9144] py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow"
                >
                  <FiZap /> Quick Recharge
                </a>
                <Link to="/contact" className="btn-primary w-full text-xs">
                  Get New Connection
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
