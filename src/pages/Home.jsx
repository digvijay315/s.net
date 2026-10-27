import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiArrowRight,
  FiWifi,
  FiVideo,
  FiShield,
  FiPhone,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiPlay,
  FiExternalLink,
  FiZap,
  FiX,
  FiGift,
} from 'react-icons/fi'
import { FaTv, FaHeadset, FaWhatsapp, FaQrcode } from 'react-icons/fa'
import { MdSpeed } from 'react-icons/md'

import Reveal from '../components/Reveal'
import PlanDetailsModal from '../components/PlanDetailsModal'
import PromoBannerModal from '../components/PromoBannerModal'
import CtaBand from '../components/CtaBand'
import { company, services, projects } from '../data/content'
import { tariffPlans, brandPartners } from '../data/plans'

// Hero Slides with background images matching Alliance Broadband
const heroSlides = [
  // {
  //   id: 1,
  //   image: '/images/hero/b8.png',
  //   tagline: 'Truly Unlimited High-Speed Plans',
  //   title: 'Experience Limitless Entertainment with High-Speed Fibre',
  //   subtitle:
  //     'Where Gigabit speed meets ultimate reliability. Enjoy buffering-free 4K streaming, 35+ bundled OTT apps, and truly unlimited data with zero speed drops.',
  //   primaryBtn: { text: 'TARIFF PLANS', link: '#plans' },
  //   secondaryBtn: { text: 'GET OUR APP', link: 'https://pay2abs.alliancebroadband.in/' },
  //   floatBadge: 'Download Now!',
  //   badgeHighlight: '35+ OTT APPS',
  // },
  {
    id: 2,
    image: '/images/hero/b0.png',
    tagline: 'Comprehensive Surveillance & Safety',
    title: 'Stay Secure with SNET Suraksha 4K CCTV & Intercom',
    subtitle:
      'AI-powered day/night colour surveillance, multi-apartment guard intercom, and automated fire protection for housing societies, campuses, and offices.',
    primaryBtn: { text: 'EXPLORE SURAKSHA', link: '/services' },
    secondaryBtn: { text: 'REQUEST DEMO', link: '/contact' },
    floatBadge: 'Find Now!',
    badgeHighlight: '4K AI VISION',
  },
  {
    id: 3,
    image: '/images/hero/b3.png',
    tagline: 'Carrier-Grade Optical Connectivity',
    title: 'Truly Unlimited Symmetrical Fibre Up to 1 Gbps',
    subtitle:
      'Direct optical fiber to your home and office (FTTH). Symmetrical upload and download speeds designed for intensive gaming, creators, and work from home.',
    primaryBtn: { text: 'TARIFF PLANS', link: '#plans' },
    secondaryBtn: { text: 'VIEW OFFERS', link: '#promo' },
    floatBadge: 'Find Your Plan',
    badgeHighlight: 'NO FUP LIMIT',
  },
  // {
  //   id: 4,
  //   image: '/images/hero/b5.png',
  //   tagline: 'Enterprise Leased Lines',
  //   title: 'Transform your Business with Dedicated 1:1 Bandwidth',
  //   subtitle:
  //     'Zero packet loss, low latency peering, 99.98% guaranteed SLA uptime, and 24x7 enterprise NOC monitoring for mission-critical enterprise operations.',
  //   primaryBtn: { text: 'ENTERPRISE SOLUTIONS', link: '/solutions' },
  //   secondaryBtn: { text: 'TALK TO NOC', link: '/contact' },
  //   floatBadge: 'Connect Now!',
  //   badgeHighlight: '99.98% SLA',
  // },
  // {
  //   id: 5,
  //   image: '/images/hero/b7.png',
  //   tagline: 'Smart Living & Campus Mesh',
  //   title: 'Make your TV Smart with SNET 4K Android Box',
  //   subtitle:
  //     'Convert any standard television into a modern smart entertainment hub with 600+ live TV channels, Google Assistant, and high-density Wi-Fi 6.',
  //   primaryBtn: { text: 'SMART DEVICES', link: '/products' },
  //   secondaryBtn: { text: 'TARIFF PLANS', link: '#plans' },
  //   floatBadge: 'Explore More!',
  //   badgeHighlight: 'WI-FI 6 READY',
  // },
]

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeTab, setActiveTab] = useState('All')
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPromoOpen, setIsPromoOpen] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  // Auto-open promotional popup banner after 1.2s on page load (Alliance Broadband style)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPromoOpen(true)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  // Auto-advance hero slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6500)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  // Filter tariff plans based on tab
  const filteredPlans = tariffPlans.filter((plan) => {
    if (activeTab === 'All') return true
    if (activeTab === 'Residential') return plan.category === 'Residential Fibre'
    if (activeTab === 'Business') return plan.category === 'Business & Leased Line'
    if (activeTab === 'Suraksha') return plan.category === 'Suraksha & Security'
    return true
  })

  const openPlanDetails = (plan) => {
    setSelectedPlan(plan)
    setIsModalOpen(true)
  }

  return (
    <div className="relative overflow-hidden bg-white text-slate-800">
      {/* ---------------------------------------------------------------- */}
      {/* 1. ALLIANCE BROADBAND-STYLE HERO SLIDER WITH CLEAR ZOOMING IMAGE */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative min-h-[560px] sm:min-h-[640px] lg:min-h-[700px] overflow-hidden bg-slate-950 flex items-center">
        {/* Background Zooming Image Layer (100% CLEAR - NO OVERLAYS OR LAYERS) */}
        <AnimatePresence mode="sync">
          <motion.div
            key={activeSlide}
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1.15, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              scale: { duration: 7, ease: [0.25, 0.1, 0.25, 1] },
              opacity: { duration: 0.5 },
            }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroSlides[activeSlide].image})`,
            }}
          />
        </AnimatePresence>

        {/* Content Container (Left-aligned, unobstructed clear view) */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.45 }}
              >
                {/* Eyebrow badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/50 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-300 shadow-xl">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />
                  {heroSlides[activeSlide].tagline}
                </div>

                {/* Main Title with text drop shadow for maximum clarity */}
                <h1 className="mt-5 font-display text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.12] text-white text-balance drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                  {heroSlides[activeSlide].title}
                </h1>

                {/* Subtitle */}
                <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-white font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                  {heroSlides[activeSlide].subtitle}
                </p>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {heroSlides[activeSlide].primaryBtn.link.startsWith('#') ? (
                    <a
                      href={heroSlides[activeSlide].primaryBtn.link}
                      className="rounded-full bg-[#fc9144] px-8 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-2xl hover:bg-[#ea7e30] transition hover:scale-105 active:scale-95"
                    >
                      {heroSlides[activeSlide].primaryBtn.text} <FiArrowRight className="inline ml-1" />
                    </a>
                  ) : (
                    <Link
                      to={heroSlides[activeSlide].primaryBtn.link}
                      className="rounded-full bg-[#fc9144] px-8 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-2xl hover:bg-[#ea7e30] transition hover:scale-105 active:scale-95"
                    >
                      {heroSlides[activeSlide].primaryBtn.text} <FiArrowRight className="inline ml-1" />
                    </Link>
                  )}

                  {heroSlides[activeSlide].secondaryBtn.link.startsWith('http') ? (
                    <a
                      href={heroSlides[activeSlide].secondaryBtn.link}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border-2 border-white bg-black/40 backdrop-blur-md px-7 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-2xl hover:bg-white hover:text-slate-900 transition hover:scale-105 active:scale-95"
                    >
                      {heroSlides[activeSlide].secondaryBtn.text}
                    </a>
                  ) : (
                    <Link
                      to={heroSlides[activeSlide].secondaryBtn.link}
                      className="rounded-full border-2 border-white bg-black/40 backdrop-blur-md px-7 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-2xl hover:bg-white hover:text-slate-900 transition hover:scale-105 active:scale-95"
                    >
                      {heroSlides[activeSlide].secondaryBtn.text}
                    </Link>
                  )}
                </div>

                {/* Alliance-style Floating Bottom Badge */}
                <div className="mt-10 inline-flex items-center gap-3 rounded-full bg-black/50 backdrop-blur-md border border-white/20 px-4 py-2 text-xs font-bold tracking-wide text-white shadow-xl">
                  <span className="rounded bg-sky-500/90 px-2.5 py-0.5 text-white font-mono text-[11px] font-bold">
                    {heroSlides[activeSlide].badgeHighlight}
                  </span>
                  <span className="animate-bounce text-amber-300 font-black">
                    {heroSlides[activeSlide].floatBadge}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Navigation Controls (Alliance Broadband style) */}
          <div className="mt-12 flex items-center justify-between border-t border-white/20 pt-6">
            <div className="flex items-center gap-2">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeSlide === idx
                      ? 'w-8 bg-[#fc9144] shadow-md'
                      : 'w-2.5 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/40 backdrop-blur-md text-white shadow-lg transition hover:bg-white hover:text-slate-900 active:scale-95"
                aria-label="Previous Slide"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/40 backdrop-blur-md text-white shadow-lg transition hover:bg-white hover:text-slate-900 active:scale-95"
                aria-label="Next Slide"
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 2. ALLIANCE QUICK HIGHLIGHTS / FEATURE ONE (Light Mode)          */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative z-10 -mt-8 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-slate-200/90 bg-white p-5 shadow-xl sm:grid-cols-4 sm:p-7">
          {[
            {
              icon: FiWifi,
              color: 'text-sky-600',
              bgColor: 'bg-sky-50',
              title: 'Truly Unlimited',
              desc: 'No FUP or Data Throttling',
            },
            {
              icon: MdSpeed,
              color: 'text-blue-600',
              bgColor: 'bg-blue-50',
              title: 'Symmetrical 1 Gbps',
              desc: 'Equal Upload & Download',
            },
            {
              icon: FiShield,
              color: 'text-amber-600',
              bgColor: 'bg-amber-50',
              title: 'SNET Suraksha',
              desc: '4K CCTV & Fire Safety',
            },
            {
              icon: FaHeadset,
              color: 'text-emerald-600',
              bgColor: 'bg-emerald-50',
              title: '24/7 NOC Support',
              desc: 'Instant On-Site Response',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3.5 border-slate-100 sm:border-r last:border-r-0 px-2"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.bgColor} border border-slate-100`}
              >
                <item.icon className={`text-2xl ${item.color}`} />
              </div>
              <div>
                <div className="font-display text-sm font-bold text-slate-900">{item.title}</div>
                <div className="text-[11px] text-slate-500 font-medium">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 3. ABOUT ONE / LEGACY OF TRUST (Light Mode)                      */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          {/* Left Visual Box (imground) */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-blue-50 p-8 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-700">
                    Unified Infrastructure Backbone
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">EST. 2012</span>
                </div>

                <div className="my-6 space-y-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="text-xs font-bold text-slate-500 uppercase">Total Deployments</div>
                    <div className="mt-1 font-display text-3xl font-black text-slate-900">
                      500+ <span className="text-sm font-semibold text-slate-500">Premises Online</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="font-black text-slate-900 text-base">99.98% SLA</div>
                      <div className="mt-0.5 text-slate-500 font-medium">Fibre Ring Uptime</div>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="font-black text-slate-900 text-base">&lt; 2 Hours</div>
                      <div className="mt-0.5 text-slate-500 font-medium">Field MTTR Target</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-sky-100 px-4 py-3 text-xs text-sky-800 font-bold border border-sky-200">
                  <span>Category-A High-Speed Standards</span>
                  <span>Certified Crew</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Text Block */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="section-title text-left">
                <span className="inline-block rounded-full bg-sky-100 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-sky-800 border border-sky-200">
                  Legacy of Trust
                </span>
                <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight text-slate-900 sm:text-4xl">
                  12+ YEARS OF EXCELLENCE IN NETWORKING & SECURITY
                </h2>
              </div>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
                {company.fullName} carries with it a longstanding legacy of trust, built on engineering
                professionalism, high-capacity optical fiber networks, and total accountability for
                every wire, camera, access point, and fire sensor installed on site.
              </p>

              {/* Bullet Points with Arrow Icons (matching Alliance's list) */}
              <ul className="mt-6 space-y-3.5">
                {[
                  'Infotainment & 35+ Bundled OTT Subscriptions',
                  'Over a Decade of Dedicated Infrastructure Service',
                  'Fast, Dependable & Symmetrical Fibre Optics',
                  'Minimum Downtime with Dual-Path Redundancy',
                  'Truly Unlimited Data Policies with Zero Throttling',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      <FiArrowRight size={12} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-4">
                <Link to="/about" className="btn-primary !px-7 !py-3.5 text-xs font-bold uppercase">
                  Discover More
                </Link>
                <Link to="/contact" className="btn-outline !px-7 !py-3.5 text-xs font-bold uppercase">
                  Get a Quote
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 4. WHY CHOOSE ONE / OUR BENEFITS (Alliance Broadband Light Style)*/}
      {/* ---------------------------------------------------------------- */}
      <section className="border-y border-slate-200 bg-[#f4f8fb] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Top Title & Text */}
          <div className="grid grid-cols-1 items-end gap-6 sm:grid-cols-2 pb-14 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                our benefits
              </span>
              <h2 className="mt-2 font-display text-3xl font-black uppercase leading-tight text-slate-900 sm:text-4xl">
                UNLIMITED INTERNET & COMPLETE SECURITY PROVIDER
              </h2>
            </div>
            <div>
              <p className="text-sm leading-relaxed text-slate-600 font-medium">
                {company.name} boasts of providing high-speed unlimited internet service at exceptional
                speeds. Regardless of the plan you choose, you can say goodbye to speed dips, buffering,
                and connectivity issues with our optical backbone.
              </p>
            </div>
          </div>

          {/* 6 Benefits Grid (Matching Alliance's 6 icon boxes) */}
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {[
              {
                icon: FiPhone,
                title: 'Phone & Intercom',
                desc: 'EPABX & IP-PBX systems',
                color: 'text-sky-600',
                bg: 'bg-sky-50',
              },
              {
                icon: FaTv,
                title: 'Limitless Fun',
                desc: '4K Streams & OTT apps',
                color: 'text-purple-600',
                bg: 'bg-purple-50',
              },
              {
                icon: MdSpeed,
                title: 'Ultra Fast',
                desc: 'Up to 1000 Mbps fibre',
                color: 'text-amber-600',
                bg: 'bg-amber-50',
              },
              {
                icon: FiWifi,
                title: 'Minimum Downtime',
                desc: 'Dual-path optical mesh',
                color: 'text-emerald-600',
                bg: 'bg-emerald-50',
              },
              {
                icon: FiZap,
                title: 'OTT Packages',
                desc: '35+ streaming platforms',
                color: 'text-blue-600',
                bg: 'bg-blue-50',
              },
              {
                icon: FaHeadset,
                title: '24/7 Support',
                desc: 'Direct helpline & NOC desk',
                color: 'text-rose-600',
                bg: 'bg-rose-50',
              },
            ].map((box, i) => (
              <Reveal key={box.title} delay={i * 0.06}>
                <div className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-400 hover:shadow-xl">
                  <div
                    className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${box.bg} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <box.icon className={`text-2xl ${box.color}`} />
                  </div>
                  <h3 className="mt-4 font-display text-sm font-bold text-slate-900">{box.title}</h3>
                  <p className="mt-1 text-[11px] text-slate-500 font-medium">{box.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 5. EXPERIENCE BANNER / SAVE MONEY BANNER                         */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-r from-[#003b70] via-[#00579e] to-[#0072ce] text-white shadow-xl">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="rounded-full bg-white/20 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-white">
                Welcome to {company.name}
              </span>
              <h2 className="mt-4 font-display text-2xl font-black uppercase leading-snug text-white sm:text-3xl lg:text-4xl text-balance">
                Experience limitless entertainment with {company.name} where speed meets reliability for an
                unmatched online experience!
              </h2>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#plans"
                  className="rounded-full bg-[#fc9144] px-7 py-3.5 text-xs uppercase font-black text-white shadow-lg hover:bg-[#ea7e30] transition hover:scale-105"
                >
                  Let’s Get Started
                </a>
                <a
                  href={`https://wa.me/${company.whatsapp}?text=Hello%20SNET,%20I%20want%20to%20get%20started.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-xs font-bold uppercase text-white hover:bg-white/20 transition"
                >
                  <FaWhatsapp className="text-sm" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Video Modal Trigger */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="group relative flex h-20 w-20 items-center justify-center rounded-full bg-white text-blue-700 shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95"
                aria-label="Watch video"
              >
                <span className="absolute -inset-2 animate-ping rounded-full bg-white/30" />
                <FiPlay size={26} className="ml-1" />
              </button>
              <div className="mt-4 font-display text-sm font-bold text-white">Watch Overview</div>
              <div className="text-xs text-blue-100">SNET Operations & Network Tour</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 6. BRAND PARTNERS & OTT ECOSYSTEM (Light Mode)                   */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-b border-slate-200 bg-white py-12 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Bundled OTT Platforms & Enterprise Tech Partners
          </span>
        </div>

        {/* Infinite Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee flex items-center gap-6">
            {[...brandPartners, ...brandPartners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-3 shrink-0 hover:border-sky-400 hover:shadow-md transition-all"
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${partner.color} text-xs font-black text-white shadow`}
                >
                  {partner.name.substring(0, 2).toUpperCase()}
                </span>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-800">{partner.name}</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                    {partner.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 7. ALLIANCE BROADBAND-STYLE TARIFF PLANS (Light Mode #f1feff)   */}
      {/* ---------------------------------------------------------------- */}
      <section id="plans" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 bg-[#f8fafc]">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-sky-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-sky-800 border border-sky-200">
            TARIFF PLANS
          </span>
          <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight text-slate-900 sm:text-4xl">
            Choose Your High-Speed Fibre & Suraksha Plan
          </h2>
          <p className="mt-3 text-sm text-slate-600 font-medium">
            Truly unlimited data, no speed dips, zero hidden costs, and bundled entertainment.
          </p>
        </Reveal>

        {/* Tab Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'All', label: 'All Plans' },
            { id: 'Residential', label: 'Home Fibre & OTT' },
            { id: 'Business', label: 'Business & Leased Line' },
            { id: 'Suraksha', label: 'Suraksha & CCTV' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                  : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tariff Cards Grid (Matching Alliance Broadband's #f1feff cards) */}
        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredPlans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.05}>
              <div
                className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#c4eef8] bg-[#f1feff] p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-sky-400 hover:shadow-xl"
              >
                {/* Alliance-style Ribbon in Corner */}
                {plan.ribbon && (
                  <div className="absolute right-0 top-0">
                    <div
                      className={`rounded-bl-xl ${plan.ribbonColor || 'bg-[#fc9144]'} px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-sm`}
                    >
                      {plan.ribbon}
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div>
                  <h3 className="font-display text-xl font-black uppercase tracking-tight text-slate-900">
                    {plan.name}
                  </h3>
                  <div className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-sky-100/70 border border-sky-200/60 px-2.5 py-1 text-xs font-bold text-sky-800">
                    <FiWifi className="text-sky-600" />
                    <span>{plan.speedBadge}</span>
                  </div>

                  {/* Specs: Validity & Data (Exact Alliance Broadband layout) */}
                  <div className="mt-6 grid grid-cols-2 gap-3 border-y border-slate-200/80 py-4">
                    <div>
                      <div className="text-[11px] font-bold uppercase text-slate-500">Validity</div>
                      <div className="mt-0.5 text-sm font-black text-slate-900">{plan.validity}</div>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase text-slate-500">Data Limit</div>
                      <div className="mt-0.5 text-sm font-black text-sky-800">{plan.data}</div>
                    </div>
                  </div>

                  {/* Bundled OTT Badges Preview */}
                  <div className="py-4">
                    {plan.subscriptions && plan.subscriptions.length > 0 ? (
                      <div className="flex flex-wrap items-center gap-1.5">
                        {plan.subscriptions.slice(0, 3).map((s) => (
                          <span
                            key={s}
                            className="rounded bg-white px-2 py-0.5 text-[10px] font-bold text-slate-700 border border-slate-200 shadow-2xs"
                          >
                            {s}
                          </span>
                        ))}
                        {plan.subscriptions.length > 3 && (
                          <span className="text-[10px] font-black text-sky-700">
                            +{plan.subscriptions.length - 3} More
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="text-xs text-slate-500 font-medium">OTT available as Add-on</div>
                    )}
                  </div>
                </div>

                {/* Price & Action Buttons */}
                <div className="border-t border-slate-200/80 pt-5">
                  <div className="flex items-baseline gap-1 font-display">
                    <span className="text-3xl font-black text-slate-900">{plan.price}</span>
                    <span className="text-xs font-semibold text-slate-500">{plan.priceSubtitle}</span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-md transition hover:scale-[1.02]"
                    >
                      Subscribe
                    </Link>
                    <button
                      onClick={() => openPlanDetails(plan)}
                      className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-xs transition hover:bg-slate-50 hover:border-sky-400"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* View All Plans CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-sky-400/60 bg-sky-50 px-8 py-3.5 text-xs font-black uppercase tracking-wider text-sky-700 transition hover:bg-sky-100"
          >
            Explore All 9 Network Services <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 8. MAKE YOUR TV SMART / SNET SURAKSHA BOX (Save Money 2)         */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-10 rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 to-blue-50 p-8 sm:p-12 lg:grid-cols-12 shadow-md">
            <div className="lg:col-span-8">
              <span className="text-xs font-black uppercase tracking-wider text-sky-700">
                Get Extra Benefits
              </span>
              <h2 className="mt-3 font-display text-2xl font-black uppercase leading-tight text-slate-900 sm:text-3xl">
                Make your TV Smart with our 4K Android Box & Suraksha Integration
              </h2>
              <p className="mt-3 text-sm text-slate-600 font-medium leading-relaxed">
                Transform any standard television into an advanced entertainment hub with Google Assistant,
                600+ live TV channels, 35+ OTT streaming apps, and real-time CCTV camera monitoring on screen.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link to="/products" className="btn-primary !px-6 !py-3 text-xs font-bold uppercase">
                  Know More...
                </Link>
                <Link to="/contact" className="btn-outline !px-6 !py-3 text-xs font-bold uppercase">
                  Order Device
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="flex h-32 w-32 items-center justify-center rounded-3xl border border-sky-200 bg-white shadow-xl">
                <FaTv className="text-6xl text-sky-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 9. REAL-WORLD PROJECTS SHOWCASE (Light Mode)                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 bg-white">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
            PROVEN TRACK RECORD
          </span>
          <h2 className="mt-2 font-display text-3xl font-black uppercase text-slate-900 sm:text-4xl">
            Our Enterprise & Society Projects
          </h2>
          <p className="mt-3 text-sm text-slate-600 font-medium">
            A sample of active campuses and residential complexes running on {company.name} infrastructure today.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-xs transition-all hover:border-sky-400 hover:shadow-md hover:-translate-y-1">
                <div>
                  <h3 className="font-display text-base font-bold text-slate-900">{p.name}</h3>
                  <p className="mt-1.5 text-xs text-slate-500 font-medium">{p.scope}</p>
                </div>
                <span className="shrink-0 rounded-full border border-sky-300 bg-sky-100 px-3 py-1 text-[11px] font-bold text-sky-800">
                  {p.type}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 10. ALLIANCE BROADBAND-STYLE FLOATING APP WIDGET (Light Mode)    */}
      {/* ---------------------------------------------------------------- */}
      {/* <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 p-3.5 shadow-2xl backdrop-blur-xl transition hover:scale-105">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
            <FaQrcode size={26} />
          </div>
          <div className="text-left pr-2">
            <div className="text-xs font-black uppercase text-slate-900">SNET Mobile App</div>
            <div className="text-[10px] text-slate-500 font-medium">Instant Recharge & NOC Desk</div>
            <a
              href="https://pay2abs.alliancebroadband.in/"
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center gap-1 text-[10px] font-bold text-[#fc9144] hover:underline"
            >
              Recharge Online <FiExternalLink />
            </a>
          </div>
        </div>
      </div> */}

      {/* Floating Offer Pill to Re-open Promo Banner Anytime */}
      <button
        onClick={() => setIsPromoOpen(true)}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-amber-500 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-xl hover:scale-105 transition"
      >
        <FiGift className="text-base animate-bounce" />
        <span>Special Offers</span>
      </button>

      {/* Promotional Popup Banner (Alliance Broadband style) */}
      <PromoBannerModal
        isOpen={isPromoOpen}
        onClose={() => setIsPromoOpen(false)}
      />

      {/* Plan Details Modal */}
      <PlanDetailsModal
        plan={selectedPlan}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Video / Operations Overview Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoModalOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-xl rounded-3xl border border-sky-200 bg-white p-6 shadow-2xl"
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute right-4 top-4 rounded-full border border-slate-200 bg-slate-100 p-2 text-slate-600 hover:text-slate-900"
              >
                <FiX size={18} />
              </button>
              <h3 className="text-lg font-black text-slate-900 uppercase">
                SNET Operations & Network Tour
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Experience high-capacity optical fiber splicing, 4K CCTV NVR setup, and 24x7 NOC monitoring.
              </p>
              <div className="mt-5 aspect-video w-full rounded-2xl bg-slate-900 flex items-center justify-center border border-slate-800 text-center p-6 text-white">
                <div>
                  <FiPlay className="mx-auto text-4xl text-sky-400 animate-pulse" />
                  <div className="mt-3 text-sm font-bold">Interactive NOC Overview</div>
                  <div className="mt-1 text-xs text-slate-400">
                    Carrier-grade dual-path redundant fibre rings with 99.98% SLA
                  </div>
                </div>
              </div>
              <div className="mt-5 flex justify-end">
                <Link
                  to="/contact"
                  onClick={() => setIsVideoModalOpen(false)}
                  className="btn-primary !px-5 !py-2.5 text-xs font-bold uppercase"
                >
                  Schedule Site Survey
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom CTA Band */}
      <CtaBand />
    </div>
  )
}
