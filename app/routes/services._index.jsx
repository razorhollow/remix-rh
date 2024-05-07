import services from '~/data/services.json';
import ServiceCard from '../components/ServiceCard';

export default function ServicesIndex() {
  return (
    <div className="bg-gray-800 text-white p-5 flex justify-center min-h-screen">
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
}
