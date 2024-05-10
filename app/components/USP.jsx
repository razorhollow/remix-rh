import { motion, useScroll, useTransform } from "framer-motion"

import imageAssetUrl from 'app/assets/guide-photo.jpg'

export default function USP() {

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])

  return (
    <div className="max-h-[70vh] overflow-hidden">
      <div className="relative bg-gray-900/80 text-white px-6 py-24 sm:py-32 lg:px-8">
        <motion.div 
          style={{ y, backgroundImage: `url(${imageAssetUrl})` }}
          className="absolute top-0 left-0 w-full h-[900px] min-h-[800px] lg:min-h-[700px] bg-cover bg-top z-[-1]"
        />
        <motion.div 
          className="mx-auto max-w-4xl text-center sm px-2 lg:pt-40" 
          initial={{opacity:0 }} whileInView={{opacity:1}} 
          transition={{duration: 0.5, delay: 0.1}}
        >
          <h2 className="text-4xl font-bold sm:text-6xl">Expertise from One of Your Own</h2>
          <p className="mt-12 text-xl leading-8 text-gray-100 max-w-[750px] mx-auto">
          I&#39;m not just a developer / filmmaker / marketer. I&#39;m a hunting and fishing guide by trade and a storyteller by passion. Sharing your world is second nature to me because I live in it. With your mission at heart and the latest trends at my fingertips, I&#39;m here to champion your brand towards visibility and beyond.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
