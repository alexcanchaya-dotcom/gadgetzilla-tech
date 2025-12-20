export type GadgetCategory = 'Gaming Gear' | 'Smart Home' | 'Audio' | 'Wearables' | 'PC Components';

export type Gadget = {
  id: string;
  name: string;
  category: GadgetCategory;
  price: string;
  score: number;
  badge: TRENDING | HOT;
  description: string;
  image: string;
  amazonUrl: string;
  tags: string[];
};

export const gadgets: Gadget[] = [
  {
    id: logitech-g733-headset,
    name: Logitech G733 LIGHTSPEED Wireless Gaming Headset,
    category: Gaming Gear,
    price: $119,
    score: 98,
    badge: HOT,
    description: Wireless RGB gaming headset with Lightsync, Blue VO!CE mic tech, and PRO-G drivers for pro-level audio.,
    image: https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=900&q=80,
    amazonUrl: https://www.amazon.com/dp/B081415GCS?tag=gadgetzilla07-20,
    tags: [Wireless, RGB Lighting, 29hr Battery]
  },
  {
    id: redragon-k714-keyboard,
    name: Redragon K714 Magnetic Mechanical Keyboard,
    category: PC Components,
    price: $63,
    score: 96,
    badge: TRENDING,
    description: Hot-swappable magnetic switches, rapid trigger tech, RGB per-key backlighting for ultimate gaming precision.,
    image: https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=900&q=80,
    amazonUrl: https://www.amazon.com/dp/B0DSFLS9H3?tag=gadgetzilla07-20,
    tags: [Hot-Swap, RGB, Rapid Trigger]
  },
  {
    id: logitech-g502-hero,
    name: Logitech G502 HERO Gaming Mouse,
    category: Gaming Gear,
    price: $49,
    score: 97,
    badge: HOT,
    description: 25K DPI HERO sensor, 11 programmable buttons, adjustable weights for perfect FPS and MOBA gameplay.,
    image: https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80,
    amazonUrl: https://www.amazon.com/dp/B07GBZ4Q68?tag=gadgetzilla07-20,
    tags: [25K DPI, 11 Buttons, Tunable Weights]
  },
  {
    id: asus-tuf-monitor,
    name: ASUS TUF Gaming 27 1440P Monitor,
    category: PC Components,
    price: $279,
    score: 95,
    badge: TRENDING,
    description: 165Hz refresh rate, 1ms response time, G-SYNC compatible for buttery-smooth competitive gaming.,
    image: https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80,
    amazonUrl: https://www.amazon.com/dp/B0BHKCQBMN?tag=gadgetzilla07-20,
    tags: [165Hz, 1440P, G-SYNC]
  },
  {
    id: airpods-pro-2,
    name: Apple AirPods Pro (2nd Generation),
    category: Audio,
    price: $249,
    score: 94,
    badge: TRENDING,
    description: Active noise cancellation, adaptive transparency, personalized spatial audio with dynamic head tracking.,
    image: https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?auto=format&fit=crop&w=900&q=80,
    amazonUrl: https://www.amazon.com/dp/B0CHWRXH8B?tag=gadgetzilla07-20,
    tags: [ANC, Spatial Audio, USB-C]
  },
  {
    id: samsung-t7-ssd,
    name: Samsung T7 Portable SSD 1TB,
    category: PC Components,
    price: $109,
    score: 93,
    badge: HOT,
    description: Up to 1050MB/s transfer speeds, shock-resistant metal design, password protection for portable power.,
    image: https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=900&q=80,
    amazonUrl: https://www.amazon.com/dp/B0874XN4D8?tag=gadgetzilla07-20,
    tags: [1050MB/s, USB 3.2, Compact]
  },
  {
    id: xbox-controller,
    name: Xbox Wireless Controller,
    category: Gaming Gear,
    price: $59,
    score: 92,
    badge: TRENDING,
    description: Textured grips, hybrid D-pad, Bluetooth wireless for Xbox, PC, mobile with 40hr battery life.,
    image: https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=900&q=80,
    amazonUrl: https://www.amazon.com/dp/B08DF248LD?tag=gadgetzilla07-20,
    tags: [Wireless, 40hr Battery, Multi-platform]
  },
  {
    id: anker-usb-hub,
    name: Anker USB 3.0 Hub (7-Port),
    category: PC Components,
    price: $39,
    score: 90,
    badge: TRENDING,
    description: SuperSpeed USB 3.0 with 36W power adapter, LED indicators, for multi-device pro setups.,
    image: https://images.unsplash.com/photo-1625948515291-69613efd103f?auto=format&fit=crop&w=900&q=80,
    amazonUrl: https://www.amazon.com/dp/B014ZQ07NE?tag=gadgetzilla07-20,
    tags: [7 Ports, USB 3.0, Powered],
  {
    id: razer-deathadder-v3,
    name: Razer DeathAdder V3 Pro Wireless Gaming Mouse,
    category: Gaming Gear,
    price: $99,
    score: 96,
    badge: TRENDING,
    description: 63g ultra lightweight, Focus Pro 30K optical sensor, HyperSpeed wireless, 90hr battery life.,
    image: https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80,
    amazonUrl: https://www.amazon.com/dp/B0B6XZLNHQ?tag=gadgetzilla07-20,
    tags: [63G WEIGHT, 30K DPI, WIRELESS]
  },
  {
    id: steelseries-arctis-nova-pro,
    name: SteelSeries Arctis Nova Pro Wireless,
    category: Gaming Gear,
    price: $349,
    score: 97,
    badge: HOT,
    description: Multi-system wireless gaming headset, active noise cancellation, Pro-Grade audio, dual battery system.,
    image: https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=900&q=80,
    amazonUrl: https://www.amazon.com/dp/B09ZYQYXFT?tag=gadgetzilla07-20,
    tags: [ANC, WIRELESS, DUAL BATTERY]
  },
  {
    id: meta-quest-3,
    name: Meta Quest 3 VR Headset 512GB,
    category: Gaming Gear,
    price: $499,
    score: 95,
    badge: TRENDING,
    description: Next-gen mixed reality, 4K+ resolution, premium comfort, Batman Arkham Shadow included.,
    image: https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=900&q=80,
    amazonUrl: https://www.amazon.com/dp/B0C8VKH1ZH?tag=gadgetzilla07-20,
    tags: [VR, MIXED REALITY, 4K+]
  },
  {
    id: elgato-stream-deck-plus,
    name: Elgato Stream Deck Plus,
    category: PC Components,
    price: $199,
    score: 94,
    badge: TRENDING,
    description: Advanced stream control with 8 LCD keys, 4 touch-sensitive dials, customizable actions for creators.,
    image: https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?auto=format&fit=crop&w=900&q=80,
    amazonUrl: https://www.amazon.com/dp/B09DRDTB8Y?tag=gadgetzilla07-20,
    tags: [STREAMING, 8 KEYS, TOUCH DIALS]
  },
  {
    id: hyperx-cloud-alpha-wireless,
    name: HyperX Cloud Alpha Wireless Gaming Headset,
    category: Gaming Gear,
    price: $189,
    score: 93,
    badge: HOT,
    description: 300hr battery life, DTS Headphone:X Spatial Audio, dual chamber drivers for legendary sound.,
    image: https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=900&q=80,
    amazonUrl: https://www.amazon.com/dp/B09LQPX7LB?tag=gadgetzilla07-20,
    tags: [300HR BATTERY, WIRELESS, SPATIAL AUDIO]
  },
  {
    id: benq-zowie-xl2546k,
    name: BenQ ZOWIE XL2546K Gaming Monitor 24.5,
    category: PC Components,
    price: $449,
    score: 96,
    badge: HOT,
    description: 360Hz refresh rate, 0.5ms response, DyAc+ tech, esports-grade performance for competitive gaming.,
    image: https://images.unsplash.com/photo-1527443060-8db2e53eb5cd?auto=format&fit=crop&w=900&q=80,
    amazonUrl: https://www.amazon.com/dp/B08LLD2QXJ?tag=gadgetzilla07-20,
    tags: [360HZ, 0.5MS, ESPORTS]
  },
  {
    id: corsair-k70-rgb-pro,
    name: Corsair K70 RGB PRO Mechanical Gaming Keyboard,
    category: Gaming Gear,
    price: $169,
    score: 91,
    badge: TRENDING,
    description: Cherry MX switches, per-key RGB, aluminum frame, tournament-grade with 8000Hz polling.,
    image: https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80,
    amazonUrl: https://www.amazon.com/dp/B09NCLR4M6?tag=gadgetzilla07-20,
    tags: [CHERRY MX, RGB, 8000HZ]
  },
  {
    id: razer-kiyo-pro-ultra,
    name: Razer Kiyo Pro Ultra 4K Webcam,
    category: PC Components,
    price: $299,
    score: 94,
    badge: TRENDING,
    description: Uncompressed 4K30/1080p60, Sony STARVIS 2 sensor, advanced low-light performance for streaming.,
    image: https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=80,
    amazonUrl: https://www.amazon.com/dp/B0BN1H6LBV?tag=gadgetzilla07-20,
    tags: [4K, STREAMING, LOW LIGHT]
  },
  {
    id: steam-deck-oled,
    name: Valve Steam Deck OLED 512GB,
    category: Gaming Gear,
    price: $549,
    score: 98,
    badge: HOT,
    description: Vibrant HDR OLED screen, longer battery life, faster downloads, premium anti-glare glass.,
    image: https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=900&q=80,
    amazonUrl: https://www.amazon.com/dp/B0CQC8ZGGM?tag=gadgetzilla07-20,
    tags: [OLED, HDR, HANDHELD PC]
  },
  {
    id: seagate-firecuda-530-2tb,
    name: Seagate FireCuda 530 2TB PCIe Gen4 NVMe SSD,
    category: PC Components,
    price: $179,
    score: 92,
    badge: TRENDING,
    description: Up to 7300MB/s speeds, PS5 compatible, PCIe Gen4 x4 NVMe, perfect for DirectStorage gaming.,
    image: https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=900&q=80,
    amazonUrl: https://www.amazon.com/dp/B08Q54GMWL?tag=gadgetzilla07-20,
    tags: [7300MB/S, GEN4, PS5]
  },
  {
    id: nanoleaf-4d-screen-kit,
    name: Nanoleaf 4D Screen Mirror + Lightstrip Kit,
    category: Smart Home,
    price: $99,
    score: 90,
    badge: TRENDING,
    description: Immersive screen-synced lighting, works with 55-65 TVs, creates ambient bias lighting for gaming.,
    image: https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80,
    amazonUrl: https://www.amazon.com/dp/B0BCWS1PWK?tag=gadgetzilla07-20,
    tags: [SCREEN SYNC, RGB, AMBIENT]
  },
  {
    id: asus-rog-rapture-gt-ax11000,
    name: ASUS ROG Rapture GT-AX11000 Gaming Router,
    category: PC Components,
    price: $399,
    score: 95,
    badge: HOT,
    description: Tri-band WiFi 6, 2.5G gaming port, lifetime AiProtection Pro, ultra-fast speeds for lag-free gaming.,
    image: https://images.unsplash.com/photo-1606904825846-647eb07f5be2?auto=format&fit=crop&w=900&q=80,
    amazonUrl: https://www.amazon.com/dp/B07MRD1LDZ?tag=gadgetzilla07-20,
    tags: [WIFI 6, TRI-BAND, GAMING]
  },
  {
    id: shure-mv7-podcast-mic,
    name: Shure MV7 USB/XLR Podcast Microphone,
    category: Audio,
    price: $249,
    score: 97,
    badge: HOT,
    description: Hybrid USB/XLR connectivity, voice isolation, auto level mode, broadcast-quality audio for creators.,
    image: https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=80,
    amazonUrl: https://www.amazon.com/dp/B08G7RG9ML?tag=gadgetzilla07-20,
    tags: [USB/XLR, BROADCAST, AUTO LEVEL]
  },
  {
    id: sony-inzone-h9,
    name: Sony INZONE H9 Wireless Gaming Headset,
    category: Gaming Gear,
    price: $299,
    score: 93,
    badge: TRENDING,
    description: 360 Spatial Sound, noise cancelling, 32hr battery, Discord certified for immersive gaming.,
    image: https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80,
    amazonUrl: https://www.amazon.com/dp/B0B1N52Y8S?tag=gadgetzilla07-20,
    tags: [ANC, 360 SOUND, 32HR BATTERY]
  },
  {
    id: glorious-model-o-2-wireless,
    name: Glorious Model O 2 Wireless Gaming Mouse,
    category: Gaming Gear,
    price: $109,
    score: 91,
    badge: TRENDING,
    description: Ultra-lightweight 59g, BAMF 2.0 26K sensor, 210hr battery, Glorious CORE software customization.,
    image: https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=900&q=80,
    amazonUrl: https://www.amazon.com/dp/B0BR93YTBC?tag=gadgetzilla07-20,
    tags: [59G WEIGHT, 26K DPI, 210HR BATTERY]
  },
  {
    id: 'razer-blackwidow-v4',
    name: 'Razer BlackWidow V4 75% Wireless Gaming Keyboard',
    category: 'Gaming Gear',
    price: '$219',
    score: 97,
    badge: 'HOT',
    description: 'Low profile HyperSpeed wireless, green mechanical switches, 2.4GHz & Bluetooth, multi-function roller for ultimate control.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900',
    amazonUrl: 'https://www.amazon.com/dp/B0FH7QBMFP?tag=gadgetzilla07-20',
    tags: ['WIRELESS', 'MECHANICAL', 'RGB']
  },
  {
    id: 'razer-viper-v3-pro',
    name: 'Razer Viper V3 Pro Wireless Gaming Mouse',
    category: 'Gaming Gear',
    price: '$159',
    score: 96,
    badge: 'TRENDING',
    description: '30K DPI optical sensor, 63g ultra-lightweight, HyperSpeed wireless, 8000Hz polling rate for esports precision.',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=900',
    amazonUrl: 'https://www.amazon.com/dp/B0CKD964SV?tag=gadgetzilla07-20',
    tags: ['WIRELESS', '30K DPI', 'ESPORTS']
  },
  {
    id: 'steelseries-arctis-nova-pro',
    name: 'SteelSeries Arctis Nova Pro Wireless',
    category: 'Audio',
    price: '$349',
    score: 98,
    badge: 'HOT',
    description: 'Premium wireless gaming headset, dual battery system, active noise cancellation, 360-degree spatial audio, GameDAC Gen 2.',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=900',
    amazonUrl: 'https://www.amazon.com/dp/B09ZYQR4DQ?tag=gadgetzilla07-20',
    tags: ['WIRELESS', 'ANC', 'PREMIUM']
  },
  {
    id: 'lg-ultragear-27-oled',
    name: 'LG UltraGear 27" 240Hz OLED Gaming Monitor',
    category: 'PC Components',
    price: '$799',
    score: 99,
    badge: 'TRENDING',
    description: '1440p OLED panel, 0.03ms response time, 240Hz refresh rate, G-SYNC compatible, perfect blacks, HDR10.',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900',
    amazonUrl: 'https://www.amazon.com/dp/B0CV1YPVQJ?tag=gadgetzilla07-20',
    tags: ['OLED', '240HZ', 'G-SYNC']
  },
  {
    id: 'elgato-stream-deck-plus',
    name: 'Elgato Stream Deck Plus',
    category: 'PC Components',
    price: '$199',
    score: 94,
    badge: 'TRENDING',
    description: '8 LCD keys, 4 dials, touch strip, plugin ecosystem for streamers and content creators, customizable macros.',
    image: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=900',
    amazonUrl: 'https://www.amazon.com/dp/B0BNX8GBDL?tag=gadgetzilla07-20',
    tags: ['STREAMING', '8 KEYS', 'CREATOR']
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
    tags: ['ERGONOMIC', 'LUMBAR', 'PREMIUM']
  },
  {
    id: 'elgato-facecam-pro',
    name: 'Elgato Facecam Pro 4K Webcam',
    category: 'PC Components',
    price: '$299',
    score: 95,
    badge: 'TRENDING',
    description: '4K60 HDR, Sony sensor, pro-grade optics, uncompressed video, USB-C for professional streaming and calls.',
    image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=900',
    amazonUrl: 'https://www.amazon.com/dp/B0BNX8FK5J?tag=gadgetzilla07-20',
    tags: ['4K60', 'HDR', 'PRO']
  },
  {
    id: 'shure-mv7',
    name: 'Shure MV7 Podcast Microphone',
    category: 'Audio',
    price: '$249',
    score: 97,
    badge: 'TRENDING',
    description: 'USB/XLR hybrid, dynamic mic for streaming and podcasting, voice isolation, auto level mode, ShurePlus app.',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900',
    amazonUrl: 'https://www.amazon.com/dp/B08G7RG9ML?tag=gadgetzilla07-20',
    tags: ['USB/XLR', 'DYNAMIC', 'STREAM']
  },
  {
    id: 'razer-kiyo-pro',
    name: 'Razer Kiyo Pro Streaming Webcam',
    category: 'PC Components',
    price: '$199',
    score: 93,
    badge: 'HOT',
    description: 'Adaptive light sensor, 1080p60, HDR, uncompressed video, adjustable FOV, low-light performance.',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=900',
    amazonUrl: 'https://www.amazon.com/dp/B08T1MKN4Y?tag=gadgetzilla07-20',
    tags: ['1080P60', 'HDR', 'LOW-LIGHT']
  },
  {
    id: 'samsung-990-pro-2tb',
    name: 'Samsung 990 PRO 2TB NVMe SSD',
    category: 'PC Components',
    price: '$169',
    score: 98,
    badge: 'TRENDING',
    description: '7450MB/s read, 6900MB/s write, PCIe 4.0, heat spreader, 1200 TBW endurance for gaming and creation.',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=900',
    amazonUrl: 'https://www.amazon.com/dp/B0BHJJ9Y77?tag=gadgetzilla07-20',
    tags: ['PCIE 4.0', '7450MB/S', '2TB']
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
    tags: ['360HZ', '0.5MS', 'ESPORTS']
  },
  {
    id: 'corsair-k100-air',
    name: 'Corsair K100 AIR Wireless Gaming Keyboard',
    category: 'Gaming Gear',
    price: '$279',
    score: 95,
    badge: 'TRENDING',
    description: 'Ultra-thin wireless, Cherry MX switches, per-key RGB, 8000Hz polling, iCUE software, premium aluminum.',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=900',
    amazonUrl: 'https://www.amazon.com/dp/B0CHJ9M3GV?tag=gadgetzilla07-20',
    tags: ['WIRELESS', 'CHERRY MX', '8000HZ']
  },
  {
    id: 'meta-quest-3',
    name: 'Meta Quest 3 VR Headset 512GB',
    category: 'Smart Home',
    price: '$649',
    score: 97,
    badge: 'TRENDING',
    description: 'Mixed reality gaming, 4K+ Infinite Display, Snapdragon XR2 Gen 2, Touch Plus controllers, 512GB storage.',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=900',
    amazonUrl: 'https://www.amazon.com/dp/B0C8VKH1ZH?tag=gadgetzilla07-20',
    tags: ['VR', 'MIXED REALITY', '512GB']
  },
  {
    id: 'nanoleaf-4d-screen',
    name: 'Nanoleaf 4D Screen Mirror & Lightstrip',
    category: 'Smart Home',
    price: '$99',
    score: 92,
    badge: 'TRENDING',
    description: 'Real-time screen mirroring, 16M+ colors, gradient zones, music sync, app control, immersive RGB gaming.',
    image: 'https://images.unsplash.com/photo-1565049786474-2dae0bda11c5?auto=format&fit=crop&w=900',
    amazonUrl: 'https://www.amazon.com/dp/B0C87VXTF3?tag=gadgetzilla07-20',
    tags: ['RGB', 'SCREEN SYNC', 'SMART']
  },
  {
    id: 'hyperx-cloud-alpha-wireless',
    name: 'HyperX Cloud Alpha Wireless Gaming Headset',
    category: 'Audio',
    price: '$199',
    score: 95,
    badge: 'TRENDING',
    description: '300hr battery life, DTS Headphone:X spatial audio, dual chamber drivers, detachable noise-cancelling mic.',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=900',
    amazonUrl: 'https://www.amazon.com/dp/B09T2T6SG1?tag=gadgetzilla07-20',
    tags: ['WIRELESS', '300HR', 'DTS:X']
  }
  }
];
