import { Link } from '@remix-run/react'
import { motion, stagger } from 'framer-motion'

import zla from 'app/assets/logos/zero-limit-adventures.png'
import foxHollow from 'app/assets/logos/Fox-Hollow.png'
import fowlplay from 'app/assets/logos/fowlplay.png'
import douglas from 'app/assets/logos/Douglas.png'
import retrieverRoadmap from 'app/assets/logos/retriever-roadmap.png'
import tailwater from 'app/assets/logos/tailwater.png'


export default function Clients() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Trusted by Trailblazers</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From rugged terrains to digital domains, our journey is marked by collaborations with some of the most dynamic and passionate brands and pros in the outdoor space.
            </p>
            <div className="mt-8 flex items-center gap-x-6">
              <Link
                to="about"
                className="rounded-md bg-pine px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:text-gray-200 hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Our Why
              </Link>
              <Link to="contact" className="text-sm font-semibold text-gray-900">
                Contact us <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <motion.div 
            className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none   lg:pl-8"
            initial={{opacity: 0, y: 24}}
            whileInView={{ y: 0, opacity: 1}}
          >
            <img
              className="max-h-20 w-full object-contain object-left"
              src={zla}
              alt="Zero Limit Adventures"
              width={105}
              height={48}
            />
            <img
              className="max-h-20 w-full object-contain object-left"
              src={foxHollow}
              alt="Fox Hollow Lodge"
              width={104}
              height={48}
            />
            <img
              className="max-h-8 w-full object-contain object-left"
              src={douglas}
              alt="Douglas Outdoors"
              width={140}
              height={48}
            />
            <img
              className="max-h-20 w-full object-contain object-left"
              src={fowlplay}
              alt="Fowl Play Waterfowl Guide Services"
              width={136}
              height={48}
            />
            <img
              className="max-h-20 w-full object-contain object-left pl-20"
              src={retrieverRoadmap}
              alt="Retriever Roadmap"
            />
            <img
              className="max-h-20 w-full object-contain object-left"
              src={tailwater}
              alt="Tailwater Lodge"
              width={147}
              height={48}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
