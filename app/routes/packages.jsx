import { Link } from '@remix-run/react'

const packages = [
  {
    id: 'visibility',
    name: 'Visibility',
    price: 'Starting at $1,500',
    audience: 'For businesses that need one polished promo.',
    includes: ['Planning call', 'Up to 3-hour shoot', '1 interview', 'B-roll coverage', '45–75 second main video', '1 vertical cut', 'Licensed music', 'Basic color/audio polish', '1 revision'],
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 'Starting at $3,500',
    audience: 'For businesses, programs, and events that need a campaign.',
    includes: ['Strategy call', 'Campaign concept', 'Half-day shoot', '1–2 interviews', '60–90 second main video', '30-second cutdown', '3 vertical reels', '5–10 social frame grabs', 'Basic caption copy', '2 revisions'],
  },
  {
    id: 'authority',
    name: 'Authority',
    price: 'Starting at $8,500',
    audience: 'For brands that want to become the obvious choice.',
    includes: ['Deeper strategy session', 'Full-day shoot or multiple shoot blocks', '3–5 interviews', '2–3 minute brand film', '60-second homepage cut', 'Ad cutdowns', '6–10 vertical clips', 'Testimonial clips', 'Caption pack', '2 revisions'],
  },
]

export const meta = () => [
  { title: 'Commercial Video Packages | Razor Hollow' },
  { name: 'description', content: 'Choose Visibility, Growth, or Authority commercial video packages for Upstate New York businesses.' },
]

export default function PackagesPage() {
  return (
    <main className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Commercial Video Packages</h1>
          <p className="mt-6 text-lg text-gray-600">Direct, high-quality production for businesses across Upstate New York. Pick the package that fits your next move.</p>
        </div>
        <section id="compare" className="mt-14 grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article key={pkg.id} id={pkg.id} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900">{pkg.name}</h2>
              <p className="mt-2 text-sm font-semibold text-pine">{pkg.price}</p>
              <p className="mt-4 text-gray-600">{pkg.audience}</p>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {pkg.includes.map((item) => <li key={item}>• {item}</li>)}
              </ul>
              <Link to={`/contact?package=${pkg.name}`} className="mt-8 inline-block rounded-md bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-700">I&apos;m Interested in {pkg.name}</Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}
