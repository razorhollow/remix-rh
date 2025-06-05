import { Link } from '@remix-run/react'
import { motion } from 'framer-motion'

// Icons - you can replace these with actual icon components if you prefer
const FilmIcon = () => (
  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-pine to-green-600">
    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  </div>
)

const WebIcon = () => (
  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-goldenrod to-amber-500">
    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
  </div>
)

const IntegratedIcon = () => (
  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-purple-700">
    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  </div>
)

export default function ServiceOverview() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Complete Digital Storytelling</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Professional film production and custom web development designed to work together perfectly. 
            The only upstate NY provider excelling at both services.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          initial={{opacity: 0, y: 24}}
          whileInView={{ y: 0, opacity: 1}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            
            {/* Film Production - Primary Service */}
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <FilmIcon />
                Film Production
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Professional video production with legal-grade precision. Corporate stories, training videos, 
                  and brand content using RED Epic and Blackmagic Cinema cameras.
                </p>
                <div className="mt-6">
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Corporate & brand storytelling</li>
                    <li>• Training and educational content</li>
                    <li>• Product demonstrations</li>
                    <li>• Executive communications</li>
                    <li>• Legal videography standards</li>
                  </ul>
                </div>
              </dd>
            </div>

            {/* Web Development - Complementary Service */}
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <WebIcon />
                Web Development
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Custom websites optimized for video content. Seamless integration, fast loading, 
                  and conversion-focused design that showcases your films perfectly.
                </p>
                <div className="mt-6">
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Video-optimized custom development</li>
                    <li>• Mobile-responsive design</li>
                    <li>• SEO and performance optimization</li>
                    <li>• Content management systems</li>
                    <li>• Analytics and conversion tracking</li>
                  </ul>
                </div>
              </dd>
            </div>

            {/* Integrated Services - Unique Advantage */}
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <IntegratedIcon />
                Integrated Services
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Complete packages where film and web are designed together from day one. 
                  Single team, unified vision, better results than separate vendors.
                </p>
                <div className="mt-6">
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Brand launch packages</li>
                    <li>• Product marketing campaigns</li>
                    <li>• Training program portals</li>
                    <li>• 15-20% cost savings vs. separate vendors</li>
                    <li>• Faster timelines, unified messaging</li>
                  </ul>
                </div>
              </dd>
            </div>

          </dl>
        </motion.div>

        {/* Call to Action */}
        <div className="mt-16 flex items-center justify-center gap-x-6">
          <Link
            to="/services"
            className="rounded-md bg-pine px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:text-gray-200 hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            View All Services
          </Link>
          <a href="/contact" className="text-sm font-semibold text-gray-900">
            Start Your Project <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}