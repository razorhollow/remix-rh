import { motion } from 'framer-motion'
import { MapPinIcon, BuildingOfficeIcon, TruckIcon, HeartIcon } from '@heroicons/react/24/outline'

const serviceAreas = [
  {
    name: 'Buffalo & Western NY',
    description: 'On-site service with deep local market expertise. From downtown corporate offices to manufacturing facilities, we know the Western NY business landscape.',
    highlights: ['Corporate headquarters', 'Manufacturing sector', 'Healthcare systems', 'Growing tech scene'],
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Rochester & Finger Lakes',
    description: 'Serving the heart of upstate innovation. Home to world-class technology companies, universities, and a thriving entrepreneurial ecosystem.',
    highlights: ['Tech corridor growth', 'University partnerships', 'Innovation district', 'Advanced manufacturing'],
    icon: MapPinIcon,
  },
  {
    name: 'Syracuse & Central NY',
    description: 'Tech Hub designation brings unprecedented opportunities. We help businesses capitalize on federal investment and regional growth initiatives.',
    highlights: ['Federal Tech Hub', 'Regional business center', 'Transportation hub', 'Emerging markets'],
    icon: HeartIcon,
  },
  {
    name: 'Extended Coverage',
    description: 'Professional service throughout the corridor including Binghamton, Jamestown, and surrounding communities. Distance is never a barrier to quality.',
    highlights: ['Flexible travel', 'Regional expertise', 'Competitive rates', 'Professional standards'],
    icon: TruckIcon,
  },
]

export default function ServiceAreas() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Proudly Serving Upstate New York
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Professional film production and web development across the Buffalo-Rochester-Syracuse corridor. 
            Local expertise, regional commitment, professional standards everywhere we serve.
          </p>
        </motion.div>

        {/* Service Areas Grid */}
        <motion.div 
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          initial={{opacity: 0, y: 24}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.2}}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {serviceAreas.map((area, index) => (
              <motion.div 
                key={area.name} 
                className="flex flex-col"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.1 * (index + 1)}}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pine">
                    <area.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {area.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{area.description}</p>
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Markets:</h4>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-600">
                      {area.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-pine mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>

        {/* Commitment Statement */}
        <motion.div 
          className="mx-auto mt-16 max-w-2xl text-center lg:mt-24"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.4}}
        >
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Regional Commitment</h3>
            <p className="text-base leading-7 text-gray-600 mb-6">
              We&apos;re not just service providers—we&apos;re invested community members. Our success is tied to the growth 
              and prosperity of upstate New York businesses. Every project strengthens our regional economy.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-pine">Same-Day</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pine">100+ Miles</div>
                <div className="text-sm text-gray-600">Service Radius</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pine">Local</div>
                <div className="text-sm text-gray-600">Market Expertise</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-16 flex items-center justify-center gap-x-6"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.5}}
        >
          <a
            href="/contact"
            className="rounded-md bg-pine px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:text-gray-200 hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Get Local Service
          </a>
          <a href="tel:+1234567890" className="text-sm font-semibold text-gray-900">
            Call Now <span aria-hidden="true">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </div>
  )
}