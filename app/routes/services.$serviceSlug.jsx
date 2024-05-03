import { json, useLoaderData } from '@remix-run/react'
import { motion } from 'framer-motion'
import services from '../data/services.json';
import { marked } from 'marked';

export const loader = async ({ params }) => {
  const service = services.find(service => service.slug === params.serviceSlug);
  if (!service) throw new Response('Not Found', { status: 404 });

  service.description = marked(service.description)

  return json(service);
};

export default function ServiceDetail() {
  const service = useLoaderData();
  return (
    <div>
      <div id="hero" className='relative w-screen h-[500px] overflow-hidden flex items-center justify-center'>
        <img src={service.image} alt={`Hero for ${service.name}`} className='absolute w-full h-full object-cover' />
        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'></div>
          <motion.h1 
          initial={{ opacity: 0 }}
          animate={{opacity: 1 }}
          transition={{ duration: 2.0, delay: .5}}
          className="text-4xl font-bold tracking-tight sm:text-6xl text-white z-10"
          >
            {service.name}
          </motion.h1>
      </div>
      {/* <div className='p-8' dangerouslySetInnerHTML={{ __html: service.description }}>
        <p>{service.description}</p>
      </div> */}
    </div>
  );
}
