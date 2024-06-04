import services from '~/data/services.json';
import ServiceCard from '../components/ServiceCard';

export default function ServicesIndex() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-900 mb-12">Our Services</h1>
        <p className="max-w-4xl mx-auto text-lg md:text-2xl leading-8 text-gray-700 text-center mb-12">
          We provide a suite of services designed to help outdoor businesses thrive. Our offerings include expert web development, strategic marketing, high-quality video production, and stunning photography. Each service is tailored to meet the unique needs of our clients, ensuring they stand out in the competitive outdoor industry. Explore our services to see how we can help you achieve your business goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(service => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const meta = () => [
  { title: "Outdoor Marketing Services | Razor Hollow" },
  { name: "description", content: "Explore Razor Hollow's comprehensive outdoor marketing services, including web development, marketing strategy, video production, and photography."},
  {
    tagName: "link",
    rel: "canonical",
    href: "https://razorhollow.com/services"
  },
];
