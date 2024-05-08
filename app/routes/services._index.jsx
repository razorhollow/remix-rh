import services from '~/data/services.json';
import ServiceCard from '../components/ServiceCard';

export default function ServicesIndex() {
  return (
    <div className=" text-white p-5 flex justify-center min-h-screen">
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
          </div>
      <div className="container mx-auto px-4 w-full">
        <h1 className="text-6xl font-bold text-center my-10" style={{ color: '#ffffff' }}>Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center mx-auto" style={{ maxWidth: '1280px' }}> {/* Centering the grid */}
          {services.map(service => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
  //
}
