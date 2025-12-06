export type GadgetCategory = 'Gaming Gear' | 'Smart Home' | 'Audio' | 'Wearables' | 'PC Components';

export type Gadget = {
  id: string;
  name: string;
  category: GadgetCategory;
  price: string;
  score: number;
  badge: 'TRENDING' | 'HOT';
  description: string;
  image: string;
  amazonUrl: string;
  tags: string[];
};

export const gadgets: Gadget[] = [
  {
    id: 'logitech-g733-headset',
    name: 'Logitech G733 LIGHTSPEED Wireless Gaming Headset',
    category: 'Gaming Gear',
    price: '$119',
    score: 98,
    badge: 'HOT',
    description: 'Wireless RGB gaming headset with Lightsync, Blue VO!CE mic tech, and PRO-G drivers for pro-level audio.',
    image: 'https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B081415GCS?tag=gadgetzilla-20',
    tags: ['Wireless', 'RGB Lighting', '29hr Battery']
  },
  {
    id: 'redragon-k714-keyboard',
    name: 'Redragon K714 Magnetic Mechanical Keyboard',
    category: 'PC Components',
    price: '$63',
    score: 96,
    badge: 'TRENDING',
    description: 'Hot-swappable magnetic switches, rapid trigger tech, RGB per-key backlighting for ultimate gaming precision.',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B0DSFLS9H3?tag=gadgetzilla-20',
    tags: ['Hot-Swap', 'RGB', 'Rapid Trigger']
  },
  {
    id: 'logitech-g502-hero',
    name: 'Logitech G502 HERO Gaming Mouse',
    category: 'Gaming Gear',
    price: '$49',
    score: 97,
    badge: 'HOT',
    description: '25K DPI HERO sensor, 11 programmable buttons, adjustable weights for perfect FPS and MOBA gameplay.',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B07GBZ4Q68?tag=gadgetzilla-20',
    tags: ['25K DPI', '11 Buttons', 'Tunable Weights']
  },
  {
    id: 'asus-tuf-monitor',
    name: 'ASUS TUF Gaming 27" 1440P Monitor',
    category: 'PC Components',
    price: '$279',
    score: 95,
    badge: 'TRENDING',
    description: '165Hz refresh rate, 1ms response time, G-SYNC compatible for buttery-smooth competitive gaming.',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B0BHKCQBMN?tag=gadgetzilla-20',
    tags: ['165Hz', '1440P', 'G-SYNC']
  },
  {
    id: 'airpods-pro-2',
    name: 'Apple AirPods Pro (2nd Generation)',
    category: 'Audio',
    price: '$249',
    score: 94,
    badge: 'TRENDING',
    description: 'Active noise cancellation, adaptive transparency, personalized spatial audio with dynamic head tracking.',
    image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B0CHWRXH8B?tag=gadgetzilla-20',
    tags: ['ANC', 'Spatial Audio', 'USB-C']
  },
  {
    id: 'samsung-t7-ssd',
    name: 'Samsung T7 Portable SSD 1TB',
    category: 'PC Components',
    price: '$109',
    score: 93,
    badge: 'HOT',
    description: 'Up to 1050MB/s transfer speeds, shock-resistant metal design, password protection for portable power.',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B0874XN4D8?tag=gadgetzilla-20',
    tags: ['1050MB/s', 'USB 3.2', 'Compact']
  },
  {
    id: 'xbox-controller',
    name: 'Xbox Wireless Controller',
    category: 'Gaming Gear',
    price: '$59',
    score: 92,
    badge: 'TRENDING',
    description: 'Textured grips, hybrid D-pad, Bluetooth wireless for Xbox, PC, mobile with 40hr battery life.',
    image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B08DF248LD?tag=gadgetzilla-20',
    tags: ['Wireless', '40hr Battery', 'Multi-platform']
  },
  {
    id: 'anker-usb-hub',
    name: 'Anker USB 3.0 Hub (7-Port)',
    category: 'PC Components',
    price: '$39',
    score: 90,
    badge: 'TRENDING',
    description: 'SuperSpeed USB 3.0 with 36W power adapter, LED indicators, for multi-device pro setups.',
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B014ZQ07NE?tag=gadgetzilla-20',
    tags: ['7 Ports', 'USB 3.0', 'Powered']
  }
];
