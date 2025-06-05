import { motion, useScroll, useTransform } from "framer-motion"

// TODO: Replace with professional video production image
// Suggestions: RED Epic setup, professional filming environment, or technical workspace
import imageAssetUrl from 'app/assets/professional-video-setup.webp' // Replace guide-photo.webp

export default function WhyChooseRazorhollow() {

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])

  return (
    <div className="w-full overflow-hidden" id='why-choose'>
      <div className="relative bg-gray-900/80 text-white px-6 py-24 sm:py-32 lg:px-8">
        <motion.div 
          style={{ y, backgroundImage: `url(${imageAssetUrl})` }}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[-1]"
        />
        <motion.div 
          className="mx-auto max-w-4xl text-center sm:px-2 lg:pt-20" 
          initial={{opacity:0 }} whileInView={{opacity:1}} 
          transition={{duration: 0.5, delay: 0.1}}
        >
          <h2 className="text-4xl font-bold sm:text-6xl">Experience You Can Trust</h2>
          <p className="mt-12 text-xl leading-8 text-gray-100 max-w-[750px] mx-auto">
            Film production since 2015. Currently active in legal videography where precision isn&apos;t optional—it&apos;s essential. 
            Web development expertise for complete digital solutions. Professional equipment and standards that deliver results 
            for upstate New York businesses ready to stand out.
          </p>
          {/* Credibility Points */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            <motion.div 
              className="text-center"
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.3}}
            >
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Film Production Since 2015</h3>
              <p className="mt-2 text-sm text-gray-300">Original expertise and passion, enhanced by years of experience</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.4}}
            >
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold"><a href="https://www.csrcourtreporting.com" className="text-blue-100 hover:text-gray-300">Legal-Grade Precision</a></h3>
              <p className="mt-2 text-sm text-gray-300">Current legal videography work ensures reliability and professional standards</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.5}}
            >
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                  </svg>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Web Development Expertise</h3>
              <p className="mt-2 text-sm text-gray-300">Custom development that showcases your video content perfectly</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.6}}
            >
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                  </svg>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Professional Equipment</h3>
              <p className="mt-2 text-sm text-gray-300">RED Epic, Blackmagic Cinema cameras, broadcast-quality gear</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.7}}
            >
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Upstate NY Commitment</h3>
              <p className="mt-2 text-sm text-gray-300">Dedicated to Buffalo→Syracuse→Elmira/Corning corridor business success</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.8}}
            >
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Integration Advantage</h3>
              <p className="mt-2 text-sm text-gray-300">Only local provider excelling at both film and web development</p>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="mt-16 mb-8"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.9}}
          >
            <a
              href="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Start Your Project
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}