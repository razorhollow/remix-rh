import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { Link } from "@remix-run/react";

import iconMap from "../utils/iconMap";

interface ServiceProps {
  service: {
    icon: string;
    name: string;
    headline: string;
    slug: string;
  };
}

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  console.log('Service icon key:', service.icon); // This will show what icon key is being used
  const Icon = iconMap[service.icon] || null;
  console.log('Resolved Icon:', Icon); // This will show what component is resolved

  return (
    <div className="h-[300px] w-[300px] bg-gray-900 p-6 rounded-3xl shadow-lg relative hover:bg-gray-600 transition duration-300">
      {Icon ? <Icon className="h-10 w-10 m-3 text-gray-300" aria-hidden="true" /> : null}
      <h2 className="text-xl font-bold" style={{ color: 'goldenrod' }}>{service.name}</h2>
      <p className="mt-2 mb-4 text-gray-200">{service.headline}</p>
      <PlusCircleIcon className="h-12 w-12 absolute right-4 bottom-4"/>
      <Link to={`/services/${service.slug}`} className="absolute inset-0 rounded-lg focus:outline-none focus:shadow-outline" aria-label={service.name} title={service.name}></Link>
    </div>
  );
};

export default ServiceCard;
