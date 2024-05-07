import services from '~/data/services.json';
import ServiceCard from '../components/ServiceCard';

export default function ServicesIndex() {
  return (
    <div className="bg-gray-800 text-white p-5">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold text-center my-10" style={{ color: '#fffff' }}>Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map(service => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
