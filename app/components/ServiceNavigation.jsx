import { NavLink } from '@remix-run/react';
import services from '../data/services.json';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavigationTabs() {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          onChange={(e) => {
            const selectedService = services.find(service => service.name === e.target.value);
            window.location.href = `./${selectedService.slug}`;
          }}
        >
          {services.map((service) => (
            <option key={service.name}>{service.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="w-screen isolate flex divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
          {services.map((service, index) => (
            <NavLink
              key={service.name}
              to={`./${service.slug}`}
              className={({ isActive }) =>
                classNames(
                  isActive ? 'text-pine bg-gray-100' : 'text-gray-500 hover:text-gray-700',
                  index === 0 ? 'rounded-l-lg' : '',
                  index === services.length - 1 ? 'rounded-r-lg' : '',
                  'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10'
                )
              }
              end
            >
              {service.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
