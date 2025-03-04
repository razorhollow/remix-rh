import assetImgURL from '../assets/rob-reynolds.jpg'
import shedHuntingUrl from '../assets/shed-hunting.jpg'
import steelheadUrl from '../assets/steelhead.jpg'
import elkHuntinUrl from '../assets/elk-hunting.jpg'
import duckHuntinUrl from '../assets/duck-hunting.jpg'
import beginImgUrl from '../assets/begin.webp'

const stats = [
  { label: 'Lines of code written', value: '4 million' },
  { label: 'Video impressions', value: '35,600' },
  { label: 'Images captured', value: '150 TB' },
]
const values = [
  {
    name: 'Have a why',
    description:
      "Our driving force is our commitment to helping outdoor enthusiasts and professionals leverage technology to build their dream careers. This mission was inspired by our founder's passion for the outdoors and his recognition of the transformative power of digital tools. We help our clients not just to succeed but to thrive by aligning their passions with purposeful and powerful digital solutions.",
  },
  {
    name: 'Always be learning',
    description:
      'We embrace the philosophy that learning is an endless journey. In the ever-evolving landscape of technology and outdoor adventures, staying curious and continuously seeking knowledge not only enhances our services but also enriches our personal lives and the lives of those we serve. We encourage our team and our clients to always be open to new ideas and innovations, ensuring that we remain at the forefront of digital creativity and efficiency.',
  },
  {
    name: 'Do the right thing',
    description:
      "Integrity is the cornerstone of Razor Hollow. We believe in doing the right thing, even when no one is watching. This value guides our interactions with clients, partners, and each other. Whether it's transparent communication, honest service delivery, or responsible business practices, our commitment to integrity ensures we build trust and maintain long-lasting relationships in the outdoor and tech industries.",
  },
  {
    name: 'Go the extra mile',
    description:
      "Going the extra mile isn't just a cliche - it's essential to reaching our potential. Putting in that little bit more effort for friends, coworkers, clients, and yourself can have far-reaching impacts beyond what you may think. It could be as simple as lending a listening ear to someone going through tough times or investing those few remaining minutes after work into improving yourself; whatever shape this takes, always strive to leave your mark by making sure that people remember the value you bring them!",
  },
  {
    name: 'Anything worth doing is worth doing well',
    description:
      "We hold ourselves to a standard of excellence in everything we undertake. We believe that anything worth doing not only deserves effort but our best effort. This commitment to quality reflects in our web development, video production, and all services we provide. By consistently delivering work we're proud of, we help elevate our clients' brands to their highest potential.",
  },
  {
    name: 'Move with purpose',
    description:
    "Inspired by the ethos of our founder's father, we operate with a sense of urgency and purpose. This value is about more than speed; it’s about deliberate, thoughtful action in everything we do. From the pace at which we tackle projects to the swift, purpose-driven approach we apply in problem-solving, moving with purpose is integral to our success and that of our clients.",
  },
]

export default function AboutPage() {
  return (
    <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
          </svg>
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
    Hi there, I&apos;m Rob Reynolds
  </h1>
  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
    For over a decade, I&apos;ve been in the outdoor industry—guiding, photographing, and filming adventures. My peers call me the <span className="text-pine italic">&quot;Backwoods Techie&quot;</span> because I know what it&apos;s like to hustle in the wild and still make the tech side work for my clients.
  </p>
  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
    <span className="mt-4 text-lg md:text-xl leading-relaxed text-gray-900">But here&apos;s the deal:</span> After years of filling my clients&apos; books through compelling visuals, I realized the real game-changer wasn&apos;t just the photos or videos—it was the website behind them. A high-converting site that does the heavy lifting, turning curious browsers into paying customers.
  </p>
  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
    <span className="mt-4 text-lg md:text-xl leading-relaxed text-gray-900">I started off just like you—</span> a small business owner in the outdoor world, unsure how to reach more clients and feeling the pain of missed opportunities. I learned, through trial and error, how to build websites that actually make the phone ring.
  </p>
  <p className="mt-4 text-lg md:text-xl leading-relaxed">
    Now, I&apos;ve doubled down on what really moves the needle: strategic web design that converts. My photography and video skills? They&apos;re still in the toolkit—but only to supercharge your website&apos;s effectiveness.
  </p>
  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
    I know how overwhelming it can be trying to grow an outdoor business in a crowded digital space. That&apos;s why I&apos;m laser-focused on building websites that immediately capture attention, showcase your brand authentically, and bring in more paying clients—so you can spend less time worrying about marketing and more time doing what you love.
  </p>
</div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src={assetImgURL}
                        alt="rob reynolds and his lab"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src={elkHuntinUrl}
                        alt="elk hunting in Idaho"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src={steelheadUrl}
                        alt="salmon river steelhead"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src={duckHuntinUrl}
                        alt="duck hunting in the rain"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src={shedHuntingUrl}
                        alt="shed hunting in Missouri"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
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
                  Our mission is to empower outdoor professionals by leveraging cutting-edge technology and authentic storytelling. Through our unique blend of web development, video production, and digital marketing expertise, we are dedicated to helping hunting and fishing guides, lodge owners, and outdoor product companies craft successful careers around their passions. 
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
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
            alt="a man looking into the forest"
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 mb-16 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our core values</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            our core values are more than just words—they are the principles that guide every decision and action we take. From pioneering cutting-edge solutions in the outdoor industry to ensuring every client interaction is rooted in integrity, our values shape our commitment to excellence and drive our mission to empower outdoor professionals through innovative technology.
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


        {/* Blog section */}
        {/* <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Vel dolorem qui facilis soluta sint aspernatur totam cumque.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img src={post.author.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
                      {post.author.name}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div> */}
      </main> 
  );
}

export const meta = () => [
  { title: "About Razor Hollow: Our Outdoor Marketing Expertise" },
  { name: "description", content: "Learn about Razor Hollow's mission to empower outdoor professionals with cutting-edge technology and storytelling. Discover our values and expertise."},
  {
    tagName: "link",
    rel: "canonical",
    href: "https://www.razorhollow.com/about"
  },
];
