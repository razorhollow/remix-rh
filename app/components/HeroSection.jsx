import { Link } from '@remix-run/react'
import { motion } from 'framer-motion'
import heroAssetURL from 'app/assets/video-production-setup.webp'

export default function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden pt-14">
      <img src={heroAssetURL} alt="Commercial video production setup in Upstate New York" className="absolute inset-0 -z-10 h-full w-full object-cover brightness-50" />
      <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56 px-6">
        <motion.div className="text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2 }}>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-300">Commercial Video Production • Upstate NY</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">Commercial video packages built to win attention, leads, and trust.</h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">Razor Hollow helps local businesses across Buffalo, Rochester, Syracuse, and the Southern Tier launch polished video campaigns fast—with clear package pricing and deliverables.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/packages" className="rounded-md bg-goldenrod px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-300">View Packages</Link>
            <Link to="/contact?package=Growth" className="text-sm font-semibold leading-6 text-white">Book a Strategy Call <span aria-hidden="true">→</span></Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
