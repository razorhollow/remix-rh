const mainNavigation = [
  { name: 'Home', href: '/', icon: 'home' },
  { name: 'Packages', href: '/packages', icon: 'briefcase' },
  { name: 'Work', href: '/portfolio', icon: 'camera' },
  { name: 'About', href: '/about', icon: 'info' },
  { name: 'Contact', href: '/contact', icon: 'mail' },
]

const footerNavigation = {
  services: [
    { name: 'Visibility Package', href: '/packages#visibility' },
    { name: 'Growth Package', href: '/packages#growth' },
    { name: 'Authority Package', href: '/packages#authority' },
    { name: 'Package Comparison', href: '/packages#compare' },
  ],
  company: [
    { name: 'Home', href: '/' },
    { name: 'Packages', href: '/packages' },
    { name: 'Work', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ],
  serviceAreas: [
    { name: 'Buffalo & Western NY', href: '/contact#buffalo' },
    { name: 'Rochester & Finger Lakes', href: '/contact#rochester' },
    { name: 'Syracuse & Central NY', href: '/contact#syracuse' },
    { name: 'Elmira, Corning & Southern Tier', href: '/contact#southern-tier' },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/razorhollow',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z" clipRule="evenodd"/></svg>
      ),
    },
  ],
}

export { mainNavigation, footerNavigation }
