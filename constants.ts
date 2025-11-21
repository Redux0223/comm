
export const CURRENCY_SYMBOL = '$';

export const CATEGORIES = [
  'All',
  'Handbags',
  'Shoes',
  'Jewelry',
  'Ready-to-Wear'
];

export const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'The Classic Tote',
    description: 'Handcrafted from Italian leather, this timeless tote features gold-plated hardware and a spacious interior suitable for the modern professional.',
    price: 2450,
    category: 'Handbags',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop',
    stock: 15,
    sku: 'MD-HB-001',
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'Silk Evening Gown',
    description: 'A stunning floor-length gown made from 100% mulberry silk. Perfect for galas and evening events.',
    price: 3200,
    category: 'Ready-to-Wear',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop',
    stock: 8,
    sku: 'MD-RW-002',
    rating: 4.9,
    reviews: 45
  },
  {
    id: '3',
    name: 'Velvet Stilettos',
    description: 'Midnight blue velvet pumps with a crystal-embellished strap. Elegance in every step.',
    price: 890,
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop',
    stock: 24,
    sku: 'MD-SH-003',
    rating: 4.7,
    reviews: 89
  },
  {
    id: '4',
    name: 'Gold Link Necklace',
    description: '18k solid gold chain with a signature Madoleko clasp. A statement piece for any collection.',
    price: 1500,
    category: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=800&auto=format&fit=crop',
    stock: 5,
    sku: 'MD-JW-004',
    rating: 5.0,
    reviews: 12
  },
  {
    id: '5',
    name: 'Cashmere Trench Coat',
    description: 'Ultra-soft cashmere blend trench coat in a neutral beige tone. The ultimate outerwear luxury.',
    price: 4500,
    category: 'Ready-to-Wear',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop',
    stock: 50,
    sku: 'MD-RW-005',
    rating: 4.6,
    reviews: 230
  },
  {
    id: '6',
    name: 'Structured Satchel',
    description: 'A modern architectural bag for the contemporary woman. Features a rigid handle and detachable strap.',
    price: 1850,
    category: 'Handbags',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop',
    stock: 10,
    sku: 'MD-HB-006',
    rating: 4.8,
    reviews: 67
  }
];

export const MOCK_ORDERS = [
  { id: '#ORD-7829', customer: 'Elena Fisher', date: '2023-10-24', total: 3200, status: 'Processing' },
  { id: '#ORD-7830', customer: 'Sarah Connor', date: '2023-10-23', total: 890, status: 'Shipped' },
  { id: '#ORD-7831', customer: 'Diana Prince', date: '2023-10-22', total: 4500, status: 'Delivered' },
  { id: '#ORD-7832', customer: 'Natasha Romanoff', date: '2023-10-21', total: 1500, status: 'Delivered' },
  { id: '#ORD-7833', customer: 'Wanda Maximoff', date: '2023-10-20', total: 2450, status: 'Pending' },
];
