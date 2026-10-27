import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiCheck, FiArrowRight, FiWifi, FiTv, FiGift } from 'react-icons/fi'
import { FaWhatsapp, FaBolt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { company } from '../data/content'

export default function PromoBannerModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-sky-100 my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close Promo"
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
          >
            <FiX size={20} />
          </button>

          {/* Top Banner Ribbon */}
          <div className="bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 px-6 py-2.5 text-center text-xs font-black uppercase tracking-widest text-white shadow-md">
            🔥 Festive Season Special • Limited Period Offer
          </div>

          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-12">
              <div className="sm:col-span-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-sky-800">
                  <FiGift className="text-sky-600" />
                  <span>New Connection Dhamaka</span>
                </div>

                <h3 className="mt-3 font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900 leading-tight">
                  100 Mbps Fibre + 33 OTT Apps
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Get truly unlimited symmetrical Gigabit broadband with free Dual-Band Wi-Fi 6 Router and 33+ OTT platforms!
                </p>

                {/* Offer Highlights Grid */}
                <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 rounded-xl bg-sky-50/70 p-2.5 font-semibold text-slate-800 border border-sky-100">
                    <FiWifi className="text-sky-600 shrink-0" />
                    <span>Free Wi-Fi 6 Router</span>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-amber-50/70 p-2.5 font-semibold text-slate-800 border border-amber-100">
                    <FiTv className="text-amber-600 shrink-0" />
                    <span>33+ OTT Subscriptions</span>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-emerald-50/70 p-2.5 font-semibold text-slate-800 border border-emerald-100">
                    <FaBolt className="text-emerald-600 shrink-0" />
                    <span>Zero FUP / Unlimited</span>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-purple-50/70 p-2.5 font-semibold text-slate-800 border border-purple-100">
                    <FiCheck className="text-purple-600 shrink-0" />
                    <span>Free Standard Install</span>
                  </div>
                </div>

                {/* OTT Platforms preview chips */}
                <div className="mt-4 flex flex-wrap items-center gap-1.5 text-[10px] font-bold">
                  {['Hotstar', 'Prime Video Lite', 'SonyLIV', 'ZEE5', 'Discovery+'].map((app) => (
                    <span
                      key={app}
                      className="rounded bg-slate-100 px-2 py-0.5 text-slate-700 border border-slate-200"
                    >
                      {app}
                    </span>
                  ))}
                  <span className="text-sky-600 font-extrabold">+28 More</span>
                </div>
              </div>

              {/* Price Callout */}
              <div className="sm:col-span-4 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 p-5 text-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Starts From Just
                </span>
                <div className="mt-1 font-display text-4xl font-black text-slate-900">
                  ₹699<span className="text-sm font-semibold text-slate-500">/mo</span>
                </div>
                <div className="mt-0.5 text-[11px] text-slate-500 font-medium">+ GST (Truly Unlimited)</div>

                <div className="mt-4 inline-block rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-bold text-emerald-800">
                  Save Up to 40%
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="btn-primary !px-6 !py-3 text-xs uppercase tracking-wider font-extrabold"
                >
                  Claim Offer Now <FiArrowRight />
                </Link>

                <a
                  href={`https://wa.me/${company.whatsapp}?text=Hello%20SNET,%20I%20am%20interested%20in%20the%20100Mbps%20Festive%20Broadband%20Offer!`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 px-5 py-3 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100"
                >
                  <FaWhatsapp className="text-base text-emerald-600" /> WhatsApp Now
                </a>
              </div>

              <button
                onClick={onClose}
                className="text-xs font-semibold text-slate-400 hover:text-slate-600 underline"
              >
                Continue to Website
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

