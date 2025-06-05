import { 
  MagnifyingGlassIcon, 
  VideoCameraIcon, 
  LinkIcon, 
  RocketLaunchIcon 
} from '@heroicons/react/24/outline'

import MarketingLottie from 'app/assets/SocialMediaMarketing'

const processSteps = [
  {
    name: 'Discovery & Strategy',
    description:
      'Deep dive into your business goals, audience psychology, and revenue objectives. We apply science-backed storytelling principles to develop narratives that drive specific business outcomes, not just engagement.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Strategic Production',
    description:
      'Every creative decision serves your revenue goals. Hollywood-quality cinema cameras and professional web development guided by proven storytelling methodology that converts viewers into customers.',
    icon: VideoCameraIcon,
  },
  {
    name: 'Revenue-Focused Integration',
    description:
      'Your video content and website work together using psychological triggers and conversion principles. Beautiful design meets behavioral science for measurable business results.',
    icon: LinkIcon,
  },
  {
    name: 'Launch & Optimization',
    description:
      'Data-driven launch with conversion tracking, performance analytics, and ongoing optimization. We measure what matters: leads generated, sales influenced, and revenue attributed.',
    icon: RocketLaunchIcon,
  },
]

export default function ProcessOverview() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How We Create Revenue-Driving Digital Stories
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Using science-backed storytelling methodology, our process creates digital assets that don&apos;t just look good—they translate directly to increased revenue:
            </p>
            <MarketingLottie />
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <div key={step.name}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-pine">
                    <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pine/10 text-sm font-semibold text-pine">
                      {index + 1}
                    </span>
                    {step.name}
                  </div>
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">{step.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}