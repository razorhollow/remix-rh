import {motion} from "framer-motion"

export default function Example() {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <motion.div 
        className="mx-auto max-w-4xl text-center" 
        initial={{opacity:0 }} whileInView={{opacity:1}} 
        transition={{duration: 0.5, delay: 0.1}}
      >
        <h2 className="text-4xl font-bold text-gray-900 sm:text-6xl">Expertise from One of Your Own</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
        I&#39;m not just a marketer; I&#39;m a guide by trade and a storyteller by passion. Sharing your world is second nature to me because I live in it. With your mission at heart and the latest trends at my fingertips, I&#39;m here to champion your brand towards visibility and beyond.
        </p>
      </motion.div>
    </div>
  )
}
