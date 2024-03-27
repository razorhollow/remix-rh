import { CodeBracketIcon, VideoCameraIcon, ChartBarIcon, PhotoIcon } from '@heroicons/react/24/outline'

import MarketingLottie from 'app/assets/SocialMediaMarketing'

const features = [
  {
    name: 'Full Stack Web Development',
    description:
      'Weaving the wilderness of the web with cutting-edge technology, our full stack web development service crafts robust, seamless websites that captivate and engage your audience',
    icon: CodeBracketIcon,
  },
  {
    name: 'Marketing Strategy',
    description:
      'Navigate the market currents with our marketing strategy services, designed to spotlight your outdoor brand and connect deeply with your adventurous audience.',
    icon: ChartBarIcon,
  },
  {
    name: 'Video Production',
    description:
      'Caputure the essence of the great outdoors with breathtaking video content that tells your unique story and brings your brand to life.',
    icon: VideoCameraIcon,
  },
  {
    name: 'Photography',
    description:
      "Through our lens, every snapshot becomes a portal to the outdoors, showcasing the authentic beauty of nature and your brand's spirit of adventure",
    icon: PhotoIcon,
  },
]

export default function FeatureSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Services Built for the Great Outdoors
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">Our suite of services is crafted for the rugged individualist and the communal campfire alike:</p>
            <MarketingLottie />
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-stone">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
