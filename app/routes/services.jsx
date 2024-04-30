import { Outlet } from '@remix-run/react'

export default function Services() {
  return (
    <div>
      <h1 className=''>Services We Offer</h1>
      <Outlet />
    </div>
  );
}