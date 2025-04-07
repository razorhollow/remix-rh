import { motion } from 'framer-motion';
import { Link } from '@remix-run/react';
import services from '~/data/services.json';

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] overflow-hidden flex items-center justify-center">
        <img 
          src="/images/web-development.webp" 
          alt="Digital tools for outdoor brands" 
          className="absolute w-full h-full object-cover" 
          loading="eager"
          width={1920}
          height={500}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
        <div className="container z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Beyond Brochure Websites
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto"
          >
            Sales-Generating Digital Tools for Outdoor Brands
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pl-4 border-l-4 border-pine">The Razor Hollow Difference</h2>
          <p className="text-lg mb-6">
            At Razor Hollow, I don&apos;t just build websites&mdash;I create custom digital ecosystems that actively convert visitors into paying customers for outdoor brands. While other agencies deliver static online brochures, I engineer comprehensive digital tools strategically designed to drive measurable business growth.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pl-4 border-l-4 border-pine">Your Outdoor Brand Deserves Better Than a Pretty Homepage</h2>
          <p className="text-lg mb-6">
            Many outdoor businesses struggle with beautiful but underperforming websites. They invest thousands in web development only to watch their digital presence fail to deliver meaningful ROI. The result? Frustration, wasted marketing budget, and missed opportunities in an increasingly competitive market.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pl-4 border-l-4 border-pine">My Solution: Sales-Driven Digital Ecosystems</h2>
          <p className="text-lg mb-6">
            I combine strategic marketing expertise with advanced technical development to create digital platforms that actively work to grow your outdoor business 24/7.
          </p>
          
          <h3 className="text-2xl font-bold mt-10 mb-6">How I Transform Your Digital Presence:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4 text-pine">Custom Full-Stack Development</h4>
              <p>
                I build scalable web applications specifically engineered for your unique business needs—not templated designs that look like everyone else. My code is clean, optimized, and built to evolve as your business grows, with SEO best practices integrated from the foundation up.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4 text-pine">Strategic Digital Marketing Integration</h4>
              <p>
                Your website becomes the central hub of a comprehensive marketing strategy. I develop targeted content calendars, implement conversion-optimized user journeys, and create measurable marketing campaigns that leverage your digital assets effectively.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4 text-pine">Enhanced Visual Storytelling (Optional)</h4>
              <p>
                For clients seeking additional impact, I offer professional photography and video production services. These visual assets don&apos;t just look beautiful—they&apos;re strategically created to highlight your unique value proposition and drive customer engagement.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4 text-pine">Real Business Results</h4>
              <p>
                The websites I build aren&apos;t just online placeholders&mdash;they&apos;re active business tools designed to:
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Generate qualified leads 24/7</li>
                <li>Convert casual visitors into paying customers</li>
                <li>Build your brand authority in the outdoor industry</li>
                <li>Create measurable ROI on your digital investment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service Showcase Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 pl-4 border-l-4 border-pine">Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service) => (
              <div key={service.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                    width={400}
                    height={192}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                  <p className="mb-4">{service.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pl-4 border-l-4 border-pine">My Process: Turning Your Website Into a Sales Machine</h2>
          
          <div className="space-y-6 mt-8">
            <div className="flex items-start">
              <div className="bg-pine text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">1</div>
              <div className="ml-4">
                <h4 className="text-xl font-bold">Discovery & Strategy Development</h4>
                <p>I analyze your brand, customers, and competitors to develop a tailored digital strategy.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-pine text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">2</div>
              <div className="ml-4">
                <h4 className="text-xl font-bold">Custom Web Development</h4>
                <p>I build a unique, conversion-focused website with scalable functionality.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-pine text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">3</div>
              <div className="ml-4">
                <h4 className="text-xl font-bold">Visual Asset Creation (Optional)</h4>
                <p>If desired, I can produce high-quality photography and video content that captures your brand essence.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-pine text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">4</div>
              <div className="ml-4">
                <h4 className="text-xl font-bold">Strategic Implementation</h4>
                <p>I integrate all elements into a cohesive digital ecosystem optimized for conversions.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-pine text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">5</div>
              <div className="ml-4">
                <h4 className="text-xl font-bold">Measurement & Optimization</h4>
                <p>I continuously analyze performance and refine your digital presence for maximum ROI.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate text-white p-10 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Stop wasting money on websites that don't generate real business results. Partner with Razor Hollow to create a powerful digital sales tool that works tirelessly to grow your outdoor brand.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-pine font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition duration-300"
          >
            Contact Now
          </Link>
        </section>
      </div>
    </div>
  );
}

export const meta = () => [
  { title: "Sales-Generating Websites for Outdoor Brands | Razor Hollow" },
  { 
    name: "description", 
    content: "Razor Hollow creates custom digital ecosystems for outdoor brands that convert visitors into customers. Beyond brochure websites—real business results."
  },
  {
    tagName: "link",
    rel: "canonical",
    href: "https://www.razorhollow.com/services"
  },
  {
    tagName: "link",
    rel: "preload",
    as: "image",
    href: "/images/web-development.webp",
    type: "image/webp"
  }
];