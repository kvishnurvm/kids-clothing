export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Boys' | 'Girls' | 'Baby';
  ageGroup: '0-2' | '2-4' | '4-6' | '6-8' | '8-12';
  sizes: string[];
  colors: { name: string; hex: string }[];
  images: string[];
  description: string;
  material: string;
  sku: string;
  tag?: 'New' | 'Best Seller' | 'Sale';
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 'KD001',
    name: 'Summer Floral Dress',
    price: 29.99,
    category: 'Girls',
    ageGroup: '4-6',
    sizes: ['2Y', '3Y', '4Y', '5Y', '6Y'],
    colors: [
      { name: 'Pink', hex: '#FFD1DC' },
      { name: 'Sky Blue', hex: '#A8DADC' },
      { name: 'Lavender', hex: '#E0BBE4' },
    ],
    images: [
      'https://images.unsplash.com/photo-1560359601-01c9c800ee60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwc3VtbWVyJTIwZHJlc3N8ZW58MXx8fHwxNzY0MDk3MTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1622290319146-7b63df48a635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwcGFydHklMjB3ZWFyfGVufDF8fHx8MTc2NDA5NzE2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description: 'Beautiful floral print summer dress perfect for parties and special occasions. Made with soft, breathable fabric.',
    material: '100% Cotton',
    sku: 'SFD-001',
    tag: 'Best Seller',
    inStock: true,
  },
  {
    id: 'KD002',
    name: 'Casual T-Shirt Set',
    price: 24.99,
    category: 'Boys',
    ageGroup: '2-4',
    sizes: ['2Y', '3Y', '4Y'],
    colors: [
      { name: 'Blue', hex: '#A8DADC' },
      { name: 'Mint', hex: '#B8E5D2' },
      { name: 'White', hex: '#FFFFFF' },
    ],
    images: [
      'https://images.unsplash.com/photo-1758782213532-bbb5fd89885e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY2xvdGhpbmclMjBmYXNoaW9ufGVufDF8fHx8MTc2NDA1NDA1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1637184572386-9f3fd24a37eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwYm95JTIwY2xvdGhlc3xlbnwxfHx8fDE3NjQwOTcxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description: 'Comfortable cotton t-shirt perfect for everyday wear. Comes in fun colors kids love.',
    material: '100% Cotton',
    sku: 'CTS-002',
    tag: 'New',
    inStock: true,
  },
  {
    id: 'KD003',
    name: 'Winter Jacket',
    price: 49.99,
    category: 'Boys',
    ageGroup: '6-8',
    sizes: ['6Y', '7Y', '8Y'],
    colors: [
      { name: 'Navy', hex: '#1a2a3a' },
      { name: 'Red', hex: '#d4183d' },
      { name: 'Green', hex: '#2d5a3d' },
    ],
    images: [
      'https://images.unsplash.com/photo-1662787271649-8843cc38454a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHdpbnRlciUyMGphY2tldHxlbnwxfHx8fDE3NjQwOTcxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description: 'Warm and cozy winter jacket with fleece lining. Perfect for cold weather adventures.',
    material: 'Polyester with fleece lining',
    sku: 'WJK-003',
    tag: 'New',
    inStock: true,
  },
  {
    id: 'KD004',
    name: 'Baby Romper Set',
    price: 19.99,
    category: 'Baby',
    ageGroup: '0-2',
    sizes: ['0-6M', '6-12M', '12-18M', '18-24M'],
    colors: [
      { name: 'Peach', hex: '#FFB4A2' },
      { name: 'Mint', hex: '#B8E5D2' },
      { name: 'Yellow', hex: '#FCF4A3' },
    ],
    images: [
      'https://images.unsplash.com/photo-1761891919515-f138d7888d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwY2xvdGhpbmclMjBwYXN0ZWx8ZW58MXx8fHwxNzY0MDk3MTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description: 'Adorable baby romper set in soft pastel colors. Gentle on baby\'s sensitive skin.',
    material: '100% Organic Cotton',
    sku: 'BRS-004',
    tag: 'Best Seller',
    inStock: true,
  },
  {
    id: 'KD005',
    name: 'Party Wear Outfit',
    price: 39.99,
    category: 'Girls',
    ageGroup: '4-6',
    sizes: ['4Y', '5Y', '6Y'],
    colors: [
      { name: 'Pink', hex: '#FFD1DC' },
      { name: 'Lavender', hex: '#E0BBE4' },
    ],
    images: [
      'https://images.unsplash.com/photo-1622290319146-7b63df48a635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwcGFydHklMjB3ZWFyfGVufDF8fHx8MTc2NDA5NzE2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description: 'Elegant party wear outfit perfect for birthdays, weddings, and special celebrations.',
    material: 'Cotton blend with embellishments',
    sku: 'PWO-005',
    inStock: true,
  },
  {
    id: 'KD006',
    name: 'Colorful Playwear',
    price: 22.99,
    category: 'Girls',
    ageGroup: '2-4',
    sizes: ['2Y', '3Y', '4Y'],
    colors: [
      { name: 'Rainbow', hex: '#FFB4A2' },
      { name: 'Pink', hex: '#FFD1DC' },
    ],
    images: [
      'https://images.unsplash.com/photo-1632195217465-4f334314762f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2RkbGVyJTIwY2xvdGhlcyUyMGNvbG9yZnVsfGVufDF8fHx8MTc2NDA5NzE2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description: 'Fun and colorful playwear for active toddlers. Easy to wash and maintain.',
    material: '100% Cotton',
    sku: 'CPW-006',
    tag: 'New',
    inStock: true,
  },
  {
    id: 'KD007',
    name: 'Denim Jacket',
    price: 34.99,
    category: 'Boys',
    ageGroup: '6-8',
    sizes: ['6Y', '7Y', '8Y'],
    colors: [
      { name: 'Blue Denim', hex: '#5B8FA3' },
      { name: 'Black', hex: '#2a2a2a' },
    ],
    images: [
      'https://images.unsplash.com/photo-1758782213532-bbb5fd89885e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGZhc2hpb24lMjBvdXRmaXR8ZW58MXx8fHwxNzY0MDk3MTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description: 'Classic denim jacket that goes with everything. A wardrobe essential for every kid.',
    material: 'Denim',
    sku: 'DJK-007',
    inStock: true,
  },
  {
    id: 'KD008',
    name: 'Printed Shorts Set',
    price: 18.99,
    category: 'Boys',
    ageGroup: '4-6',
    sizes: ['4Y', '5Y', '6Y'],
    colors: [
      { name: 'Blue', hex: '#A8DADC' },
      { name: 'Green', hex: '#B8E5D2' },
    ],
    images: [
      'https://images.unsplash.com/photo-1637184572386-9f3fd24a37eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwYm95JTIwY2xvdGhlc3xlbnwxfHx8fDE3NjQwOTcxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description: 'Comfortable shorts set with fun prints. Perfect for summer and playtime.',
    material: '100% Cotton',
    sku: 'PSS-008',
    inStock: true,
  },
];
