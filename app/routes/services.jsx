import { Outlet } from '@remix-run/react'

import ServiceNavigation from '../components/ServiceNavigation'

export default function Services() {
  return (
    <div className=''>
      <ServiceNavigation />
      <Outlet />
    </div>
  );
}