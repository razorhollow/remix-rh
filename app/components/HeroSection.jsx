import { Link } from '@remix-run/react';

import { motion } from 'framer-motion';
// TODO: Replace with professional video equipment or business setup image
import heroAssetURL from 'app/assets/video-production-setup.webp' // Replace fly-fishing.webp

export default function HeroSection() {
  return (
<div className="relative isolate overflow-hidden pt-14">
        <img
          src={heroAssetURL}
          alt="Professional video production equipment"
          className="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            {/* Optional: Add a small badge or announcement here */}
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-300 ring-1 ring-white/10 hover:ring-white/20">
              Serving Buffalo → Rochester → Syracuse{' '}
              <a href="/contact" className="font-semibold text-white">
                <span className="absolute inset-0" aria-hidden="true" />
                Get Started <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <motion.div 
            className="text-center"
            initial={{opacity: 0 }}
            whileInView={{opacity: 1 }}
            transition={{ duration: 5.0, delay: 1.0 }}
          >
            <h1 
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
            >
              Professional Film Production + Web Development
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Complete digital storytelling for upstate NY businesses. Where professional video production meets custom web development—designed to work together perfectly.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact" 
                className="rounded-md bg-goldenrod px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-300"
              >
                Start Your Project
              </a>
              <Link to="services" className="text-sm font-semibold leading-6 text-white">
                View Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
  );
}