import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiCheck, FiWifi, FiCheckCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { company } from '../data/content'

export default function PlanDetailsModal({ plan, isOpen, onClose }) {
  if (!isOpen || !plan) return null

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

        {/* Modal Window — Alliance Broadband Light Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-sky-200 bg-white p-6 shadow-2xl sm:p-8 my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close details"
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
          >
            <FiX size={20} />
          </button>

          {/* Modal Header (Alliance Broadband style) */}
          <div className="border-b border-slate-100 pb-5">
            <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-800">
              {plan.category || 'Fibre Broadband'}
            </span>
            <h3 className="mt-2 text-2xl font-black uppercase text-slate-900 sm:text-3xl">
              {plan.name}
            </h3>
            <div className="mt-2 inline-flex items-center gap-2 rounded-lg bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700 border border-sky-100">
              <FiWifi className="text-sky-600" />
              <span>{plan.speedBadge}</span>
            </div>
          </div>

          {/* Price Block */}
          <div className="my-6 flex flex-wrap items-baseline justify-between gap-4 rounded-2xl bg-gradient-to-r from-sky-50/60 to-blue-50/60 p-5 border border-sky-100">
            <div>
              <div className="text-xs font-bold uppercase text-slate-500">Subscription Price</div>
              <div className="mt-1 flex items-baseline gap-1.5 font-display text-4xl font-black text-slate-900">
                <span>{plan.price}</span>
                <span className="text-sm font-semibold text-slate-500">{plan.priceSubtitle || '+ GST'}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                onClick={onClose}
                className="btn-primary !px-6 !py-3 text-xs uppercase tracking-wider font-extrabold"
              >
                Book This Plan
              </Link>
              <a
                href={`https://wa.me/${company.whatsapp}?text=Hello%20SNET,%20I%20am%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20plan.`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-emerald-500/40 bg-emerald-50 px-4 py-3 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>

          {/* Specs Grid (Alliance Broadband format) */}
          <div className="grid grid-cols-2 gap-4 border-b border-slate-100 pb-6 sm:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
              <div className="text-[11px] font-bold uppercase text-slate-500">Validity</div>
              <div className="mt-1 text-sm font-black text-slate-900">{plan.validity}</div>
            </div>

            <div className="rounded-xl border border-sky-100 bg-sky-50 p-3 text-center">
              <div className="text-[11px] font-bold uppercase text-sky-700">Data Limit</div>
              <div className="mt-1 text-sm font-black text-sky-800">{plan.data}</div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
              <div className="text-[11px] font-bold uppercase text-slate-500">Max Speed</div>
              <div className="mt-1 text-sm font-black text-slate-900">{plan.speed}</div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
              <div className="text-[11px] font-bold uppercase text-slate-500">Voice / Telephony</div>
              <div className="mt-1 text-sm font-black text-blue-700">{plan.voice || 'Included'}</div>
            </div>
          </div>

          {/* Bundled Subscriptions */}
          {plan.subscriptions && plan.subscriptions.length > 0 && (
            <div className="border-b border-slate-100 py-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Bundled Entertainment & OTT Apps ({plan.subscriptions.length})
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {plan.subscriptions.map((sub) => (
                  <span
                    key={sub}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700"
                  >
                    <FiCheckCircle className="text-sky-600" />
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Features Checklist */}
          {plan.features && plan.features.length > 0 && (
            <div className="border-b border-slate-100 py-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Plan Highlights
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-slate-700 font-medium">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2">
                    <FiCheck className="text-emerald-600" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Terms & Notes */}
          <div className="pt-5 text-xs leading-relaxed text-slate-500">
            <span className="font-bold text-slate-700">Terms & Conditions: </span>
            {plan.notes ||
              'Installation charges and security deposit may apply based on region and cable distance. Symmetrical speeds subject to network conditions. Standard SLA response within 4 hours.'}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
