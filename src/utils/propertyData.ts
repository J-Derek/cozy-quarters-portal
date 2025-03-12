
export interface Property {
  id: string;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
  type: 'Apartment' | 'House' | 'Villa' | 'Commercial';
  images: string[];
  description: string;
  features: string[];
  isFeatured?: boolean;
  isNew?: boolean;
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Oceanfront Villa',
    address: '123 Coastal Drive, Malibu, CA',
    price: 4250000,
    bedrooms: 5,
    bathrooms: 6,
    squareFootage: 4800,
    type: 'Villa',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2600&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=2600&q=80',
    ],
    description: 'This stunning oceanfront villa offers panoramic views of the Pacific Ocean. With its modern architecture and luxurious finishes, this property represents the epitome of coastal living. Features include floor-to-ceiling windows, a gourmet kitchen with top-of-the-line appliances, and a spacious master suite with a private terrace.',
    features: ['Ocean Views', 'Private Pool', 'Home Theater', 'Wine Cellar', 'Smart Home System', 'Private Beach Access'],
    isFeatured: true,
    isNew: true,
  },
  {
    id: '2',
    title: 'Elegant Downtown Penthouse',
    address: '456 Skyline Avenue, Los Angeles, CA',
    price: 3800000,
    bedrooms: 3,
    bathrooms: 3.5,
    squareFootage: 3200,
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=2600&q=80',
      'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=2600&q=80',
      'https://images.unsplash.com/photo-1622015663084-307d19eabca2?auto=format&fit=crop&w=2600&q=80',
    ],
    description: 'Situated atop one of downtown's most exclusive buildings, this penthouse offers unmatched luxury and convenience. The open floor plan is perfect for entertaining, while the private rooftop terrace provides a tranquil escape with breathtaking city views.',
    features: ['360° City Views', 'Private Rooftop Terrace', 'Concierge Service', 'Valet Parking', 'Fitness Center', 'Wine Storage'],
    isFeatured: true,
  },
  {
    id: '3',
    title: 'Contemporary Hillside Retreat',
    address: '789 Highland Drive, Beverly Hills, CA',
    price: 7500000,
    bedrooms: 6,
    bathrooms: 8,
    squareFootage: 7200,
    type: 'House',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2600&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=2600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c349601?auto=format&fit=crop&w=2600&q=80',
    ],
    description: 'Nestled in the prestigious hills of Beverly Hills, this architectural masterpiece offers privacy and luxury in equal measure. The property features walls of glass that showcase breathtaking views, an infinity pool that seems to merge with the horizon, and interiors that define contemporary elegant living.',
    features: ['Infinity Pool', 'Home Gym', 'Chef's Kitchen', 'Guest House', 'Private Gate', 'Outdoor Kitchen'],
    isFeatured: true,
    isNew: true,
  },
  {
    id: '4',
    title: 'Sophisticated Garden Townhouse',
    address: '321 Magnolia Lane, Santa Monica, CA',
    price: 2150000,
    bedrooms: 3,
    bathrooms: 2.5,
    squareFootage: 2100,
    type: 'House',
    images: [
      'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=2600&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2600&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2600&q=80',
    ],
    description: 'This sophisticated townhouse combines modern design with classic elegance. Located in a quiet neighborhood yet close to shops and restaurants, it offers the perfect balance of privacy and accessibility. The landscaped garden provides a serene outdoor living space.',
    features: ['Designer Kitchen', 'Private Garden', 'Built-in Bookshelves', 'Hardwood Floors', 'Fireplace', 'Close to Beach'],
    isNew: true,
  },
  {
    id: '5',
    title: 'Luxury Downtown Loft',
    address: '555 Urban Street, Los Angeles, CA',
    price: 1850000,
    bedrooms: 2,
    bathrooms: 2,
    squareFootage: 1800,
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2600&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=2600&q=80',
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=2600&q=80',
    ],
    description: 'This stunning loft in the heart of downtown LA offers soaring ceilings, original exposed brick walls, and industrial-chic design elements. Recently renovated with high-end finishes while preserving the building's historic character.',
    features: ['Exposed Brick', 'Industrial Design', '24/7 Security', 'Rooftop Pool', 'EV Charging', 'Pet Friendly'],
  },
  {
    id: '6',
    title: 'Exclusive Beachfront Property',
    address: '888 Shoreline Drive, Newport Beach, CA',
    price: 6750000,
    bedrooms: 4,
    bathrooms: 5,
    squareFootage: 3900,
    type: 'House',
    images: [
      'https://images.unsplash.com/photo-1506126279646-a697353d3166?auto=format&fit=crop&w=2600&q=80',
      'https://images.unsplash.com/photo-1600607688960-5e9d1f565269?auto=format&fit=crop&w=2600&q=80',
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2600&q=80',
    ],
    description: 'Experience the ultimate in coastal luxury with this stunning beachfront property. Fall asleep to the sound of waves and wake up to spectacular ocean views. The expansive outdoor living spaces and direct beach access make this home perfect for those who love entertaining and outdoor activities.',
    features: ['Direct Beach Access', 'Panoramic Ocean Views', 'Boat Dock', 'Outdoor Shower', 'Heated Floors', 'Hurricane Windows'],
    isFeatured: true,
  },
  {
    id: '7',
    title: 'Urban Micro Loft',
    address: '101 Downtown Square, Los Angeles, CA',
    price: 795000,
    bedrooms: 1,
    bathrooms: 1,
    squareFootage: 650,
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=2600&q=80',
      'https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?auto=format&fit=crop&w=2600&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2600&q=80',
    ],
    description: 'This innovative micro loft maximizes every square foot with clever storage solutions and multi-functional spaces. Located in a trendy downtown neighborhood, it's perfect for the urban professional who wants a stylish, low-maintenance living space.',
    features: ['Smart Space Design', 'Built-in Storage', 'Smart Home Features', 'Building Amenities', 'City Views', 'Energy Efficient'],
    isNew: true,
  },
  {
    id: '8',
    title: 'Mid-Century Modern Classic',
    address: '432 Retro Lane, Palm Springs, CA',
    price: 2450000,
    bedrooms: 4,
    bathrooms: 3,
    squareFootage: 2800,
    type: 'House',
    images: [
      'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=2600&q=80',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=2600&q=80',
      'https://images.unsplash.com/photo-1600607687710-40b4f21b3585?auto=format&fit=crop&w=2600&q=80',
    ],
    description: 'A stunning example of mid-century modern architecture, this home has been thoughtfully restored to preserve its historic character while incorporating contemporary comforts. The open floor plan and walls of glass create a seamless connection to the outdoor living spaces.',
    features: ['Period Architecture', 'Original Terrazzo Floors', 'Desert Views', 'Swimming Pool', 'Butterfly Roof', 'Restored Details'],
  },
];

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(property => property.id === id);
};

export const getFeaturedProperties = (): Property[] => {
  return properties.filter(property => property.isFeatured);
};

export const getNewProperties = (): Property[] => {
  return properties.filter(property => property.isNew);
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
};
