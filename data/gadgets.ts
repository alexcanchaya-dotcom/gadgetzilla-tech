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
    id: 'neon-aurora-headset',
    name: 'Aurora RGB Gaming Headset',
    category: 'Gaming Gear',
    price: '$129',
    score: 95,
    badge: 'TRENDING',
    description: '7.1 surround, carbon-fiber frame, AI noise-cancel mic for clutch comms.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    amazonUrl: '#',
    tags: ['RGB', '360 audio', 'wired/wireless']
  },
  {
    id: 'cyberdeck-keyboard',
    name: 'CyberDeck Mechanical Keyboard',
    category: 'PC Components',
    price: '$189',
    score: 98,
    badge: 'HOT',
    description: 'Gasket mount, magnetic switches, per-key neon, and command dial for streamers.',
    image: 'https://images.unsplash.com/photo-1587202372775-98927f1c0481?auto=format&fit=crop&w=900&q=80',
    amazonUrl: '#',
    tags: ['Hot-swap', 'Tri-mode', 'PBT caps']
  },
  {
    id: 'pulse-smartwatch',
    name: 'PulseForge Tactical Smartwatch',
    category: 'Wearables',
    price: '$249',
    score: 92,
    badge: 'TRENDING',
    description: 'Military-grade build, sleep coach, and esports recovery insights.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    amazonUrl: '#',
    tags: ['Heart rate', 'GPS', 'Titanium']
  },
  {
    id: 'nebula-lightbar',
    name: 'Nebula Reactive Lightbar',
    category: 'Smart Home',
    price: '$89',
    score: 90,
    badge: 'TRENDING',
    description: 'Screen-sync RGB halo with ambient AI scenes and music-reactive beats.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    amazonUrl: '#',
    tags: ['Screen sync', 'Voice', 'Matter-ready']
  },
  {
    id: 'titan-mouse',
    name: 'Titan Ultralight Mouse',
    category: 'Gaming Gear',
    price: '$79',
    score: 88,
    badge: 'TRENDING',
    description: '58g carbon honeycomb shell with optical switches and 4K polling.',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80',
    amazonUrl: '#',
    tags: ['Ultralight', '4K polling', 'PTFE feet']
  },
  {
    id: 'quantum-soundbar',
    name: 'Quantum Bass Soundbar',
    category: 'Audio',
    price: '$219',
    score: 93,
    badge: 'HOT',
    description: 'Dolby Atmos mini-bar with sub, 3D spatial presets, and RGB underglow.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
    amazonUrl: '#',
    tags: ['Dolby Atmos', 'Bluetooth 5.3', 'eARC']
  },
  {
    id: 'stealth-router',
    name: 'Stealth Wi-Fi 7 Router',
    category: 'Smart Home',
    price: '$349',
    score: 91,
    badge: 'TRENDING',
    description: 'Tri-band Wi-Fi 7 beast with RGB fins, game accelerator, and mesh-ready.',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=80',
    amazonUrl: '#',
    tags: ['Wi-Fi 7', 'Mesh', 'RGB']
  },
  {
    id: 'spectra-mic',
    name: 'Spectra Streaming Mic',
    category: 'Audio',
    price: '$159',
    score: 89,
    badge: 'TRENDING',
    description: 'Supercardioid capsule, tap-to-mute, and reactive LED matrix visualizer.',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=900&q=80',
    amazonUrl: '#',
    tags: ['RGB', 'Tap mute', 'Shock mount']
  }
];
