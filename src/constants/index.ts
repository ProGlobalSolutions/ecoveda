export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  {
    name: 'Verticals',
    path: '#',
    dropdown: [
      { name: 'Portfolio', path: '/verticals/project-development' },
      { name: 'Advisory', path: '/verticals/advisory' },
      { name: 'Decarbonisation & ESG', path: '/verticals/decarbonisation' },
      { name: 'Climate Tech', path: '/verticals/climate-tech' },
    ],
  },
  { name: 'Products', path: '/products' },
  { name: 'Ecobuzz', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const HERO_SLIDES = [
  {
    title: 'Pioneering Climate Solutions for a Sustainable Future',
    description: 'We enable organizations to navigate the complexities of climate change through innovative technology and strategic advisory.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80',
    cta: 'Explore Our Verticals',
    link: '/verticals/project-development',
  },
];
