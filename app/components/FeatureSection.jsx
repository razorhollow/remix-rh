import { Link } from '@remix-run/react'
import { ClipboardDocumentCheckIcon, VideoCameraIcon, ScissorsIcon, MegaphoneIcon } from '@heroicons/react/24/outline'

const processSteps = [
  { name: 'Strategy first', description: 'Every package starts with planning so your message, audience, and offer are clear before cameras roll.', icon: ClipboardDocumentCheckIcon },
  { name: 'Efficient production', description: 'Lean shoot blocks, professional audio, and intentional b-roll to capture what your buyers need to see.', icon: VideoCameraIcon },
  { name: 'Conversion edits', description: 'Main films, cutdowns, and vertical deliverables that are ready for web, social, and paid placement.', icon: ScissorsIcon },
  { name: 'Built for distribution', description: 'We package the assets so your team can publish quickly and consistently across channels.', icon: MegaphoneIcon },
]

export default function ProcessOverview() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A premium production process without agency drag</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">You get senior-level creative direction, local execution, and assets your team can actually use.</p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          {processSteps.map((step) => (
            <div key={step.name} className="rounded-2xl border border-gray-200 p-6">
              <step.icon className="h-8 w-8 text-pine" aria-hidden="true" />
              <dt className="mt-4 text-lg font-semibold text-gray-900">{step.name}</dt>
              <dd className="mt-2 text-gray-600">{step.description}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-12 text-center">
          <Link to="/packages#compare" className="rounded-md bg-pine px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-600">Compare Packages</Link>
        </div>
      </div>
    </div>
  )
}
