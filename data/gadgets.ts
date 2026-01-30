export type GadgetCategory = 'Gaming Gear' | 'Smart Home' | 'Audio' | 'Wearables' | 'PC Components';

export type Gadget = {
  id: string;
  name: string;
  category: GadgetCategory;
  price: string;
  originalPrice?: string;
  score: number;
  badge: 'TRENDING' | 'HOT' | 'DEAL' | 'NEW';
  description: string;
  image: string;
  amazonUrl: string;
  tags: string[];
  dealEndsAt?: string;
};

export const gadgets: Gadget[] = [
  // === GAMING GEAR ===
  {
    id: 'logitech-g733-headset',
    name: 'Logitech G733 LIGHTSPEED Wireless Gaming Headset',
    category: 'Gaming Gear',
    price: '$119',
    originalPrice: '$149',
    score: 98,
    badge: 'HOT',
    description: 'Wireless RGB gaming headset with Lightsync, Blue VO!CE mic tech, and PRO-G drivers for pro-level audio.',
    image: 'https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B081415GCS?tag=gadgetzilla07-20',
    tags: ['Wireless', 'RGB Lighting', '29hr Battery']
  },
  {
    id: 'logitech-g502-hero',
    name: 'Logitech G502 HERO Gaming Mouse',
    category: 'Gaming Gear',
    price: '$49',
    originalPrice: '$79',
    score: 97,
    badge: 'DEAL',
    description: '25K DPI HERO sensor, 11 programmable buttons, adjustable weights for perfect FPS and MOBA gameplay.',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B07GBZ4Q68?tag=gadgetzilla07-20',
    tags: ['25K DPI', '11 Buttons', 'Tunable Weights'],
    dealEndsAt: '2026-02-15'
  },
  {
    id: 'razer-deathadder-v3',
    name: 'Razer DeathAdder V3 Pro Wireless Gaming Mouse',
    category: 'Gaming Gear',
    price: '$99',
    score: 96,
    badge: 'TRENDING',
    description: '63g ultra lightweight, Focus Pro 30K optical sensor, HyperSpeed wireless, 90hr battery life.',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B0B6XZLNHQ?tag=gadgetzilla07-20',
    tags: ['63G Weight', '30K DPI', 'Wireless']
  },
  {
    id: 'razer-viper-v3-pro',
    name: 'Razer Viper V3 Pro Wireless Gaming Mouse',
    category: 'Gaming Gear',
    price: '$159',
    score: 96,
    badge: 'NEW',
    description: '30K DPI optical sensor, 63g ultra-lightweight, HyperSpeed wireless, 8000Hz polling rate for esports precision.',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=900',
    amazonUrl: 'https://www.amazon.com/dp/B0CKD964SV?tag=gadgetzilla07-20',
    tags: ['Wireless', '30K DPI', 'Esports']
  },
  {
    id: 'glorious-model-o-2-wireless',
    name: 'Glorious Model O 2 Wireless Gaming Mouse',
    category: 'Gaming Gear',
    price: '$109',
    score: 91,
    badge: 'TRENDING',
    description: 'Ultra-lightweight 59g, BAMF 2.0 26K sensor, 210hr battery, Glorious CORE software customization.',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B0BR93YTBC?tag=gadgetzilla07-20',
    tags: ['59G Weight', '26K DPI', '210hr Battery']
  },
  {
    id: 'steelseries-arctis-nova-pro',
    name: 'SteelSeries Arctis Nova Pro Wireless',
    category: 'Gaming Gear',
    price: '$349',
    score: 98,
    badge: 'HOT',
    description: 'Multi-system wireless gaming headset, active noise cancellation, Pro-Grade audio, dual battery system.',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B09ZYQYXFT?tag=gadgetzilla07-20',
    tags: ['ANC', 'Wireless', 'Dual Battery']
  },
  {
    id: 'hyperx-cloud-alpha-wireless',
    name: 'HyperX Cloud Alpha Wireless Gaming Headset',
    category: 'Gaming Gear',
    price: '$189',
    originalPrice: '$229',
    score: 95,
    badge: 'DEAL',
    description: '300hr battery life, DTS Headphone:X Spatial Audio, dual chamber drivers for legendary sound.',
    image: 'https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B09LQPX7LB?tag=gadgetzilla07-20',
    tags: ['300hr Battery', 'Wireless', 'Spatial Audio']
  },
  {
    id: 'sony-inzone-h9',
    name: 'Sony INZONE H9 Wireless Gaming Headset',
    category: 'Gaming Gear',
    price: '$299',
    score: 93,
    badge: 'TRENDING',
    description: '360 Spatial Sound, noise cancelling, 32hr battery, Discord certified for immersive gaming.',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B0B1N52Y8S?tag=gadgetzilla07-20',
    tags: ['ANC', '360 Sound', '32hr Battery']
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
    amazonUrl: 'https://www.amazon.com/dp/B08DF248LD?tag=gadgetzilla07-20',
    tags: ['Wireless', '40hr Battery', 'Multi-platform']
  },
  {
    id: 'razer-blackwidow-v4',
    name: 'Razer BlackWidow V4 75% Wireless Gaming Keyboard',
    category: 'Gaming Gear',
    price: '$219',
    score: 97,
    badge: 'HOT',
    description: 'Low profile HyperSpeed wireless, green mechanical switches, 2.4GHz & Bluetooth, multi-function roller.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900',
    amazonUrl: 'https://www.amazon.com/dp/B0FH7QBMFP?tag=gadgetzilla07-20',
    tags: ['Wireless', 'Mechanical', 'RGB']
  },
  {
    id: 'corsair-k70-rgb-pro',
    name: 'Corsair K70 RGB PRO Mechanical Gaming Keyboard',
    category: 'Gaming Gear',
    price: '$169',
    score: 91,
    badge: 'TRENDING',
    description: 'Cherry MX switches, per-key RGB, aluminum frame, tournament-grade with 8000Hz polling.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B09NCLR4M6?tag=gadgetzilla07-20',
    tags: ['Cherry MX', 'RGB', '8000Hz']
  },
  {
    id: 'corsair-k100-air',
    name: 'Corsair K100 AIR Wireless Gaming Keyboard',
    category: 'Gaming Gear',
    price: '$279',
    score: 95,
    badge: 'NEW',
    description: 'Ultra-thin wireless, Cherry MX switches, per-key RGB, 8000Hz polling, iCUE software, premium aluminum.',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=900',
    amazonUrl: 'https://www.amazon.com/dp/B0CHJ9M3GV?tag=gadgetzilla07-20',
    tags: ['Wireless', 'Cherry MX', '8000Hz']
  },
  {
    id: 'meta-quest-3',
    name: 'Meta Quest 3 VR Headset 512GB',
    category: 'Gaming Gear',
    price: '$499',
    originalPrice: '$649',
    score: 97,
    badge: 'DEAL',
    description: 'Next-gen mixed reality, 4K+ resolution, premium comfort, Batman Arkham Shadow included.',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B0C8VKH1ZH?tag=gadgetzilla07-20',
    tags: ['VR', 'Mixed Reality', '4K+'],
    dealEndsAt: '2026-02-28'
  },
  {
    id: 'steam-deck-oled',
    name: 'Valve Steam Deck OLED 512GB',
    category: 'Gaming Gear',
    price: '$549',
    score: 99,
    badge: 'HOT',
    description: 'Vibrant HDR OLED screen, longer battery life, faster downloads, premium anti-glare glass.',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B0CQC8ZGGM?tag=gadgetzilla07-20',
    tags: ['OLED', 'HDR', 'Handheld PC']
  },
  {
    id: 'secretlab-titan-evo-2022',
    name: 'Secretlab Titan Evo 2022 Gaming Chair',
    category: 'Gaming Gear',
    price: '$549',
    score: 96,
    badge: 'HOT',
    description: 'Magnetic memory foam head pillow, 4-way L-ADAPT lumbar support, cold-cure foam, premium leatherette.',
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=900',
    amazonUrl: 'https://www.amazon.com/dp/B09QCLZ4HQ?tag=gadgetzilla07-20',
    tags: ['Ergonomic', 'Lumbar', 'Premium']
  },
  {
    id: 'asus-rog-ally',
    name: 'ASUS ROG Ally Z1 Extreme Gaming Handheld',
    category: 'Gaming Gear',
    price: '$649',
    score: 95,
    badge: 'NEW',
    description: '120Hz FHD display, AMD Z1 Extreme, Windows 11, Xbox Game Pass ready, 512GB storage.',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B0C4TQRSMK?tag=gadgetzilla07-20',
    tags: ['120Hz', 'AMD Z1', 'Windows 11']
  },
  {
    id: 'ps5-dualsense-edge',
    name: 'PlayStation DualSense Edge Wireless Controller',
    category: 'Gaming Gear',
    price: '$199',
    score: 94,
    badge: 'TRENDING',
    description: 'Pro-grade controller, customizable buttons, swappable sticks, back buttons, and hair trigger locks.',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B0BSYFB99D?tag=gadgetzilla07-20',
    tags: ['Pro Controller', 'Customizable', 'Wireless']
  },

  // === PC COMPONENTS ===
  {
    id: 'redragon-k714-keyboard',
    name: 'Redragon K714 Magnetic Mechanical Keyboard',
    category: 'PC Components',
    price: '$63',
    score: 96,
    badge: 'TRENDING',
    description: 'Hot-swappable magnetic switches, rapid trigger tech, RGB per-key backlighting for ultimate gaming precision.',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B0DSFLS9H3?tag=gadgetzilla07-20',
    tags: ['Hot-Swap', 'RGB', 'Rapid Trigger']
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
    amazonUrl: 'https://www.amazon.com/dp/B0BHKCQBMN?tag=gadgetzilla07-20',
    tags: ['165Hz', '1440P', 'G-SYNC']
  },
  {
    id: 'lg-ultragear-27-oled',
    name: 'LG UltraGear 27" 240Hz OLED Gaming Monitor',
    category: 'PC Components',
    price: '$799',
    originalPrice: '$999',
    score: 99,
    badge: 'DEAL',
    description: '1440p OLED panel, 0.03ms response time, 240Hz refresh rate, G-SYNC compatible, perfect blacks, HDR10.',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900',
    amazonUrl: 'https://www.amazon.com/dp/B0CV1YPVQJ?tag=gadgetzilla07-20',
    tags: ['OLED', '240Hz', 'G-SYNC'],
    dealEndsAt: '2026-02-20'
  },
  {
    id: 'benq-zowie-xl2566k',
    name: 'BenQ ZOWIE XL2566K 360Hz Gaming Monitor',
    category: 'PC Components',
    price: '$549',
    score: 96,
    badge: 'HOT',
    description: '24.5" 1080p 360Hz, DyAc+ tech, ultra-fast 0.5ms GTG, XL setting to Share, esports tournament grade.',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900',
    amazonUrl: 'https://www.amazon.com/dp/B09TWVPS1P?tag=gadgetzilla07-20',
    tags: ['360Hz', '0.5ms', 'Esports']
  },
  {
    id: 'samsung-odyssey-g9',
    name: 'Samsung Odyssey G9 49" Curved Gaming Monitor',
    category: 'PC Components',
    price: '$999',
    originalPrice: '$1299',
    score: 97,
    badge: 'DEAL',
    description: '49" Super Ultrawide, 240Hz, 1ms, Dual QHD, 1000R curve, QLED, HDR1000 for immersive gaming.',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900',
    amazonUrl: 'https://www.amazon.com/dp/B088HH6LW5?tag=gadgetzilla07-20',
    tags: ['49"', '240Hz', 'QLED']
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
    amazonUrl: 'https://www.amazon.com/dp/B0874XN4D8?tag=gadgetzilla07-20',
    tags: ['1050MB/s', 'USB 3.2', 'Compact']
  },
  {
    id: 'samsung-990-pro-2tb',
    name: 'Samsung 990 PRO 2TB NVMe SSD',
    category: 'PC Components',
    price: '$169',
    originalPrice: '$229',
    score: 98,
    badge: 'DEAL',
    description: '7450MB/s read, 6900MB/s write, PCIe 4.0, heat spreader, 1200 TBW endurance for gaming and creation.',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=900',
    amazonUrl: 'https://www.amazon.com/dp/B0BHJJ9Y77?tag=gadgetzilla07-20',
    tags: ['PCIe 4.0', '7450MB/s', '2TB']
  },
  {
    id: 'seagate-firecuda-530-2tb',
    name: 'Seagate FireCuda 530 2TB PCIe Gen4 NVMe SSD',
    category: 'PC Components',
    price: '$179',
    score: 92,
    badge: 'TRENDING',
    description: 'Up to 7300MB/s speeds, PS5 compatible, PCIe Gen4 x4 NVMe, perfect for DirectStorage gaming.',
    image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B08Q54GMWL?tag=gadgetzilla07-20',
    tags: ['7300MB/s', 'Gen4', 'PS5']
  },
  {
    id: 'elgato-stream-deck-plus',
    name: 'Elgato Stream Deck Plus',
    category: 'PC Components',
    price: '$199',
    score: 94,
    badge: 'TRENDING',
    description: 'Advanced stream control with 8 LCD keys, 4 touch-sensitive dials, customizable actions for creators.',
    image: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=900',
    amazonUrl: 'https://www.amazon.com/dp/B0BNX8GBDL?tag=gadgetzilla07-20',
    tags: ['Streaming', '8 Keys', 'Touch Dials']
  },
  {
    id: 'elgato-facecam-pro',
    name: 'Elgato Facecam Pro 4K Webcam',
    category: 'PC Components',
    price: '$299',
    score: 95,
    badge: 'NEW',
    description: '4K60 HDR, Sony sensor, pro-grade optics, uncompressed video, USB-C for professional streaming and calls.',
    image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=900',
    amazonUrl: 'https://www.amazon.com/dp/B0BNX8FK5J?tag=gadgetzilla07-20',
    tags: ['4K60', 'HDR', 'Pro']
  },
  {
    id: 'razer-kiyo-pro-ultra',
    name: 'Razer Kiyo Pro Ultra 4K Webcam',
    category: 'PC Components',
    price: '$299',
    score: 94,
    badge: 'TRENDING',
    description: 'Uncompressed 4K30/1080p60, Sony STARVIS 2 sensor, advanced low-light performance for streaming.',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B0BN1H6LBV?tag=gadgetzilla07-20',
    tags: ['4K', 'Streaming', 'Low Light']
  },
  {
    id: 'asus-rog-rapture-gt-ax11000',
    name: 'ASUS ROG Rapture GT-AX11000 Gaming Router',
    category: 'PC Components',
    price: '$399',
    score: 95,
    badge: 'HOT',
    description: 'Tri-band WiFi 6, 2.5G gaming port, lifetime AiProtection Pro, ultra-fast speeds for lag-free gaming.',
    image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B07MRD1LDZ?tag=gadgetzilla07-20',
    tags: ['WiFi 6', 'Tri-Band', 'Gaming']
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
    amazonUrl: 'https://www.amazon.com/dp/B014ZQ07NE?tag=gadgetzilla07-20',
    tags: ['7 Ports', 'USB 3.0', 'Powered']
  },
  {
    id: 'nvidia-rtx-4080-super',
    name: 'NVIDIA GeForce RTX 4080 SUPER Graphics Card',
    category: 'PC Components',
    price: '$999',
    score: 98,
    badge: 'HOT',
    description: '16GB GDDR6X, Ada Lovelace architecture, DLSS 3, ray tracing, ultimate 4K gaming performance.',
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B0CS37NK2P?tag=gadgetzilla07-20',
    tags: ['16GB', 'DLSS 3', 'Ray Tracing']
  },
  {
    id: 'amd-ryzen-9-7950x3d',
    name: 'AMD Ryzen 9 7950X3D Processor',
    category: 'PC Components',
    price: '$549',
    score: 99,
    badge: 'HOT',
    description: '16 cores, 32 threads, 3D V-Cache, up to 5.7GHz boost, best gaming CPU for enthusiasts.',
    image: 'https://images.unsplash.com/photo-1555617766-c94804975da3?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B0BTRH9MNS?tag=gadgetzilla07-20',
    tags: ['16 Cores', '3D V-Cache', '5.7GHz']
  },

  // === AUDIO ===
  {
    id: 'airpods-pro-2',
    name: 'Apple AirPods Pro (2nd Generation)',
    category: 'Audio',
    price: '$249',
    score: 94,
    badge: 'TRENDING',
    description: 'Active noise cancellation, adaptive transparency, personalized spatial audio with dynamic head tracking.',
    image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B0CHWRXH8B?tag=gadgetzilla07-20',
    tags: ['ANC', 'Spatial Audio', 'USB-C']
  },
  {
    id: 'shure-mv7',
    name: 'Shure MV7 USB/XLR Podcast Microphone',
    category: 'Audio',
    price: '$249',
    score: 97,
    badge: 'HOT',
    description: 'Hybrid USB/XLR connectivity, voice isolation, auto level mode, broadcast-quality audio for creators.',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B08G7RG9ML?tag=gadgetzilla07-20',
    tags: ['USB/XLR', 'Broadcast', 'Auto Level']
  },
  {
    id: 'audio-technica-m50xbt2',
    name: 'Audio-Technica ATH-M50xBT2 Wireless Headphones',
    category: 'Audio',
    price: '$199',
    score: 94,
    badge: 'TRENDING',
    description: 'Legendary studio sound wireless, 50hr battery, multipoint pairing, low-latency mode for gaming.',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B09BYHD3N7?tag=gadgetzilla07-20',
    tags: ['50hr Battery', 'Studio Sound', 'Wireless']
  },
  {
    id: 'sony-wh-1000xm5',
    name: 'Sony WH-1000XM5 Wireless Headphones',
    category: 'Audio',
    price: '$349',
    originalPrice: '$399',
    score: 98,
    badge: 'DEAL',
    description: 'Industry-leading ANC, 30hr battery, crystal-clear calls, multipoint connection, premium comfort.',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B09XS7JWHH?tag=gadgetzilla07-20',
    tags: ['Best ANC', '30hr Battery', 'Premium']
  },
  {
    id: 'rode-nt-usb-plus',
    name: 'RODE NT-USB+ USB Microphone',
    category: 'Audio',
    price: '$169',
    score: 93,
    badge: 'NEW',
    description: 'Studio-quality condenser, internal DSP, zero-latency monitoring, Revolution Preamp for podcasts.',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B0B4L6XFLR?tag=gadgetzilla07-20',
    tags: ['Condenser', 'USB', 'DSP']
  },
  {
    id: 'jbl-quantum-910',
    name: 'JBL Quantum 910 Wireless Gaming Headset',
    category: 'Audio',
    price: '$249',
    score: 92,
    badge: 'TRENDING',
    description: 'Head tracking spatial audio, ANC, dual wireless, JBL QuantumSPHERE 360 for immersive gaming.',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B09QM3KZTP?tag=gadgetzilla07-20',
    tags: ['Head Tracking', 'ANC', '360 Audio']
  },

  // === SMART HOME ===
  {
    id: 'nanoleaf-4d-screen-kit',
    name: 'Nanoleaf 4D Screen Mirror + Lightstrip Kit',
    category: 'Smart Home',
    price: '$99',
    score: 92,
    badge: 'TRENDING',
    description: 'Immersive screen-synced lighting, works with 55-65" TVs, creates ambient bias lighting for gaming.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B0BCWS1PWK?tag=gadgetzilla07-20',
    tags: ['Screen Sync', 'RGB', 'Ambient']
  },
  {
    id: 'philips-hue-play-gradient',
    name: 'Philips Hue Play Gradient Lightstrip 65"',
    category: 'Smart Home',
    price: '$229',
    score: 95,
    badge: 'HOT',
    description: 'Multi-color gradient TV backlight, Hue Sync Box compatible, voice control, smart home integration.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B08LSQK4DH?tag=gadgetzilla07-20',
    tags: ['Gradient', 'Hue Sync', 'Voice']
  },
  {
    id: 'govee-gaming-light-bars',
    name: 'Govee Gaming Light Bars with Smart Controller',
    category: 'Smart Home',
    price: '$69',
    originalPrice: '$89',
    score: 91,
    badge: 'DEAL',
    description: 'RGBIC dual light bars, music sync, 40+ scene modes, works with Alexa & Google for epic setups.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B09B7NQ5YR?tag=gadgetzilla07-20',
    tags: ['RGBIC', 'Music Sync', 'Smart']
  },
  {
    id: 'echo-show-10',
    name: 'Amazon Echo Show 10 (3rd Gen)',
    category: 'Smart Home',
    price: '$249',
    score: 90,
    badge: 'TRENDING',
    description: '10.1" HD rotating screen, motion tracking, Zigbee hub, premium sound for smart home control.',
    image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B07VHZ41L8?tag=gadgetzilla07-20',
    tags: ['Rotating Screen', 'Zigbee', 'Alexa']
  },
  {
    id: 'ring-video-doorbell-pro-2',
    name: 'Ring Video Doorbell Pro 2',
    category: 'Smart Home',
    price: '$249',
    score: 93,
    badge: 'TRENDING',
    description: 'Head-to-toe 1536p HD video, 3D motion detection, bird\'s eye view, Alexa integration.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B086Q54K53?tag=gadgetzilla07-20',
    tags: ['1536p', '3D Motion', 'Alexa']
  },
  {
    id: 'nest-learning-thermostat',
    name: 'Google Nest Learning Thermostat',
    category: 'Smart Home',
    price: '$249',
    score: 94,
    badge: 'HOT',
    description: 'Auto-schedule learning, energy saving, remote control, works with Alexa and Google Assistant.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B0BHWF1VW4?tag=gadgetzilla07-20',
    tags: ['Learning', 'Energy Saving', 'Smart']
  },

  // === WEARABLES ===
  {
    id: 'apple-watch-ultra-2',
    name: 'Apple Watch Ultra 2',
    category: 'Wearables',
    price: '$799',
    score: 97,
    badge: 'HOT',
    description: '49mm titanium, double tap gesture, 3000 nits display, precision GPS, 36hr battery, S9 chip.',
    image: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B0CHX9N594?tag=gadgetzilla07-20',
    tags: ['Titanium', '36hr Battery', 'Precision GPS']
  },
  {
    id: 'samsung-galaxy-watch-6',
    name: 'Samsung Galaxy Watch 6 Classic 47mm',
    category: 'Wearables',
    price: '$399',
    originalPrice: '$449',
    score: 94,
    badge: 'DEAL',
    description: 'Rotating bezel, BioActive sensor, sleep coaching, Wear OS, 40hr battery life.',
    image: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B0C7939NLF?tag=gadgetzilla07-20',
    tags: ['Rotating Bezel', 'BioActive', '40hr Battery']
  },
  {
    id: 'garmin-fenix-7x',
    name: 'Garmin Fenix 7X Solar Multisport GPS Watch',
    category: 'Wearables',
    price: '$899',
    score: 98,
    badge: 'HOT',
    description: 'Solar charging, topo maps, multi-band GPS, 28 day battery, titanium bezel for athletes.',
    image: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B09NSDZ4BN?tag=gadgetzilla07-20',
    tags: ['Solar', 'Topo Maps', '28 Day Battery']
  },
  {
    id: 'oura-ring-gen-3',
    name: 'Oura Ring Gen 3 Heritage',
    category: 'Wearables',
    price: '$299',
    score: 92,
    badge: 'TRENDING',
    description: 'Titanium sleep tracker, heart rate, blood oxygen, temperature sensing, 7-day battery.',
    image: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B0CSJ1CG63?tag=gadgetzilla07-20',
    tags: ['Sleep Tracking', 'Titanium', 'SpO2']
  },
  {
    id: 'whoop-4-0',
    name: 'WHOOP 4.0 Fitness Tracker',
    category: 'Wearables',
    price: '$239',
    score: 93,
    badge: 'NEW',
    description: 'Strain coach, recovery tracking, sleep analysis, waterproof, continuous heart rate monitoring.',
    image: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B08P5FN7LG?tag=gadgetzilla07-20',
    tags: ['Strain Coach', 'Recovery', 'Waterproof']
  },
  {
    id: 'rayban-meta-smart-glasses',
    name: 'Ray-Ban Meta Smart Glasses',
    category: 'Wearables',
    price: '$299',
    score: 91,
    badge: 'TRENDING',
    description: '12MP camera, open-ear audio, Meta AI, livestreaming, stylish Wayfarer design.',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80',
    amazonUrl: 'https://www.amazon.com/dp/B0CGXYGFFG?tag=gadgetzilla07-20',
    tags: ['12MP Camera', 'Meta AI', 'Livestream']
  }
];

// Helper function to get deal products
export const getDealProducts = (): Gadget[] => {
  return gadgets.filter(g => g.badge === 'DEAL' || g.originalPrice);
};

// Helper function to get products by category
export const getProductsByCategory = (category: GadgetCategory): Gadget[] => {
  return gadgets.filter(g => g.category === category);
};

// Helper function to get top rated products
export const getTopRatedProducts = (limit: number = 10): Gadget[] => {
  return [...gadgets].sort((a, b) => b.score - a.score).slice(0, limit);
};

// Helper function to get new products
export const getNewProducts = (): Gadget[] => {
  return gadgets.filter(g => g.badge === 'NEW');
};
