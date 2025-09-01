export type Product = { 
  id: string; 
  title: string; 
  price: number; 
  image: string;
  category: string;
  description: string;
};

export const products: Product[] = [
  { 
    id: 'tee1', 
    title: 'Todestriebe Tee', 
    price: 35, 
    image: '/img/tee.jpg',
    category: 'Clothing',
    description: 'Black metal band t-shirt with band logo'
  },
  { 
    id: 'vinyl1', 
    title: 'LP "Abyssal Rites"', 
    price: 29, 
    image: '/img/vinyl.jpg',
    category: 'Music',
    description: 'Limited edition vinyl record'
  },
  { 
    id: 'hoodie1', 
    title: 'Todestriebe Hoodie', 
    price: 55, 
    image: '/img/hoodie.jpg',
    category: 'Clothing',
    description: 'Dark hoodie with embroidered logo'
  },
  { 
    id: 'poster1', 
    title: 'Tour Poster 2025', 
    price: 15, 
    image: '/img/poster.jpg',
    category: 'Merchandise',
    description: 'Limited tour poster'
  },
  { 
    id: 'patch1', 
    title: 'Band Patch', 
    price: 8, 
    image: '/img/patch.jpg',
    category: 'Merchandise',
    description: 'Embroidered band patch'
  },
  { 
    id: 'cd1', 
    title: 'CD "Abyssal Rites"', 
    price: 18, 
    image: '/img/cd.jpg',
    category: 'Music',
    description: 'CD version of the album'
  }
];
