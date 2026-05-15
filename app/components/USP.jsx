import { motion } from 'framer-motion'
import { Link } from '@remix-run/react'
import imageAssetUrl from 'app/assets/professional-video-setup.webp'

export default function WhyChooseRazorhollow() {
  return (
    <div className="w-full overflow-hidden" id="why-choose">
      <div className="relative bg-gray-900/85 text-white px-6 py-24 sm:py-32 lg:px-8">
        <div style={{ backgroundImage: `url(${imageAssetUrl})` }} className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[-1]" />
        <motion.div className="mx-auto max-w-5xl text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h2 className="text-4xl font-bold sm:text-6xl">Three packages. Clear scope. Serious quality.</h2>
          <p className="mt-8 text-xl leading-8 text-gray-100">No bloated retainers. No vague deliverables. Choose Visibility, Growth, or Authority and get exactly what your campaign needs.</p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 text-left">
            {['Visibility from $1,500', 'Growth from $3,500', 'Authority from $8,500'].map((item) => (
              <div key={item} className="rounded-xl bg-white/10 p-6 ring-1 ring-white/20">
                <h3 className="text-lg font-semibold">{item}</h3>
                <p className="mt-2 text-sm text-gray-200">Built for local companies that need clean execution and measurable marketing assets.</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/contact?package=Authority" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100">Talk About Your Campaign</Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
