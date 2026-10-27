import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Fallback map if bgImage is not provided explicitly
const defaultBgMap = {
  about: '/images/page-headers/bg-about.png',
  contact: '/images/page-headers/bg-contact.png',
  services: '/images/page-headers/bg-roi.png',
  solutions: '/images/page-headers/bg-about.png',
  products: '/images/page-headers/bg-camera.png',
}

export default function PageHero({ eyebrow, title, description, bgImage }) {
  // Determine appropriate background image
  const resolvedBg =
    bgImage ||
    (eyebrow && defaultBgMap[eyebrow.toLowerCase().replace(/\s+/g, '')]) ||
    defaultBgMap.about

  return (
    <section className="relative min-h-[300px] sm:min-h-[360px] overflow-hidden bg-slate-900 flex items-center justify-center py-20 sm:py-28">
      {/* Background Image Layer (Alliance Broadband page-header-bg) */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 10, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${resolvedBg})` }}
      />

      {/* Alliance Broadband 60% Dark Overlay for Crisp Contrast */}
      <div className="absolute inset-0 bg-slate-950/60" />

      {/* Alliance Broadband 6-Column Vertical Grid Lines (main-slider-border) */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-6 opacity-15">
        <div className="border-r border-white" />
        <div className="border-r border-white" />
        <div className="border-r border-white" />
        <div className="border-r border-white" />
        <div className="border-r border-white" />
        <div className="border-r border-white" />
      </div>

      {/* Content Container (Alliance page-header__inner) */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
        {/* Alliance Broadband Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest"
        >
          <Link to="/" className="text-[#fc9144] hover:underline transition">
            Home
          </Link>
          <span className="text-white/60 font-bold">//</span>
          <span className="text-white">{eyebrow || 'Page'}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-balance font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
        >
          {title}
        </motion.h1>

        {/* Subtitle / Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-200 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
