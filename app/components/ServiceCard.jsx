import { Link } from "@remix-run/react"

const ServiceCard = ({ service }) => (
  <div className="bg-gray-700 p-6 rounded-lg shadow-lg relative hover:bg-gray-600 transition duration-300">
    <h2 className="text-xl font-bold" style={{ color: 'goldenrod' }}>{service.name}</h2>
    <p className="mt-2 mb-4 text-gray-200">{service.headline}</p>
    <img src={service.image} alt={service.name} className="w-full h-48 object-cover rounded-md mb-4"/>
    <Link to={`/services/${service.slug}`} className="absolute inset-0 rounded-lg focus:outline-none focus:shadow-outline"></Link>
  </div>
);

export default ServiceCard;
