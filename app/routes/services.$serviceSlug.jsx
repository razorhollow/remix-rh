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
      <div className=' w-full p-8 flex flex-col items-center justify-center' >
        <h2 className='text-3xl font-bold tracking-tight sm:text-5xl my-14 pl-4 py-2 border-solid border-l-4 border-pine' dangerouslySetInnerHTML={{ __html: marked.parse(service.headline) }}></h2>
        <p className='max-w-[750px]' dangerouslySetInnerHTML={{ __html: marked.parse(service.description) }}></p>
      </div>
    </div>
  );
}

export const meta =({data}) => {
  return [
    {title: `${data.tag} | Razor Hollow`},
    {name: "description", content: data.meta},
    {
      tagName: "link",
      rel: "canonical",
      href: `https://www.razorhollow.com/services/${data.slug}`
    },
  ]
}
