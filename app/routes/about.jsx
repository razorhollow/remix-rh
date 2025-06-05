import assetImgURL from '../assets/rob-reynolds-professional.webp' 
import videoProductionUrl from '../assets/video-production-setup.jpg' 
import beginImgUrl from '../assets/professional-workspace.webp' 
import BackgroundPattern from '../components/BackgroundPattern'

const stats = [
  { label: 'Years in film production', value: '10+' },
  { label: 'Businesses served', value: '150+' },
  { label: 'Projects completed', value: '500+' },
]

const values = [
  {
    name: 'Have a why',
    description:
      "Our driving force is our commitment to helping upstate NY businesses leverage professional film production and web development to achieve their goals. This mission is inspired by understanding the transformative power of complete digital storytelling. We help our clients not just to succeed but to thrive by creating digital assets that drive real business results.",
  },
  {
    name: 'Always be learning',
    description:
      'We embrace the philosophy that learning is an endless journey. In the ever-evolving landscape of film production and web development, staying curious and continuously seeking knowledge not only enhances our services but also enriches our ability to serve clients. We encourage continuous innovation in storytelling techniques, technical capabilities, and business strategy.',
  },
  {
    name: 'Do the right thing',
    description:
      "Integrity is the cornerstone of Razorhollow. We believe in doing the right thing, even when no one is watching. This value guides our interactions with clients, partners, and each other. Whether it's transparent communication, honest service delivery, or responsible business practices, our commitment to integrity ensures we build trust and maintain long-lasting relationships.",
  },
  {
    name: 'Go the extra mile',
    description:
      "Going the extra mile isn't just a cliche - it's essential to reaching our potential. Putting in that little bit more effort for friends, coworkers, clients, and yourself can have far-reaching impacts beyond what you may think. It could be as simple as lending a listening ear to someone going through tough times or investing those few remaining minutes after work into improving yourself; whatever shape this takes, always strive to leave your mark by making sure that people remember the value you bring them!",
  },
  {
    name: 'Anything worth doing is worth doing well',
    description:
      "We hold ourselves to a standard of excellence in everything we undertake. We believe that anything worth doing not only deserves effort but our best effort. This commitment to quality reflects in our film production, web development, and all services we provide. By consistently delivering work we're proud of, we help elevate our clients' brands to their highest potential.",
  },
  {
    name: 'Move with purpose',
    description:
    "Inspired by the ethos of our founder's father, we operate with a sense of urgency and purpose. This value is about more than speed; it's about deliberate, thoughtful action in everything we do. From the pace at which we tackle projects to the swift, purpose-driven approach we apply in problem-solving, moving with purpose is integral to our success and that of our clients.",
  },
]

export default function AboutPage() {
  return (
    <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <BackgroundPattern />
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#2CDB2C] to-pine opacity-30"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
    Hi, I&apos;m Rob Reynolds
  </h1>
  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
    I&apos;ve been creating professional video content since 2015, but my journey took an unexpected turn that made me uniquely qualified to serve upstate New York businesses.
  </p>
  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
    <span className="mt-4 text-lg md:text-xl leading-relaxed text-gray-900">Here&apos;s what happened:</span> I started Razorhollow as a film production company, passionate about storytelling through video. But when the market demanded web development more than video, I made a strategic decision—learn to build exceptional websites.
  </p>
  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
    <span className="mt-4 text-lg md:text-xl leading-relaxed text-gray-900">During this transition,</span> I kept my video skills sharp through legal videography work—depositions, court proceedings, situations where precision isn&apos;t optional. This experience taught me standards of reliability and technical excellence that now benefit every client.
  </p>
  <p className="mt-4 text-lg md:text-xl leading-relaxed">
    <span className="text-gray-900">Today, I&apos;m returning to my film production roots—but enhanced.</span> Razorhollow now offers something unique in upstate NY: professional film production and custom web development designed to work together seamlessly.
  </p>
  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
    I understand the challenges facing regional businesses because I&apos;ve navigated them myself. That&apos;s why I&apos;m focused on creating digital assets that don&apos;t just look good—they drive measurable business results for companies ready to stand out in their markets.
  </p>
</div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src={assetImgURL}
                        alt="Rob Reynolds, professional filmmaker and web developer"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        loading="lazy"
                        width={176}
                        height={264}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src={videoProductionUrl}
                        alt="Professional video production equipment"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        loading="lazy"
                        width={176}
                        height={264}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src={beginImgUrl}
                        alt="Custom web development workspace"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        loading="lazy"
                        width={176}
                        height={264}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                    </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our mission</h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-600">
                  To provide complete digital storytelling solutions for upstate New York businesses—where professional film production and custom web development work together to drive measurable results. We believe every business has a story worth telling professionally, and we're here to tell it completely.
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                  <p>
                    Through our unique combination of film expertise, web development capabilities, and science-backed storytelling methodology, we help regional businesses create digital assets that don't just look impressive—they convert viewers into customers and generate real revenue.
                  </p>
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                      <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                      <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            src={beginImgUrl}
            alt="Professional video production and web development workspace"
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
            loading="lazy"
            width={1280}
            height={512}
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 mb-16 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our core values</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            These values guide every project and client interaction. From revenue-focused storytelling to technical precision learned through legal videography, our principles ensure we deliver digital solutions that drive real business results for upstate New York companies.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </main> 
  );
}

export const meta = () => [
  { title: "About Razorhollow: Film Production + Web Development | Upstate NY" },
  { name: "description", content: "Learn about Rob Reynolds and Razorhollow's journey from film production to web development and back to complete digital storytelling for upstate NY businesses."},
  {
    tagName: "link",
    rel: "canonical",
    href: "https://www.razorhollow.com/about"
  },
  {
    tagName: "link",
    rel: "preload",
    as: "image",
    href: assetImgURL,
    type: "image/jpeg"
  },
  {
    tagName: "link",
    rel: "preload",
    as: "image",
    href: beginImgUrl,
    type: "image/webp"
  },
  {
    tagName: "meta",
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }
];