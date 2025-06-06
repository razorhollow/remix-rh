import { motion } from 'framer-motion';
import { Link } from '@remix-run/react';
import services from '~/data/services.json';

import serviceHeroIMG from '../assets/services-hero.webp'

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] overflow-hidden flex items-center justify-center">
        <img 
          src={serviceHeroIMG} 
          alt="Professional film production for upstate NY businesses" 
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
            Professional Film Production
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto"
          >
            Revenue-focused storytelling with technical support to showcase your videos effectively
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pl-4 border-l-4 border-pine">What Makes Razorhollow Different</h2>
          <p className="text-lg mb-6">
            I'm a professional filmmaker who understands the technical side of digital marketing. While my primary focus is creating compelling video content using Hollywood-quality equipment and science-backed storytelling methodology, I also provide the technical support needed to ensure your videos perform optimally online.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pl-4 border-l-4 border-pine">The Problem Most Videographers Can't Solve</h2>
          <p className="text-lg mb-6">
            Most videographers create beautiful videos then hand you files with no idea how to deploy them effectively. You're left figuring out hosting, integration, optimization, and conversion strategy on your own. Many great videos sit unused because the technical deployment is handled poorly or not at all.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pl-4 border-l-4 border-pine">My Solution: Complete Video Marketing</h2>
          <p className="text-lg mb-6">
            I create professional video content using proven storytelling methodology, then provide the technical expertise to ensure your videos work effectively online. You get both the creative excellence and the technical deployment handled by someone who understands both sides.
          </p>
          
          <h3 className="text-2xl font-bold mt-10 mb-6">What You Get:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4 text-pine">Professional Film Production</h4>
              <p>
                Hollywood-quality cinema cameras (RED Epic, Blackmagic), professional lighting, broadcast-quality audio, and legal-grade precision. Revenue-focused storytelling methodology that converts viewers into customers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4 text-pine">Technical Deployment Support</h4>
              <p>
                Video-optimized landing pages, integration into existing systems, click funnels, hosting optimization, and performance tracking. Your videos work perfectly online and drive measurable results.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4 text-pine">Legal Videography Experience</h4>
              <p>
                Experience with depositions and court proceedings where precision isn't optional has elevated our technical standards and reliability across all commercial video projects.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4 text-pine">Measurable Business Results</h4>
              <p>
                Every project is designed to drive specific business outcomes:
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Increased lead generation and conversions</li>
                <li>Enhanced brand authority and market positioning</li>
                <li>Improved customer engagement and retention</li>
                <li>Measurable ROI on your video marketing investment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service Showcase Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 pl-4 border-l-4 border-pine">Our Services</h2>
          <div className="space-y-10">
            {services.map((service, index) => (
              <div key={service.slug} className={`flex flex-col md:flex-row gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-64 object-cover rounded-lg shadow-md" 
                    loading="lazy"
                    width={400}
                    height={256}
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                  <p className="text-lg mb-6">{service.meta}</p>
                  {service.name === 'Legal Videography' ? (
                    <a 
                      href="https://www.csrcourtreporting.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-pine text-white font-semibold py-3 px-6 rounded hover:bg-green-600 transition duration-300 w-fit"
                    >
                      Visit CSR Court Reporting
                    </a>
                  ) : (
                    <Link 
                      to="/contact" 
                      className="inline-block bg-pine text-white font-semibold py-3 px-6 rounded hover:bg-green-600 transition duration-300 w-fit"
                    >
                      Learn More
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pl-4 border-l-4 border-pine">Our Process: From Concept to Conversion</h2>
          
          <div className="space-y-6 mt-8">
            <div className="flex items-start">
              <div className="bg-pine text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">1</div>
              <div className="ml-4">
                <h4 className="text-xl font-bold">Strategy & Storytelling Development</h4>
                <p>Deep dive into your business goals and audience psychology. We develop video concepts using science-backed storytelling methodology that drives specific business outcomes.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-pine text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">2</div>
              <div className="ml-4">
                <h4 className="text-xl font-bold">Professional Film Production</h4>
                <p>Hollywood-quality cinema cameras, professional lighting, and broadcast-quality audio. Legal videography precision applied to commercial storytelling that converts viewers into customers.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-pine text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">3</div>
              <div className="ml-4">
                <h4 className="text-xl font-bold">Post-Production & Optimization</h4>
                <p>Professional editing, color correction, audio mixing, and optimization for various platforms and use cases. Content delivered ready for deployment across all marketing channels.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-pine text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">4</div>
              <div className="ml-4">
                <h4 className="text-xl font-bold">Technical Deployment & Integration</h4>
                <p>Landing page creation, video integration, hosting optimization, and performance tracking setup. Your videos work perfectly online and drive measurable business results.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-pine text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">5</div>
              <div className="ml-4">
                <h4 className="text-xl font-bold">Performance Tracking & Optimization</h4>
                <p>Analytics setup, conversion tracking, and ongoing optimization recommendations. We measure what matters: engagement, leads generated, and revenue attributed to your video content.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Geographic Service Area */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pl-4 border-l-4 border-pine">Serving Upstate New York</h2>
          <p className="text-lg mb-6">
            Based in the Elmira/Corning area, we serve businesses throughout the Buffalo-Rochester-Syracuse corridor. Our regional focus allows us to provide personalized service while understanding the unique opportunities and challenges facing upstate New York companies.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-bold text-pine">Buffalo & Western NY</h4>
              <p className="text-sm">Corporate headquarters, manufacturing</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-bold text-pine">Rochester & Finger Lakes</h4>
              <p className="text-sm">Tech corridor, innovation district</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-bold text-pine">Syracuse & Central NY</h4>
              <p className="text-sm">Tech Hub, federal investment</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-bold text-pine">Southern Tier</h4>
              <p className="text-sm">Elmira, Corning, Binghamton</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate text-white p-10 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Professional Video That Drives Results?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Professional film production with the technical expertise to ensure your videos work effectively online. Create compelling content that converts viewers into customers.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-pine font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition duration-300"
          >
            Start Your Video Project
          </Link>
        </section>
      </div>
    </div>
  );
}

export const meta = () => [
  { title: "Professional Film Production Services | Upstate NY | Razorhollow" },
  { 
    name: "description", 
    content: "Professional film production for upstate NY businesses. Hollywood-quality video with technical support to ensure your content drives measurable results."
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
    href: "/images/professional-video-production.webp",
    type: "image/webp"
  }
];