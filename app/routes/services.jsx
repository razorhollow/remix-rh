import { Outlet, NavLink } from '@remix-run/react'

export default function Services() {
  return (
    <div className='flex justify-around'>
      <h1 className=''>Services We Offer</h1>
      <NavLink to='webdev' className={({ isActive }) => `underline ${isActive ? 'bg-gray-800 text-white' : ''}`}>Web Dev</NavLink>
      <Outlet />
    </div>
  );
}